function navigation(page) {
    document.getElementById("home").style.display = "none";
    document.getElementById("pflanzen").style.display = "none";
    document.getElementById("tiere").style.display = "none";
    document.getElementById("landschaften").style.display = "none";
    document.getElementById(page).style.display = "flex";
}