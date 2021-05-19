class Nav {
    constructor(tabname, tablink, tabicon) {
        this.tabname = tabname;
        this.tablink = tablink;
        this.tabicon = tabicon;
    }
}

var tab01 = new Nav("Profile", "index.html", '<i class="fas fa-user-alt"></i>');
var tab02 = new Nav("Task", "index.html", '<i class="fab fa-magento"></i>');
var tab03 = new Nav("Home", "index.html", '<i class="fas fa-home"></i>');
var tab04 = new Nav("Setting", "index.html", '<i class="fas fa-cog"></i>');
var tab05 = new Nav("About", "index.html", '<i class="far fa-address-card"></i>');



var AllnavData = () => {
    arr = [tab01, tab02, tab03, tab04, tab05];
    document.querySelector("nav").innerHTML += `<div class="container-fluid"><div class="row"><div class="col-md-12"><div class="navItem"><ul class="navbar-nav nav"></ul></div></div></div></div>`;

    for (var i in arr) {
        document.querySelector('nav>.container-fluid>.row>.col-md-12>.navItem>ul').innerHTML += `
         <li><a href="#">${arr[i].tabicon}</a></li>`;
    }
}


document.addEventListener("DOMContentLoaded", AllnavData);

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker
            .register("serviceWorker.js")
            .then(res => console.log("service worker registered"))
            .catch(err => console.log("service worker not registered", err));
    });
}