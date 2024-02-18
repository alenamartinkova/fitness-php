import { useCallback, useEffect, useState } from "react";

import { debounce } from "lodash";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Admin() {
	const [isAuthenticated, setIsAuthenticated] = useState(checkLoginStatus);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [texts, setTexts] = useState([]);
	const [originalTexts, setOriginalTexts] = useState([]);
	const [showSuccessToast, setShowSuccessToast] = useState(false);
	const [showErrorToast, setShowErrorToast] = useState(false);

	useEffect(() => {
		if (isAuthenticated) {
			fetchData();
		}
	}, [isAuthenticated]);

	function checkLoginStatus() {
		const isLoggedIn = localStorage.getItem('isLoggedIn');
		const expiryTime = localStorage.getItem('expiryTime');
		if (!isLoggedIn || !expiryTime) {
			return false;
		}

		const now = new Date();
		if (now > new Date(expiryTime)) {
			// Session has expired
			localStorage.removeItem('isLoggedIn');
			localStorage.removeItem('expiryTime');
			return false;
		}

		return true;
	}

	const handleLogin = async (event) => {
		event.preventDefault();
		try {
			const response = await fetch("http://localhost:8000/api/login.php", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ username, password }),
				credentials: 'include',
			});
			if (!response.ok) {
				throw new Error("Login failed");
			}
			const data = await response.json();
			// Assuming the API returns a success status to indicate a successful login
			if (data.success) {
				setIsAuthenticated(true);
				const now = new Date();
				const expiryTime = new Date(now.getTime() + 60*60*1000); // 1 hour from now
				localStorage.setItem('isLoggedIn', 'true');
				localStorage.setItem('expiryTime', expiryTime.toISOString());
			} else {
				setIsAuthenticated(false);
				setShowErrorToast(true);
				setTimeout(() => setShowErrorToast(false), 3000);
			}
		} catch (error) {
			console.error("Login error:", error);
			setShowErrorToast(true);
			setTimeout(() => setShowErrorToast(false), 3000);
		}
	};

	// Fetch Data from the Database
	const fetchData = async () => {
		try {
			const response = await fetch("http://localhost:8000/api/select.php");
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			const data = await response.json();
			setTexts(data);
			setOriginalTexts(JSON.parse(JSON.stringify(data)));
		} catch (error) {
			console.error("Error fetching data:", error);
			setShowErrorToast(true);
			setTimeout(() => setShowErrorToast(false), 3000);
		}
	};

	// Handle Submit
	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const updatedTexts = texts
				.filter((text, index) => text.value !== originalTexts[index].value)
				.map((text) => ({
					text_key: text.text_key,
					value: text.value,
				}));

			if (updatedTexts.length === 0) {
				console.error("No changes to update");
				setShowErrorToast(true);
				setTimeout(() => setShowErrorToast(false), 3000);
				return; // Exit if no changes
			}

			const response = await fetch("http://localhost:8000/api/update.php", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(updatedTexts),
			});

			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			localStorage.removeItem("texts");
			setShowSuccessToast(true);
			setTimeout(() => setShowSuccessToast(false), 3000);
		} catch (error) {
			console.error("Error updating data:", error);
			setShowErrorToast(true);
			setTimeout(() => setShowErrorToast(false), 3000);
		}
	};

	// Handle Input Change
	const handleInputChange = useCallback(
		debounce((key, value) => {
			setTexts((prevTexts) =>
				prevTexts.map((text) =>
					text.text_key === key ? { ...text, value } : text
				)
			);
		}, 500),
		[]
	);

	if (!isAuthenticated) {
		return (
			<div className="container mx-auto flex flex-col gap-4 my-4">
				<form onSubmit={handleLogin}>
					<div className="mb-4">
						<label className="block mb-2 font-medium">Login</label>
						<input
							type="text"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							className={'border rounded-lg py-2 px-3'}
							required
						/>
					</div>
					<div className="mb-4">
						<label className="block mb-2 font-medium">Heslo</label>
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className={'border rounded-lg py-2 px-3'}
							required
						/>
					</div>
					<button
						type="submit"
						className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg w-auto text-center py-2 px-6"
					>
						Login
					</button>
				</form>
				{showErrorToast && (
					<div className="bg-red-500 text-white p-4 rounded-md text-center">
						Error logging in!
					</div>
				)}
			</div>
		);
	}

	return (
		<div className={"container mx-auto flex flex-col gap-4 my-4"}>
			{texts.length > 0 ? (
				<form onSubmit={handleSubmit}>
					{texts.map((text) => (
						<div key={text.text_key} className={"mb-4"}>
							<label className="block mb-2 font-medium">{text.text_key}</label>
							<ReactQuill
								theme="snow"
								value={text.value}
								onChange={(value) => handleInputChange(text.text_key, value)}
							/>
						</div>
					))}
					<button
						type="submit"
						className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg w-[300px] text-center fixed bottom-2 py-2 right-2"
					>
						Submit
					</button>
				</form>
			) : (
				"No texts"
			)}

			{showSuccessToast && (
				<div className="bg-green-500 text-white p-4 rounded-md w-[300px] text-center fixed bottom-2 py-2 left-2">
					Update successful!
				</div>
			)}

			{showErrorToast && (
				<div className="bg-red-500 text-white p-4 rounded-md w-[300px] text-center fixed bottom-2 py-2 left-2">
					Error updating texts!
				</div>
			)}
		</div>
	);
}
