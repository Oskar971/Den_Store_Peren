function byttSide(nesteSideId) {
  // Skjul begge sidene først
  document.getElementById("side1").style.display = "none";
  document.getElementById("side2").style.display = "none";

  // Vis siden brukeren valgte
  document.getElementById(nesteSideId).style.display = "block";
}
