
var audio = document.getElementById("diablo");
audio.volume = 0.02;

const texte = [
  "Vas y Pd *atchoum* *tousse* Ughh",
  "NIQUE TES MORTS HUGO",
  "J'ai pris le mauvais goulée",
  "JE SUIS LA NUIT",
  "C'est pas bien de taper les femmes, moi je tue",
  "J'vais encore avoir mal au crane hein demain",
  "en mode kiltran",
  "en mode retro pegi 18",
  "On fait un Live horreur?",
  "Je vais l'enculer ton DarkSouls",
  "Un petit peu de Merguez party quand même",
  "LE GRAND RENE",
  "Je bouffe pas mes gommes moi",
  "Un petit Symphony of the night?",
  "Diablo 4 est un CLASSIQUE",
  "Tout le monde me fait pitie * finis sa despe *"
];

var selecmotd = Math.floor(texte.length * Math.random());

var motd = texte[selecmotd];
document.getElementById("motd").innerHTML = motd;

var game = {
  score: 0,
  totalscore: 0,
  totalclicks: 0,
  clickvalue: 1,
  version: 0.0,

  addtoscore: function (amount) {
    this.score += amount;
    this.totalscore += amount;
    display.updatescore();
  },

  getsps: function () {
    var sps = 0;
    for (i = 0; i < building.name.length; i++) {
      sps += building.income[i] * building.count[i];
    }
    return sps;
  },
};
var building = {
  name: ["Gobelet (1g/s)", "Pietra (10g/s)", "Champagne (20g/s)", "Champ rosé (100g/s)","Mousseux (200g/s)","Jumeau Astral (1kg/s)","Old Nick (2kg/s)","Vin Rouge (10kg/s)","Vin Blanc (20kg/s)","Whisky(Bouteille) (100kg/s)","Pack de Pietra (200kg/s)","Baril de Whisky (1t/s)","Alcool à brûler (2t/s)","E85 (10t/s)","Sp95-E10 (20t/s)","Sp95 (100t/s)","Sp98 (200t/s)","Diesel (1kt/s)"], //,"Old Nick","Vin Rouge","Vin Blanc","Whisky(Bouteille)"
  image: [
    "gobelet.jpg",
    "pietra33.jpg",
    "champfix.webp",
    "champrose.jpg",
    "mousseux.png",
    "jumeau.png",
    "oldnick.png",
    "pif.png",
    "blanc.png",
    "label5.jpg",
    "packpietra.png",
    "barrilwhisky.png",
    "bruler.png",
    "e85.png",
    "95e10.webp",
    "SP95.png",
    "SP98.webp",
    "diesel.png"
  ],
  count: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0],
  income: [1, 10, 20, 100, 200,1000,2000,10000,20000,100000,200000,1000000,2000000,10000000,20000000,100000000,200000000,1000000000], //WIPWIPWIPWIIWPIWIPIWPIWIPW JUMEAU JE SU IS LA NUIT
  cost: [15, 300, 1500, 30000, 150000, 3e+6, 15e+6, 3e+7, 15e+7, 3e+8, 15e+8, 3e+9, 15e+9, 3e+10, 15e+10, 3e+11, 15e+11, 3e+12],

  purchase: function (index) {
    if (game.score >= this.cost[index]) {
      game.score -= this.cost[index];
      this.count[index]++; // ++ = Ca plus 1
      this.cost[index] = Math.ceil(this.cost[index] * 1.15);
      display.updatescore();
      display.updateshop();
    }
  },
};
var display = {
  updatescore: function () {
    document.getElementById("score").innerHTML = updatescore(game.score);
    document.getElementById("sps").innerHTML = updatesps();
    // document.title = updatescore(game.score) + " - NONOCLICKER";
  },

  updateshop: function () {
    document.getElementById("shopcontainer").innerHTML = "";
    for (z = 0; z < building.name.length; z++) {
      // console.log("nique", building.name.length);
      document.getElementById("shopcontainer").innerHTML +=
        '<table class="shopbutton" onclick="building.purchase(' +
        z +
        ')"><tr><td id="image"><img src="images/' +
        building.image[z] +
        '" /></td><td id="nomprix"><p>' +
        building.name[z] +
        "</p><p><span> " +
        updateunite(building.cost[z]) +
        '</span> Alcool</p></td><td id="amount"><span>' +
        building.count[z] +
        "</span></td></tr></table>";
    }
  },
};
function updatesps() {
  var unite = "g/s";
  var sps = game.getsps();
  if (sps >= 1e+9){
      unite = "kt/s"
      sps /=1e+9;
  } else if (sps >= 1000000) {
    unite = "t/s";
    sps /= 1000000;
  } else if (sps >= 100000) {
    unite = "q/s";
    sps /= 100000;
  } else if (sps >= 1000) {
    unite = "kg/s";
    sps /= 1000;
  }
  return `${sps} ${unite}`;
}
function updateunite(prixtest) {
  var poids = "g";
  var nouveaupoids = prixtest;
  if (nouveaupoids >= 1e+9) {
    poids = "kt";
    nouveaupoids = prixtest / 1e+9;}
  else if (nouveaupoids >= 1000000) {
    poids = "t";
    nouveaupoids = prixtest / 1000000;
  } else if (nouveaupoids >= 100000) {
    poids = "q";
    nouveaupoids = prixtest / 100000;
  } else if (nouveaupoids >= 1000) {
    poids = "kg";
    nouveaupoids = prixtest / 1000;
  }
  return `${nouveaupoids} ${poids}`;
}
function updatescore(nouveauscore) {
  var unite = "g/L";
  if (nouveauscore >= 1e+9) {
    unite = "kt/L";
    nouveauscore /= 1e+9;
  } else if (nouveauscore >= 1000000) {
    unite = "t/L";
    nouveauscore /= 1000000;
  } else if (nouveauscore >= 100000) {
    unite = "q/L";
    nouveauscore /= 100000;
  } else if (nouveauscore >= 1000) {
    unite = "kg/L";
    nouveauscore /= 1000;
  }
  return `${nouveauscore} ${unite}`;
}
function savegame() {
  var gamesave = {
    score: game.score,
    totalscore: game.totalscore,
    totalclicks: game.totalclicks,
    clickvalue: game.clickvalue,
    version: game.version,
    buildingcount: building.count,
    buildingincome: building.income,
    buildingcost: building.cost,
  };
  localStorage.setItem("gamesave", JSON.stringify(gamesave));
}

function loadsave() {
  var savedgame = JSON.parse(localStorage.getItem("gamesave"));
  if (localStorage.getItem("gamesave") !== null) {
    if (typeof savedgame.score !== "undefined") game.score = savedgame.score;
    if (typeof savedgame.totalscore !== "undefined")
      game.totalscore = savedgame.totalscore;
    if (typeof savedgame.totalclicks !== "undefined")
      game.totalclicks = savedgame.totalclicks;
    if (typeof savedgame.score !== "undefined") game.score = savedgame.score;
    if (typeof savedgame.buildingcount !== "undefined") {
      for (i = 0; i < savedgame.buildingcount.length; i++) {
        building.count[i] = savedgame.buildingcount[i];
      }
    }
    if (typeof savedgame.buildingincome !== "undefined") {
      for (i = 0; i < savedgame.buildingincome.length; i++) {
        building.income[i] = savedgame.buildingincome[i];
      }
    }
    if (typeof savedgame.buildingcost !== "undefined") {
      for (i = 0; i < savedgame.buildingcost.length; i++) {
        building.cost[i] = savedgame.buildingcost[i];
      }
    }
  }

  //   if(typeof savedgame.buildingincome!== "undefined") game.buildingincome= savedgame.buildingincome;
  //   if(typeof savedgame.buildingcost!== "undefined") game.buildingcost= savedgame.buildingcost;
  // }
}
window.onload = function () {
  loadsave();
  display.updatescore();
  display.updateshop();
  // var confirmation = confirm("On met de la zik?");
  // if (confirmation) {
  //     var audio = new Audio("audio/diablo.mp3");
  //     audio.play();}
};
function resetgame() {
  if (
    confirm(
      "What? Fuck you, fuck you, fuck you, fuck you! Dislike man? Fuck you! Fuck you you fuck you!"
    )
  ) {
    var gamesave = {};
    localStorage.setItem("gamesave", JSON.stringify(gamesave));
    location.reload();
  }
}

setInterval(function () {
  game.score += game.getsps();
  game.totalscore += game.getsps();
  display.updatescore();
}, 1000); //1 seconde

setInterval(function () {
  savegame();
}, 30000); //30 secondes
