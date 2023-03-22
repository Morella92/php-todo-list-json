<?php

// leggiamo il contenuto del file todo.json
$todo_list = file_get_contents('./list.json');


$todo_item = json_decode($todo_list, true);

$new_todo = isset($_POST['item']) ? $_POST['item'] : null;

if ($new_todo !== null) {
  $todo_item[] = $new_todo;
}

$new_string = json_encode($todo_item);
file_put_contents('./list.json', $new_string);


//impostiamo l'header Content-Type
header('Content-Type: application/json');

// stampiamo la stringa json
echo $new_string;
