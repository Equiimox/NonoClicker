function toggleGif() {
  console.log("TAMER");
  var gifElement = document.getElementById("gif");
  var hideButton = document.getElementById("hide-button");

  if (gifElement.style.display === "none") {
    var sound = new Audio("audio/peurpd.mp3");
    sound.play();
    gifElement.style.display = "block";
    hideButton.innerText = "Cacher le GIF";
  } else {
    var sound = new Audio("audio/couilles.mp3");
    sound.play();
    gifElement.style.display = "none";
    hideButton.innerText = "Afficher le GIF";
  }
}
// var gifVisible = true;

// function toggleGif() {
//   var gifElement = document.getElementById("gif");
//   var hideButton = document.getElementById("hide-button");

//   if (gifVisible) {
//     var sound = new Audio("audio/peurpd.mp3");
//     sound.play();
//     gifElement.style.display = "none";
//     hideButton.innerText = "Afficher le GIF";
//   } else {
//     var sound = new Audio("audio/couilles.mp3");
//     sound.play();
//     gifElement.style.display = "inline-block";
//     hideButton.innerText = "Cacher le GIF";
//   }

//   gifVisible = !gifVisible;
// }
// function hideGif() {
//   var gifElement = document.getElementById("gif");
//   if (gifElement) {
//     gifElement.style.display = "none";
//   } else {
//     console.error("L'élément avec l'identifiant 'gif' n'a pas été trouvé.");
//   }
// }
var diablo = document.getElementById("diablo");
diablo.volume = 0.02;

// var hideButton = document.getElementById("hide-button");
// if (hideButton) {
//   hideButton.addEventListener("click", toggleGif);
// }
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
  "Tout le monde me fait pitie * finis sa despe *",
];

var selecmotd = Math.floor(texte.length * Math.random());

var motd = texte[selecmotd];
document.getElementById("motd").innerHTML = motd;

var game = {
  score: 0,
  totalscore: 0,
  totalclicks: 0,
  clickvalue: 1,
  prestigecount: 0,
  prestigepoints: 0,
  prestigeinprogress: false,
  version: 0.1,
  prestigetalents: {
    upgradeiron: false,
    upgradegold: false,
    upgradeplatinum: false,
    upgradeemerald: false,
    upgradediamond: false,
    upgrademult: 0,
  },
  click: function () {
    this.totalclicks++;
  },

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
  name: [
    "Gobelet",
    "Pietra",
    "Champagne",
    "Champ rosé",
    "Mousseux",
    "Stong Zero",
    "Old Nick",
    "Vin Rouge",
    "Vin Blanc",
    "Whisky(Bouteille)",
    "Pack de Pietra",
    "Baril de Whisky",
    "Alcool à brûler",
    "E85",
    "Sp95-E10",
    "Sp95",
    "Sp98",
    "Diesel",
    "Kérosène",
  ],
  image: [
    "gobelet.png",
    "pietra.png",
    "champfix.webp",
    "champrose.png",
    "mousseux.png",
    "strong.webp",
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
    "diesel.png",
    "kerosene.png",
  ],
  count: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  income: [
    1, 10, 20, 100, 200, 1000, 2000, 10000, 20000, 100000, 200000, 1000000,
    2000000, 10000000, 20000000, 100000000, 200000000, 1000000000, 2e9,
  ],
  cost: [
    15, 300, 1500, 30000, 150000, 3e6, 15e6, 3e7, 15e7, 3e8, 15e8, 3e9, 15e9,
    3e10, 15e10, 3e11, 15e11, 3e12, 15e12,
  ],

  purchase: function (index) {
    if (game.score >= this.cost[index]) {
      game.score -= this.cost[index];
      this.count[index]++;
      this.cost[index] = Math.ceil(this.cost[index] * 1.15);
      display.updatescore();
      display.updateshop();
      display.updateupgrades();
    }
  },
};

// L'objet `upgrade` et les autres fonctions et variables continuent ici

var upgrade = {
  name: [
    "Gobelet en pierre",
    "Curseur en pierre",
    "Pietra en pierre",
    "Champagne en pierre",
    "Champ rosé en pierre",
    "Mousseux en pierre",
    "Strong en pierre",
    "Old Nick en pierre",
    "Vin Rouge en pierre",
    "Vin Blanc en pierre",
    "Label 5 en pierre",
    "Pack de Pietra en pierre",
  ],
  description: [
    "Les gobelets sont 2 fois plus efficace",
    "Les clics sont 2 fois plus efficace",
    "Les Pietra sont 2 fois plus efficace",
    "Les Champagnes sont 2 fois plus efficace",
    "Les Champ rosés sont 2 fois plus efficace",
    "Les Mousseux sont 2 fois plus efficace",
    "Les Strongs sont 2 fois plus efficace",
    "Les Old Nick sont 2 fois plus efficace",
    "Les Vins Rouges sont 2 fois plus efficace",
    "Les Vins Blancs sont 2 fois plus efficace",
    "Les Label 5 sont 2 fois plus efficace",
    "Les Packs de Pietra sont 2 fois plus efficace",
  ],
  image: [
    "gobelet_p.jpg",
    "cursor_p.webp",
    "pietra_p.png",
    "champfix_p.webp",
    "champrose_p.png",
    "mousseux_p.png",
    "strong_p.webp",
    "oldnick_p.png",
    "pif_p.png",
    "blanc_p.png",
    "label5_p.jpg",
    "packpietra_p.png",
  ],
  type: [
    "building",
    "click",
    "building",
    "building",
    "building",
    "building",
    "building",
    "building",
    "building",
    "building",
    "building",
    "building",
  ],
  cost: [300, 10000, 1500, 3e4, 15e4, 3e5, 15e5, 3e6, 15e6, 3e7, 15e7, 3e8],
  buildingindex: [0, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  requirement: [10, 300, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
  bonus: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  purchased: [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],

  purchase: function (index) {
    if (!this.purchased[index] && game.score >= this.cost[index]) {
      if (
        this.type[index] == "building" &&
        building.count[this.buildingindex[index]] >= this.requirement[index]
      ) {
        game.score -= this.cost[index];
        building.income[this.buildingindex[index]] *= this.bonus[index];
        this.purchased[index] = true;

        display.updateupgrades();
        display.updatescore();
        display.updateshopsps();
      } else if (
        this.type[index] == "click" &&
        game.totalclicks >= this.requirement[index]
      ) {
        game.score -= this.cost[index];
        game.clickvalue *= this.bonus[index];
        this.purchased[index] = true;

        display.updateupgrades();
        display.updatescore();
        display.updateshopsps();
      }
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
        '" /></td><td id="nomprix"><p id="bname-' +
        z +
        '">' +
        building.name[z] +
        "</p><p><span> " +
        updateunite(building.cost[z]) +
        '</span> Alcool</p></td><td id="amount"><span>' +
        building.count[z] +
        "</span></td></tr></table>";
    }
    display.updateshopsps();
  },
  updateupgrades: function () {
    document.getElementById("upgradecontainer").innerHTML = "";
    for (i = 0; i < upgrade.name.length; i++) {
      if (!upgrade.purchased[i]) {
        if (
          upgrade.type[i] == "building" &&
          building.count[upgrade.buildingindex[i]] >= upgrade.requirement[i]
        ) {
          document.getElementById("upgradecontainer").innerHTML +=
            '<img src="images/' +
            upgrade.image[i] +
            '" title="' +
            upgrade.name[i] +
            " &#10; " +
            upgrade.description[i] +
            " &#10; (" +
            updateunite(upgrade.cost[i]) +
            ')" onclick="upgrade.purchase(' +
            i +
            ')">';
        } else if (
          upgrade.type[i] == "click" &&
          game.totalclicks >= upgrade.requirement[i]
        ) {
          document.getElementById("upgradecontainer").innerHTML +=
            '<img src="images/' +
            upgrade.image[i] +
            '" title="' +
            upgrade.name[i] +
            " &#10; " +
            upgrade.description[i] +
            " &#10; (" +
            updateunite(upgrade.cost[i]) +
            ')" onclick="upgrade.purchase(' +
            i +
            ')">';
        }
      }
    }
  },
  updateshopsps: function () {
    for (i = 0; i < building.name.length; i++) {
      document.getElementById("bname-" + i + "").innerHTML =
        building.name[i] + " (" + updatespsshop(building.income[i]) + ")";
    }
  },
};
function updatespsshop(price) {
  var unite = "g/s";
  if (price >= 1e9) {
    unite = "kt/s";
    price /= 1e9;
  } else if (price >= 1000000) {
    unite = "t/s";
    price /= 1000000;
  } else if (price >= 100000) {
    unite = "q/s";
    price /= 100000;
  } else if (price >= 1000) {
    unite = "kg/s";
    price /= 1000;
  }
  return `${price} ${unite}`;
}
function updatesps() {
  var unite = "g/s";
  var sps = game.getsps();
  if (sps >= 1e9) {
    unite = "kt/s";
    sps /= 1e9;
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
  if (nouveaupoids >= 1e9) {
    poids = "kt";
    nouveaupoids = prixtest / 1e9;
  } else if (nouveaupoids >= 1000000) {
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
  if (nouveauscore >= 1e9) {
    unite = "kt/L";
    nouveauscore /= 1e9;
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
    upgradepurchased: upgrade.purchased,
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
    if (typeof savedgame.upgradepurchased !== "undefined") {
      for (let i = 0; i < savedgame.upgradepurchased.length; i++) {
        upgrade.purchased[i] = savedgame.upgradepurchased[i];
        // Appliquer les effets des améliorations (upgrades) achetées
        if (upgrade.purchased[i]) {
          if (upgrade.type[i] === "click") {
            game.clickvalue *= upgrade.bonus[i];
          }
        }
      }
    }
  }

  //   if(typeof savedgame.buildingincome!== "undefined") game.buildingincome= savedgame.buildingincome;
  //   if(typeof savedgame.buildingcost!== "undefined") game.buildingcost= savedgame.buildingcost;
  // }
}
function fadeout(element, duration, finalopacity, callback) {
  let opacity = 1;

  let elementfadinginterval = window.setInterval(function () {
    opacity -= 50 / duration;

    if (opacity <= finalopacity) {
      clearInterval(elementfadinginterval);
      callback();
    }

    element.style.opacity = opacity;
  }, 50);
}

function numberoc(event) {
  let clicker = document.getElementById("clicker");

  let clickeroffset = clicker.getBoundingClientRect();
  let position = {
    x: event.pageX - clickeroffset.left,
    y: event.pageY - clickeroffset.top,
  };

  let element = document.createElement("div");
  element.textContent = "+" + game.clickvalue;
  element.classList.add("number", "unselectable");
  element.style.left = position.x + "px";
  element.style.top = position.y + "px";

  clicker.appendChild(element);

  let movementinterval = window.setInterval(function () {
    if (typeof element == "undefined" && element == null)
      clearInterval(movementinterval);
    position.y--;
    element.style.top = position.y + "px";
  }, 10);

  fadeout(element, 3000, 0.5, function () {
    element.remove();
  });
}

window.onload = function () {
  document.getElementById("hide-button").addEventListener("click", toggleGif);
  loadsave();
  display.updatescore();
  display.updateshop();
  display.updateupgrades();
  display.updateshopsps(); // Utilisez la méthode display.updateupgrades() ici
};
// var confirmation = confirm("On met de la zik?");
// if (confirmation) {
//     var audio = new Audio("audio/diablo.mp3");
//     audio.play();}
function resetgame() {
  var sound = new Audio("audio/dislike.mp3"); // Remplacez "chemin/vers/votre/son.mp3" par le chemin de votre son
  sound.volume = 0.15;
  sound.play();
  window.setTimeout(() => {
    if (
      confirm(
        "What? Fuck you, fuck you, fuck you, fuck you! Dislike man? Fuck you! Fuck you you fuck you!"
      )
    ) {
      var gamesave = {};
      localStorage.setItem("gamesave", JSON.stringify(gamesave));
      location.reload();
    }
  }, 10);
}
function tousse() {
  var sound = new Audio("audio/vasy.mp3");
  sound.play();
  sound.volume = 0.05;
}

document.getElementById("clicker").addEventListener(
  "click",
  function (event) {
    game.totalclicks++;
    game.addtoscore(game.clickvalue);

    numberoc(event);
  },
  false
);
setInterval(function () {
  game.score += game.getsps();
  game.totalscore += game.getsps();
  display.updatescore();
}, 1000); //1 seconde

setInterval(function () {
  display.updatescore();
  display.updateupgrades();
}, 1000);

setInterval(function () {
  savegame();
}, 10000); //10 secondes
