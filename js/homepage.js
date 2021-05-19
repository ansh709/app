class Process {
    constructor(img) {
        this.img = img;
    }
}

var process = new Process("images/process.png");

processData = () => {

    document.getElementById('process').innerHTML += `
<div class="container-fluid">
   <div class="row">
       <div class="col-md-12">
           <div class="processItem">
              <img src="${process.img}">
           </div>
       </div>
   </div>
</div>
`;
}
document.addEventListener("DOMContentLoaded", processData);

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker
            .register("serviceWorker.js")
            .then(res => console.log("service worker registered"))
            .catch(err => console.log("service worker not registered", err));
    });
}