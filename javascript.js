function byttSide(nesteSideId) {
  // Skjuler sidene først
  //   document.getElementById("side1").style.display = "none";
  //   document.getElementById("side2").style.display = "none";
  //   document.getElementById("side3").style.display = "none";
  //   document.getElementById("side4").style.display = "none";
  //   document.getElementById("side5").style.display = "none";
  //   document.getElementById("side6").style.display = "none";
  //   document.getElementById("side7").style.display = "none";
  //   document.getElementById("side8").style.display = "none";
  //   document.getElementById("side9").style.display = "none";
  //   document.getElementById("side10").style.display = "none";
  //   document.getElementById("side11").style.display = "none";

  // Stians måte
  for (i = 1; i <= 29; i++) {
    document.getElementById("side" + i).style.display = "none";
  }

  // Viser vilken side som er valgt
  document.getElementById(nesteSideId).style.display = "block";
}
