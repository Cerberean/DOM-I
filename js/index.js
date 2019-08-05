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

let cta = document.getElementById("cta-img");
cta.setAttribute('src', siteContent["cta"]["img-src"])

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

const navBar = document.querySelector('nav');
const newAnchor1 = document.createElement('a');
const newAnchor2 = document.createElement('a');
newAnchor1.textContent = 'First';
newAnchor2.textContent = 'Second';
newAnchor1.style.color = 'blue';
newAnchor2.style.color = 'red';

const navA = document.querySelectorAll('a');
navA.forEach(function(item, index){
  item.innerText = siteContent['nav'][`nav-item-${index + 1}`];
  item.style.color = 'green';
});

navBar.prepend(newAnchor1);
navBar.appendChild(newAnchor2);

const dia = document.querySelector('h1');

const dia2 = siteContent["cta"]["h1"].split(' ');

dia2.splice(1,0, '\r\n');
dia2.splice(3,0, '\r\n');

dia.innerText = dia2.join('');

const GetStarted = document.querySelector('.cta-text button');
GetStarted.textContent = siteContent['cta']['button'];

const topContentH = document.querySelectorAll('.top-content .text-content h4');
topContentH[0].textContent = siteContent['main-content']['features-h4'];
topContentH[1].textContent = siteContent['main-content']['about-h4'];

const topContentP = document.querySelectorAll('.top-content .text-content p');
topContentP[0].textContent = siteContent['main-content']['features-content'];
topContentP[1].textContent = siteContent['main-content']['about-content'];

const bottomContentH = document.querySelectorAll('.bottom-content .text-content h4');
bottomContentH[0].textContent = siteContent ['main-content']['services-h4'];
bottomContentH[1].textContent = siteContent ['main-content']['product-h4'];
bottomContentH[2].textContent = siteContent ['main-content']['vision-h4'];

const bottomContentP = document.querySelectorAll ('.bottom-content .text-content p');
bottomContentP[0].textContent = siteContent ['main-content']['services-content'];
bottomContentP[1].textContent = siteContent ['main-content']['product-content'];
bottomContentP[2].textContent = siteContent ['main-content']['vision-content'];



const copyrightText = document.querySelector('footer');
copyrightText.textContent = siteContent['footer']['copyright']