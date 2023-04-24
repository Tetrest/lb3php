<?php
  require_once('../server.php');

  if(isset($_POST['type'])){
    switch($_POST['type']){
      case 'ex1':
        $pjname = $_POST['pjname'];
        // $pjname = 'Project_3, Police';
        $date = $_POST['date'];
        // $date = '2019-04-10';
        
        // 2019-04-10
        // Project_3, Police

        $result = $db->query("SELECT `work`.`date`, `work`.`description`, `project`.`name` FROM `work`, `project` WHERE `work`.`date` = '$date' AND `work`.`FID_PROJECTS` = `project`.`ID_PROJECTS` AND `project`.`name` = '$pjname'");

        echo json_encode(['code' => $result]);
        break;
      case 'ex2':
        $pjname = $_POST['pjname'];
        $result = $db->query("SELECT `work`.`time_start`, `work`.`time_end` FROM `work`, `project` WHERE `work`.`FID_PROJECTS` = `project`.`ID_PROJECTS` AND `project`.`name` = '$pjname'");

        echo json_encode(['code' => $result]);
        break;
      case 'ex3':
        $chief = $_POST['chief'];
        $result = $db->query("SELECT count(*) AS count FROM `worker`, `department` WHERE `department`.`ID_DEPARTMENT` = `worker`.`FID_DEPARTMENT` AND `department`.`chief` = '$chief'");
        $result = $result[0];
        echo json_encode(['code' => $result]);
        break;
    }
  }
?>