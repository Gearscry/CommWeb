<?php 
    $today = getdate();

    $tab = array("Il est : ". $today[hours].":".$today[minutes].":".$today[seconds],array("hours " => $today[hours],
                   "minutes" => $today[minutes], "seconds" => $today[seconds]));

    $json = json_encode($tab);
    print_r($json);