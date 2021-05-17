function showUser() {
    document.getElementsByClassName("user")[0].style.display = "block";
    document.getElementsByClassName("venue")[0].style.display = "none";
    document.getElementById("u").style.backgroundColor = "green";
    document.getElementById("v").style.backgroundColor = "";
}

function showVenue() {
    document.getElementsByClassName("venue")[0].style.display = "block";
    document.getElementsByClassName("user")[0].style.display = "none";
    document.getElementById("v").style.backgroundColor = "green";
    document.getElementById("u").style.backgroundColor = "";
}

