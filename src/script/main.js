let inp = document.getElementById("inputtxt");

inp.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    //alert("you pressed enter key");
    let val = inp.value;
    console.log(val);
    inp.value = "";
    if(val != "") {
      addMessage("Etheriouse", val, "Yuzu_thinks.png")
    }
  }
});
function Message() {
  alert("Go to Message");
}

function General() {
  alert("Go to General");
}

function addDive(pseudonime, messageContent, timeSetNow, SrcPdp) {

    let msg1 = document.createElement("div");
    let namepdptime = document.createElement("div");
    let pdp = document.createElement("img");
    let pseudotime = document.createElement("h3");
    let contents = document.createElement("div");
    let message = document.createElement("p");
    let pseudo = document.createElement("span");
    let time = document.createElement("span");

    let tpseudo = document.createTextNode(pseudonime);
    let ttime = document.createTextNode(timeSetNow);

    let msg = document.createTextNode(messageContent);

    msg1.classList.add("msg1");
    msg1.setAttribute("id", "mess")
    namepdptime.classList.add("namepdptime");
    pdp.classList.add("pdp");
    pseudotime.classList.add("pseudotime");
    contents.classList.add("contents");
    pdp.src = `../asset/${SrcPdp}`;
    pdp.style.maxWidth = "100%";
    pseudo.classList.add("pseudo");
    time.classList.add("time");
    
    /* msg1.style.display = "flex";
    msg1.style.flexDirection = "column";
    msg1.style.margin = "10px";
    msg1.style.padding = "10px";
    msg1.style.borderRadius = "5px";
    msg1.style.border = "solid black 5px";
    msg1.style.backgroundColor = "red";

    pdp.style.maxWidth = "100%";
    pdp.style.maxHeight = "100%";
    pdp.style.borderRadius = "50%";

    namepdptime.style.display = "flex";
    namepdptime.style.flexDirection = "row";
    namepdptime.style.height = "70px";
    namepdptime.style.width = "100px";

    pseudotime.style.display = "flex";
    pseudotime.style.flexDirection = "row";

    pseudo.style.fontSize = "x-large";
    pseudo.style.fontFamily = "sans-serif";
    pseudo.style.fontWeight = "600";
    pseudo.style.paddingLeft = "5%";

    time.style.fontSize = "x-large";
    time.style.fontFamily = "sans-serif";
    time.style.fontWeight = "100";
    time.style.paddingLeft = "5%";
    time.style.fontStyle = "italic";

    contents.style.fontSize = "large";
    contents.style.fontFamily = "sans-serif";
    contents.style.fontWeight = "500";
    contents.style.paddingLeft = "6%";*/

    pseudo.appendChild(tpseudo);
    time.appendChild(ttime);
    pseudotime.appendChild(pseudo);
    pseudotime.appendChild(time);
    message.appendChild(msg);
    namepdptime.appendChild(pdp);
    namepdptime.appendChild(pseudotime);
    contents.appendChild(message);
    msg1.appendChild(namepdptime);
    msg1.appendChild(contents);

    let parentDiv = document.getElementById("tchatSpace");
    let chidldiv = document.getElementById("mess")

    parentDiv.insertBefore(msg1, chidldiv);
    //parentDiv.appendChild(msg1);
    /*
              let testdiv = document.createElement("div");
              testdiv.innerHTML(cot);

              let div = document.createElement("div");
              div.style.backgroundColor = "red";
              div.style.margin = "auto";
              div.style.padding = "auto";
              div.style.width = "100%";
              div.style.height = "100%"
              let parentDiv = document.getElementById("conta");
              parentDiv.appendChild(div);
  */
    //parentDiv.innerHTML=div;
    //div.childNodes.appendChild(div)
    //document.body.appendChild(div)
  }

  function addMessage(pseudonime, messageContent, SrcPdp) {
    
    let now = new Date();
    let time = now.getFullYear()+"/"+now.getMonth()+"/"+now.getDay()+" "+now.getHours()+":"+now.getMinutes()+":"+now.getSeconds();

    addDive(pseudonime, messageContent, time, SrcPdp)
  }