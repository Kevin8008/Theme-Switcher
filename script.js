let theme = document.getElementById("theme")
let body = document.getElementById("body")

function apagar() {
    if (theme.className == "light" && body.className == "light") {
        theme.className = "dark";
        body.className = "dark";
    } else {
        theme.className = "light"
        body.className = "light"
    }
}
