function dropDown() {
    var el = document.getElementById('topnav');
    if (el.className === "nav-container") {
        el.className += " responsive";
    } else {
        el.className = "nav-container";
    }
}