var audio = document.getElementById("diablo");
audio.volume = 0.02;

const texte = [
  "Vas y Pd *atchoum* *tousse* Ughh",
  "NIQUE TES MORTS HUGO",
  "J'ai pris le mauvais goulée",
  "JE SUIS LA NUIT",
  "C'est pas bien de taper les femmes, moi je tue",
  "J'vais encore avoir mal au crane hein demain",
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
  name: ["Gobelet", "Pietra", "Champagne", "Champ rosé", "Jumeau Astral"],
  image: [
    "gobelet.jpg",
    "pietra33.jpg",
    "champfix.webp",
    "champrose.jpg",
    "jumeau.png",
  ],
  count: [0, 0, 0, 0, 0],
  income: [1, 10, 20, 100, 5000], //WIPWIPWIPWIIWPIWIPIWPIWIPW JUMEAU JE SU IS LA NUIT
  cost: [15, 300, 1500, 10000, 100000],

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
        '<table class="shopbutton" onclick="building.purchase('+z+')"><tr><td id="image"><img src="images/' +building.image[z] +'" /></td><td id="nomprix"><p>'+ building.name[z] +'</p><p><span> '+updateunite(building.cost[z])+'</span> Alcool</p></td><td id="amount"><span>'+building.count[z] +'</span></td></tr></table>';
    }
  },
};
function updatesps() {
  var unite = "g/s";
  var sps = game.getsps()
  if (sps >= 1000000) {
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
  if (nouveaupoids >= 1000000) {
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
  if (nouveauscore >= 1000000) {
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

setInterval(function() {
  game.score += game.getsps();
  game.totalscore += game.getsps();
  display.updatescore();
},1000) //1 seconde


setInterval(function () {
  savegame();
}, 30000); //30 secondes
