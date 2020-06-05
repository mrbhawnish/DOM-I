const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

//Set-up for nav
let nav1 = document.querySelector("nav > a:nth-child(1)");
nav1.textContent = siteContent.nav["nav-item-1"];

let nav2 = document.querySelector("nav > a:nth-child(2)");
nav2.textContent = siteContent.nav["nav-item-2"];

let nav3 = document.querySelector("nav > a:nth-child(3)");
nav3.textContent = siteContent.nav["nav-item-3"];

let nav4 = document.querySelector("nav > a:nth-child(4)");
nav4.textContent = siteContent.nav["nav-item-4"];

let nav5 = document.querySelector("nav > a:nth-child(5)");
nav5.textContent = siteContent.nav["nav-item-5"];

let nav6 = document.querySelector("nav > a:nth-child(6)");
nav6.textContent = siteContent.nav["nav-item-6"];

//set-up for cta h1
let h1Cta = document.querySelector(".cta .cta-text h1");
h1Cta.textContent = siteContent.cta.h1;

h1Cta.setAttribute('style', 'width: 40%;');

//set-up for cta button
let ctaBtn = document.querySelector(".cta .cta-text button");
ctaBtn.textContent = siteContent.cta.button;

//set up for TOP CONTENT

let featureH1 = document.querySelector(".top-content .text-content:nth-child(1) > h4");

featureH1.textContent = siteContent["main-content"]["features-h4"];

let firstPara = document.querySelector(".top-content .text-content:nth-child(1) > p");

firstPara.textContent = siteContent["main-content"]["features-content"];


 let aboutH1 = document.querySelector(".top-content .text-content:nth-child(2) > h4");

 let secondPara = document.querySelector(".top-content .text-content:nth-child(2) > p");

secondPara.textContent = siteContent["main-content"]["about-content"];

aboutH1.textContent = siteContent["main-content"]["about-h4"];

//middle-content image

let mainImg = document.getElementById("middle-img");
mainImg.src = siteContent["main-content"]["middle-img-src"];


//Set up for bottom content

let bottomH4 = document.querySelector(".bottom-content .text-content:nth-child(1) > h4");
bottomH4.textContent = siteContent["main-content"]["services-h4"];

let bottomChild = document.querySelector(".bottom-content .text-content:nth-child(1) > p");
bottomChild.textContent = siteContent["main-content"]["services-content"];


let middleH4 = document.querySelector(".bottom-content .text-content:nth-child(2) > h4");
middleH4.textContent = siteContent["main-content"]["product-h4"];

let middleP = document.querySelector(".bottom-content .text-content:nth-child(2) > p");
middleP.textContent = siteContent["main-content"]["product-content"];

let lastH = document.querySelector(".bottom-content .text-content:nth-child(3) > h4");
lastH.textContent = siteContent["main-content"]["vision-h4"];

let lastPar = document.querySelector(".bottom-content .text-content:nth-child(3) > p");
lastPar.textContent = siteContent["main-content"]["vision-content"];


//bottom content below
let firstH = document.querySelector(".container .contact h4");
firstH.textContent = siteContent["contact"]["contact-h4"];

let contactM1 = document.querySelector(".container .contact > p:nth-child(2)");
contactM1.textContent = siteContent["contact"]["address"];

let contactM2 = document.querySelector(".container .contact > p:nth-child(3)");
contactM2.textContent = siteContent["contact"]["phone"];

let contactLast = document.querySelector(".container .contact > p:nth-child(4)");
contactLast.textContent = siteContent["contact"]["email"];


  //footer below

  let foo = document.querySelector("footer p");
  foo.textContent = siteContent["footer"]["copyright"]

  