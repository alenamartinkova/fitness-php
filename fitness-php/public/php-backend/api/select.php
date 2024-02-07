<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

// Include your database connection file here
include_once 'db_connection.php';

// For GET request
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    try {
        // Perform database query
        $stmt = $pdo->query('SELECT * FROM texts');
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

        // You should send back the result as a JSON response
        echo json_encode($results);
    } catch (PDOException $e) {
        // Send back a proper error response
        http_response_code(500);
        echo json_encode(['message' => 'Internal Server Error', 'error' => $e->getMessage()]);
    }
} else {
    http_response_code(405);
    echo json_encode(['message' => 'Method not allowed']);
}
?>