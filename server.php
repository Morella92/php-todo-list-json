<?php

    //leggo il file json
    $list = file_get_contents('./list.json');

    //imposto header
    header ('Content-Type: application/json');

    
?>