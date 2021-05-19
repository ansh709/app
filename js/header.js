class Header {
    constructor(logo, profileIcon) {
        this.logo = logo;
        this.profileIcon = profileIcon;
    }
}
var myHeaderItem = new Header("EEM", "images/userDefaulticon.png");
AllData = () => {

    document.querySelector('header').innerHTML += `
<div class="container">
<div class="row">
    <div class="col-md-6">
        <div class="logo">
            <h1>${myHeaderItem.logo}</h1>
        </div>
    </div>
    <div class="col-md-6">
        <div class="Userprofile text-right">
            <a href="#">
                <img src="${myHeaderItem.profileIcon}" alt="">
            </a>
        </div>
    </div>
</div>
</div>
`;
}

document.addEventListener("DOMContentLoaded", AllData);

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker
            .register("serviceWorker.js")
            .then(res => console.log("service worker registered"))
            .catch(err => console.log("service worker not registered", err));
    });
}