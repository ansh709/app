class Slider {
    constructor(img, imglink) {
        this.img = img;
        this.imglink = imglink;
    }
}

var slide01 = new Slider("images/slide01.jpg", "");
var slide02 = new Slider("images/slide01.jpg", "");
var slide03 = new Slider("images/slide01.jpg", "");

var slideData = () => {
    var arr = [slide01, slide02, slide03];

    document.getElementById('slider').innerHTML += `
   <div class="container-fluid">
       <div class="row">
           <div class="col-md-12">
               <div class="mySliderItems">
                   <ul></ul>
               </div>
           </div>
       </div>
   </div>
`;
    for (var i in arr) {
        document.querySelector('.mySliderItems>ul').innerHTML += `
       <li>
           <a href="#">
              <div class="slidItem">
                 <img src="${arr[i].img}">
              </div>
           </a>
       </li>
    `;
    }
}
document.addEventListener("DOMContentLoaded", slideData);

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker
            .register("serviceWorker.js")
            .then(res => console.log("service worker registered"))
            .catch(err => console.log("service worker not registered", err));
    });
}