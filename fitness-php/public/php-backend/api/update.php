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

// Include your database connection file here
include_once 'db_connection.php';

// For POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        $texts = json_decode(file_get_contents('php://input'), true);

        // Begin transaction
        $pdo->beginTransaction();

        foreach ($texts as $text) {
            $stmt = $pdo->prepare('UPDATE texts SET value = :value WHERE text_key = :text_key');
            $stmt->execute(['value' => $text['value'], 'text_key' => $text['text_key']]);
        }

        // Commit transaction
        $pdo->commit();

        echo json_encode(['message' => 'Update successful']);
    } catch (PDOException $e) {
        // Rollback transaction in case of error
        $pdo->rollBack();

        http_response_code(500);
        echo json_encode(['error' => 'Internal Server Error', 'message' => $e->getMessage()]);
    }
} else {
    http_response_code(405);
    echo json_encode(['message' => 'Method not allowed']);
}
?>
