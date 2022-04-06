function rps(yc) {
  let hc, bc; //hc=human choice,bc=bot choice
  hc = yc.id;

  bc = random_bc();
  console.log("your choice " + hc);
  console.log("bot choice " + bc);
  result = rpsgame(hc, bc);
  console.log(result);

  msg = message_result(result);

  console.log(msg);

  frontendrps(hc, bc, msg);

  function random_bc() {
    // function random bot choice
    return ["rock", "paper", "sissor"][Math.floor(Math.random() * 3)];
  }
}

function rpsgame(hc, bc) {
  let possib = {
    rock: { sissor: 1, rock: 0.5, paper: 0 },
    paper: { sissor: 0, rock: 1, paper: 0.5 },
    sissor: { sissor: 0.5, rock: 0, paper: 1 },
  };

  let yourpoint = possib[hc][bc];
  let botpoint = possib[bc][hc];
  return [yourpoint, botpoint];
}

function message_result([yourpoint, botpoint]) {
  if (yourpoint == botpoint) {
    return {
      message: "TIED",
      color: "yellow",
    };
  } else if (yourpoint > botpoint) {
    return {
      message: "You won",
      color: "green",
    };
  } else if (yourpoint < botpoint) {
    return {
      message: "You lost",
      color: "RED",
    };
  }
}

function frontendrps(hc, bc, msg) {
  var fronrps = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    sissor: document.getElementById("sissor").src,
  };

  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("sissor").remove();

  image_human = fronrps[hc];
  console.log(image_human);
  image_bot = fronrps[bc];

  var image1 = document.createElement("div");
  var image2 = document.createElement("div");
  var text = document.createElement("div");
  image1.innerHTML =
    "<img src='" +
    image_human +
    "'height=150 width=150 style=' box-shadow: 10px 10px 50px rgba(37, 16, 260, 2); margin:10px'>";
  text.innerHTML =
    "<h1 style='color:" +
    msg.color +
    ";padding:30px;font-size:50px'>" +
    msg.message +
    "</h1>";
  image2.innerHTML =
    "<img src='" +
    image_bot +
    "'height=150 width=150 style=' box-shadow: 10px 10px 50px rgba(37, 16, 260, 2);margin:10px'>";
  document.getElementById("box").appendChild(image1);
  document.getElementById("box2").appendChild(text);
  document.getElementById("box3").appendChild(image2);
}
