function tg(name, content) {
  $.ajax({
    type: "POST",
    url: "/zera/src/makethread.php",
    data: {
      name: name,
      content: content,
    },
    error: function() {
      alert("Error can create thread of " + name);
    },
    success: function() {
      console.log("succes !");
    } 
  })
}

let addsearch = document.getElementById("addorsearchimg");

let add = false;

function shiftispressed() {
  return add;
}

document.addEventListener("keydown", (e) => {
  if (e.shiftKey) {
    add = !add;

    if (add) {
      addsearch.src = `/zera/asset/add.png`;
      addsearch.style.width = "40px";
    }
  }
  if (!add) {
    addsearch.src = `/zera/asset/search.png`;
  }
});

function addthread() {
  if (shiftispressed()) {
    let name = document.getElementById("soa");
    console.log(name.value);
    console.log(name);
    if (name.value != "") {
      let threadname = document.createTextNode(name.value);
      let thread = document.createElement("div");
      let threadtitle = document.createElement("h3");
      let linktothread = document.createElement("a");

      linktothread.appendChild(threadname);
      threadtitle.appendChild(linktothread);
      thread.appendChild(threadtitle);

      thread.classList.add("threadx");
      linktothread.classList.add("linktoThread");
      linktothread.href = `/zera/src/thread/${name.value}.php`;

      let parentDiv = document.getElementById("contentAside");
      let chidldiv = document.getElementById("threadx");

      console.log(thread);

      console.log(thread.outerHTML);

      parentDiv.insertBefore(thread, chidldiv);
      parentDiv.insertBefore(thread, chidldiv);
      
      let contentThreadValue = befor;

      tg(name.value, contentThreadValue);

      name.value = "";
    }
  }
}


// function addMsg(messageContent, pathPdp) {
//   let now = new Date();
//   let timeSetNow =
//     now.getFullYear() +
//     "/" +
//     now.getMonth() +
//     "/" +
//     now.getDay() +
//     " " +
//     now.getHours() +
//     ":" +
//     now.getMinutes() +
//     ":" +
//     now.getSeconds();

//   let messagex = document.createElement("div");
//   let headermsg = document.createElement("div");
//   let pdp = document.createElement("img");
//   let pseudo = document.createElement("h4");
//   let contentmsg = document.createElement("p");

//   let tpseudo = document.createTextNode(`<?php echo getUsername($userActual); ?> ${timeSetNow}`);

//   let msg = document.createTextNode(messageContent);

//   messagex.classList.add("messagex");
//   messagex.setAttribute("id", "messagex");
//   headermsg.classList.add("headermsg");
//   pdp.classList.add("pdp");
//   pseudo.classList.add("pseudo");
//   pdp.src = `/zera/asset/${pathPdp}`;
//   pseudo.classList.add("pseudo");
//   contentmsg.classList.add("contentmsg");

//   pseudo.appendChild(tpseudo);
//   contentmsg.appendChild(msg);
//   headermsg.appendChild(pdp);
//   headermsg.appendChild(pseudo);
//   messagex.appendChild(headermsg);
//   messagex.appendChild(contentmsg);

//   let parentDiv = document.getElementById("spacetalk");
//   let chidldiv = document.getElementById("messagex");

//   parentDiv.insertBefore(messagex, chidldiv);
// }


let befor = `
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

`;
