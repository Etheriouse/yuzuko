<?php 

if(isset($loginCorrect) && $loginCorrect): ?>

<script
      type="text/javascript"
      src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"
      ;></script>



    <aside>
      <div class="searchoradd">
        <img
          onclick="addthread()"
          id="addorsearchimg"
          src="/zera/asset/search.png"
        />
        <input id="soa" type="text" placeholder="Search or add" />
      </div>
      <div id="contentAside" class="contentAside">
        <!-- <div id="threadx" class="threadx">
          <h3><a class="linktoThread" href="/zera/src/home.php">Général</a></h3>
        </div> -->
        
        <?php foreach($threads as $th): ?>
            <div id="threadx" class="threadx">
                <h3><a class="linktoThread" href="/zera/src<?php echo $th['path']; ?>"><?php echo $th['name']; ?></a></h3>
            </div>
        <?php endforeach; ?>
    </div>
    </aside>

    <main>
      <header>
        <nav>
          <div class="threadname">
            <h3>Thread Name</h3>
          </div>
          <div class="profil">
            <img
              onclick="tg()"
              id="pdpprofil"
              class="pdprofil"
              src="/zera/asset/<?php echo getPdp($userActual); ?>"
            />
            <h3 class="namep"><?php echo getUsername($userActual); ?></h3>
          </div>
        </nav>
    </header>

    <div id="spacetalk" class="spacetalk">

        <?php foreach($actualThread['ArrayMsg'] as $Msg): ?>
            <div id="messagex" class="messagex">
                <div class="headermsg">
                    <img class="pdp" src="/zera/asset/<?php echo getMessageAuthorPdp($Msg)?>"/>
                    <h4 class="pseudo"><?php echo getMessageAuthorName($Msg)?> <span>time</span></h4>
                </div>
                <p class="contentmsg"><?php echo getMessageContent($Msg)?></p>
            </div>
        <?php endforeach; ?>
      
    </div>

      <div class="enterContent">
        <div class="barEnter">
          <input
            id="entrertext"
            class="entrertext"
            type="text"
            placeholder="Enter texte"
          />
        </div>
        <img class="buttonenter" src="/zera/asset/add_file.png" />
      </div>
    </main>
    <script type="text/javascript">


let inp = document.getElementById("entrertext");

inp.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    //alert("you pressed enter key");
    let val = inp.value;
    console.log(val);
    inp.value = "";
    if (val != "") {
      addMsg(val);
    }
  }
});

function addMsg(messageContent) {
  let now = new Date();
  let timeSetNow =
    now.getFullYear() +
    "/" +
    now.getMonth() +
    "/" +
    now.getDay() +
    " " +
    now.getHours() +
    ":" +
    now.getMinutes() +
    ":" +
    now.getSeconds();

  let messagex = document.createElement("div");
  let headermsg = document.createElement("div");
  let pdp = document.createElement("img");
  let pseudo = document.createElement("h4");
  let contentmsg = document.createElement("p");

  let tpseudo = document.createTextNode(`<?php echo getUsername($userActual); ?> ${timeSetNow}`);

  let msg = document.createTextNode(messageContent);

  messagex.classList.add("messagex");
  messagex.setAttribute("id", "messagex");
  headermsg.classList.add("headermsg");
  pdp.classList.add("pdp");
  pseudo.classList.add("pseudo");
  console.log("<?php echo getPdp($userActual); ?>");
  pdp.src = `/zera/asset/<?php echo getPdp($userActual); ?>`;
  pseudo.classList.add("pseudo");
  contentmsg.classList.add("contentmsg");

  pseudo.appendChild(tpseudo);
  contentmsg.appendChild(msg);
  headermsg.appendChild(pdp);
  headermsg.appendChild(pseudo);
  messagex.appendChild(headermsg);
  messagex.appendChild(contentmsg);

  let parentDiv = document.getElementById("spacetalk");
  let chidldiv = document.getElementById("messagex");

  parentDiv.insertBefore(messagex, chidldiv);
}

</script>
    <script type="text/javascript" src="/zera/src/script/fdp.js"></script>

<?php endif; ?>