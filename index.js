
var audio = document.getElementById("diablo");
audio.volume = 0.02;

// function DIABLO(){
//   var mp3 = '<source src="audio/diablo.mp3" type="audio/mp3">';
//    document.getElementById("sound").innerHTML =
//    '<audio autoplay="autoplay">' + mp3 + "</audio>";
// }
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

var score = 0;
var mult = 1.15;
var prixg = 15;
var prixp = 300;
var prixc = 1500;
var prixcr = 10000;
var prixjumeau = 100000;
var scorejumeau = 0;
var gobelet = 0;
var pietra = 0;
var champ = 0;
var champr = 0;
var jumeau = 0;
var vscjumeau = 0;

/**
       * var objet = prixobjet; 
       * function buyobjet() {
        if (score >= prixobjet) {
          score = score - prixobjet;
          objet = objet + 1;
          prixobjet = Math.round(prixobjet * 1.15);

          updatescore(score);
          document.getElementById("objet").innerHTML = objet;
          document.getElementById("prixobjet").innerHTML = prixobjet;
        }
      }
        setInterval(function () {
        score = score + objet;
        document.getElementById("score").innerHTML = score;
      }, 1000); //1000ms = 1s
      */

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
    nouveauscore = nouveauscore / 1000000;
  } else if (nouveauscore >= 100000) {
    unite = "q/L";
    nouveauscore = nouveauscore / 100000;
  } else if (nouveauscore >= 1000) {
    unite = "kg/L";
    nouveauscore = nouveauscore / 1000;
  }
  // if(forceunite !== undefined) {
  //   unite = forceunite;

  // }
  document.getElementById("score").innerHTML = `${nouveauscore} ${unite}`;
  // console.log(`${nouveauscore} ${unite}`);
  updatesps();
  return `${nouveauscore} ${unite}`;
}
function updatesps() {
  var unite = "g/s";
  var sps =
    gobelet + pietra * 10 + champ * 20 + champr * 100 + scorejumeau * jumeau;
  if (sps >= 1000000) {
    unite = "t/s";
    sps = sps / 1000000;
  } else if (sps >= 100000) {
    unite = "q/s";
    sps = sps / 100000;
  } else if (sps >= 1000) {
    unite = "kg/s";
    sps = sps / 1000;
  }
  document.getElementById("sps").innerHTML = `${sps} ${unite}`;
}
function buygobelet() {
  if (score >= prixg) {
    score = score - prixg;
    gobelet = gobelet + 1;
    prixg = Math.round(prixg * mult);

    updatescore(score);
    document.getElementById("gobelet").innerHTML = gobelet;
    document.getElementById("prixg").innerHTML = updateunite(prixg);
    // document.getElementById("scorejumeau").innerHTML = scorejumeau;
  }
}
function buypietra() {
  if (score >= prixp) {
    score = score - prixp;
    pietra = pietra + 1;
    prixp = Math.round(prixp * mult);

    updatescore(score);
    document.getElementById("pietra").innerHTML = pietra;
    document.getElementById("prixp").innerHTML = updateunite(prixp);
    // document.getElementById("scorejumeau").innerHTML = scorejumeau;
  }
}
function buychamp() {
  if (score >= prixc) {
    score = score - prixc;
    champ = champ + 1;
    prixc = Math.round(prixc * mult);

    updatescore(score);
    document.getElementById("champ").innerHTML = champ;
    document.getElementById("prixc").innerHTML = updateunite(prixc);
    // document.getElementById("scorejumeau").innerHTML = scorejumeau;
  }
}
function buychampr() {
  if (score >= prixcr) {
    score = score - prixcr;
    champr = champr + 1;
    prixcr = Math.round(prixcr * mult);

    updatescore(score);
    document.getElementById("champr").innerHTML = champr;
    document.getElementById("prixcr").innerHTML = updateunite(prixcr);
    // document.getElementById("scorejumeau").innerHTML = scorejumeau;
  }
}
function buyjumeau() {
  if (score >= prixjumeau) {
    score = score - prixjumeau;
    jumeau = jumeau + 1;
    // scorejumeau = scorejumeau + 1;
    prixjumeau = Math.round(prixjumeau * 2);

    updatescore(score);
    document.getElementById("jumeau").innerHTML = jumeau;
    document.getElementById("prixjumeau").innerHTML = updateunite(prixjumeau);
    // document.getElementById("scorejumeau").innerHTML = scorejumeau;
  }
}
function addtoscore(amount) {
  score = score + amount;
  updatescore(score);
}
function updatejumeau() {
  scorejumeau = gobelet + pietra * 10 + champ * 20 + champr * 100;
  document.getElementById("scorejumeau").innerHTML = scorejumeau;
}
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
function loadgame() {
  var savedgame = JSON.parse(localStorage.getItem("gamesave"));
  if (typeof savedgame.score !== "undefined") score = savedgame.score;
  if (typeof savedgame.prixc !== "undefined") prixc = savedgame.prixc;
  if (typeof savedgame.prixcr !== "undefined") prixcr = savedgame.prixcr;
  if (typeof savedgame.prixg !== "undefined") prixg = savedgame.prixg;
  if (typeof savedgame.prixjumeau !== "undefined")
    prixjumeau = savedgame.prixjumeau;
  if (typeof savedgame.prixp !== "undefined") prixp = savedgame.prixp;
  if (typeof savedgame.gobelet !== "undefined") gobelet = savedgame.gobelet;
  if (typeof savedgame.champ !== "undefined") champ = savedgame.champ;
  if (typeof savedgame.champr !== "undefined") champr = savedgame.champr;
  if (typeof savedgame.pietra !== "undefined") pietra = savedgame.pietra;
  if (typeof savedgame.jumeau !== "undefined") jumeau = savedgame.jumeau;
  if (typeof savedgame.scorejumeau !== "undefined")
    scorejumeau = savedgame.scorejumeau;
}
function savegame() {
  var gamesave = {
    score: score,
    prixc: prixc,
    prixcr: prixcr,
    prixg: prixg,
    prixjumeau: prixjumeau,
    prixp: prixp,
    gobelet: gobelet,
    champ: champ,
    champr: champr,
    pietra: pietra,
    jumeau: jumeau,
    scorejumeau: scorejumeau,
    // vscjumeau: vscjumeau
  };
  localStorage.setItem("gamesave", JSON.stringify(gamesave));
}
window.onload = function () {
  loadgame();
  document.getElementById("gobelet").innerHTML = gobelet;
  document.getElementById("prixg").innerHTML = updateunite(prixg);
  document.getElementById("prixp").innerHTML = updateunite(prixp);
  document.getElementById("pietra").innerHTML = pietra;
  document.getElementById("champ").innerHTML = champ;
  document.getElementById("prixc").innerHTML = updateunite(prixc);
  document.getElementById("champr").innerHTML = champr;
  document.getElementById("prixcr").innerHTML = updateunite(prixcr);
  document.getElementById("jumeau").innerHTML = jumeau;
  document.getElementById("prixjumeau").innerHTML = updateunite(prixjumeau);
  document.getElementById("scorejumeau").innerHTML = scorejumeau;
  // document.getElementById("vscjumeau").innerHTML = vscjumeau;
  updatescore(score);
};

//   setInterval(function() {
//     scorejumeau = gobelet + pietra * 10 + champ * 20 + champr * 50;1000)}

setInterval(function update() {
  updatejumeau();
  score = score + gobelet;
  score = score + pietra * 10;
  score = score + champ * 20;
  score = score + champr * 100;
  score = score + scorejumeau * jumeau;
  // vscjumeau = scorejumeau * jumeau //vsc= valeur score

  updatescore(score);
}, 1000); //1000ms = 1s

setInterval(function () {
  savegame();
}, 30000); //30 secondes
