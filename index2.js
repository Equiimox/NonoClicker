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
  income: [1, 10, 20, 100, 5000000], //WIPWIPWIPWIIWPIWIPIWPIWIPW JUMEAU JE SU IS LA NUIT
  cost: [15, 300, 1500, 10000, 100000],

  purchase: function (index) {
    if (game.score >= this.cost[index]) {
      game.score -= this.cost[index];
      this.count[index]++; // ++ = Ca plus 1
      this.cost[index] = Math.cell(this.cost[index] * 1.1);
      display.updatescore();
      display.updateshop();
    }
  },
};
var display = {
  updatescore: function () {
    document.getElementById("score").innerHTML = game.score;
    document.getElementById("sps").innerHTML = game.getsps();
    // document.title = updatescore(game.score) + " - NONOCLICKER";
  },

  updateshop: function () {
   
    document.getElementById("shopcontainer").innerHTML = "";
    for (z = 0; z < building.name.length; z++) { 
        console.log("nique",building.name.length);
      document.getElementById("shopcontainer").innerHTML +=
        '<table class="shopbutton" onclick="building.purchase(' +
        z +
        ')"><tr><td id="image"><img src="images/' +
        building.image[z] +
        '" /></td><td id=' +
        building.name[z] +
        "><p>Gobelet (1g/s)</p><p><span>" +
        building.cost[z] +
        '</span> Alcool</p></td><td id="amount"><span>' +
        building.count[z] +
        "</span></td></tr></table>";
    }
  },
};

function savegame(){
  
}

window.onload = function () {
  display.updatescore();
  display.updateshop();
};
