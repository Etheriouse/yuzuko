let inp = document.getElementById("entrertext");

inp.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    //alert("you pressed enter key");
    let val = inp.value;
    console.log(val);
    inp.value = "";
    if (val != "") {
      addMsg("pseudo", val, "Yuzu_thinks.png");
    }
  }
});

let addsearch = document.getElementById("addorsearchimg");

let add = false;

function shiftispressed() {
  return add;
}

document.addEventListener("keydown", (e) => {
  if (e.shiftKey) {
    add = !add;

    if (add) {
      addsearch.src = `../asset/add.png`;
      addsearch.style.width = "40px";
    }
  }
  if (!add) {
    addsearch.src = `../asset/search.png`;
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
      linktothread.href = `thread/${name.value}.html`;

      let parentDiv = document.getElementById("contentAside");
      let chidldiv = document.getElementById("threadx");

      console.log(thread);

      console.log(thread.outerHTML);

      parentDiv.insertBefore(thread, chidldiv);
      parentDiv.insertBefore(thread, chidldiv);
    
      name.value = "";
    }
  }
}

function addMsg(pseudonime, messageContent, pathPdp) {
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

  let tpseudo = document.createTextNode(`${pseudonime} ${timeSetNow}`);

  let msg = document.createTextNode(messageContent);

  messagex.classList.add("messagex");
  messagex.setAttribute("id", "messagex");
  headermsg.classList.add("headermsg");
  pdp.classList.add("pdp");
  pseudo.classList.add("pseudo");
  pdp.src = `../asset/${pathPdp}`;
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
