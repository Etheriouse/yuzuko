<?php
  if(isset($_POST['mail'])) {
  if(isset($_POST['pwd'])) {

    foreach($users as $us) {
      if($us['mail'] == $_POST['mail'] && $us['pwd'] == $_POST['pwd']) {
        $loginCorrect = true;
        $userActual = $us;
        break;
      } else {
        $error_message = "mail or password invalide :c";
      }
    }


  }
}

if(isset($loginCorrect) && !$loginCorrect):?>

<?php if($error_message != ""): ?>

<script type="text/javascript">
  alert("<?php echo $error_message ?>")
</script>

<?php endif ?>

<div class="titml">
        <h1>Yuzuko.fr</h1>
    </div>

    <form method="post">
        
        <div class="inputt">
            <h3>Email: </h3>
            <input name="mail" type="text" placeholder="Email"/>
        </div>

        <div class="inputt">
            <h3> Mot de passe: </h3>
            <input name="pwd" type="text"placeholder="Password"/>
        </div>

        <div class="inputt" >
            <button type="submit" >Login</button>
        </div>

    </form>
<?php endif;

?>