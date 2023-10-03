let popUp = document.getElementById("cookiePopup");

// when user clicks the accept button
document.getElementById("acceptCookie").addEventListener("click", () => {
    // create date object
    let d = new Date();
    // increment the current time by 1 minute (cookie will expire after 1 minute)
    d.setMinutes(2 + d.getMinutes());
    // create cookie withname = myCookieName,
    // value = thisIsMyCookie and expiry time = 1 minute
    document.cookie = "myCookieName=thisIsMyCookie; expires = " + d + ";";
    // hide popup
    popUp.classList.add("hide");
    popUp.classList.remove("show");

});

//  check if cookie is already present
const checkCookie = () => {
    // read the cookie and split on "="
    let input = document.cookie.split("=");
    // check for cookie
    if (input[0] == "myCookieName") {
        // hide the popup
        popUp.classList.add("hide");
        popUp.classList.remove("show");
    }
    else {
        // hide the popup
        popUp.classList.add("show");
        popUp.classList.remove("hide");
    }
};

// check if cookie exists when page loads
window.onload = () => {
    setTimeout(() => {
        checkCookie();
    }, 2000);
};

