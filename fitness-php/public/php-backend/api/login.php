<?php
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}

// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    exit(0);
}

require_once __DIR__ . '/vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

// Get credentials from .env file
$login_env = $_ENV['LOGIN'];
$pass_env = $_ENV['PASSWORD'];

// Assuming you're sending credentials as JSON in a POST request
// Retrieve data from request
$content = file_get_contents("php://input");
$decoded = json_decode($content, true);

// Check if the credentials are provided
if (!isset($decoded['username']) || !isset($decoded['password'])) {
    http_response_code(400); // Bad request
    echo json_encode(['message' => 'Username and password are required']);
    exit;
}

$username = $decoded['username'];
$password = $decoded['password'];

// Validate credentials
if ($username === $login_env && $password === $pass_env) {
    // Login successful
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Login successful']);
} else {
    // Login failed
    http_response_code(401); // Unauthorized
    echo json_encode(['success' => false, 'message' => 'Login failed']);
}