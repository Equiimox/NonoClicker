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
