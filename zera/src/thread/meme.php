
<?php include_once("../bdd.php");

$actualThread = getThreadByName($threads, basename(__FILE__, '.php')); ?>

<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Yuzuko</title>
  </head>
  <body>

  <?php include_once("../login.php"); echo $loginCorrect; ?>

  
      <link rel="stylesheet" href="<?php if(isset($loginCorrect) && $loginCorrect) echo "../style.css"?>" />
      <link rel="stylesheet" href="<?php if(isset($loginCorrect) && !$loginCorrect) echo "../login.css"?>" />
  <?php include_once("../home.php"); ?>
    

    </body>
</html>

