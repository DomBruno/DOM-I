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

let ctapic = document.getElementById("cta-img");
ctapic.setAttribute('src', siteContent["cta"]["img-src"])

let middleimg = document.getElementById("middle-img");
middleimg.setAttribute('src', siteContent["main-content"]["middle-img-src"])


// nav content and style
let navstyle = document.querySelectorAll("nav a");
navstyle.forEach( (element) => {
  element.style.color = "green";
})

let navlinks = document.querySelectorAll("nav a");
navlinks[0].textContent = siteContent["nav"]["nav-item-1"]
navlinks[1].textContent = siteContent["nav"]["nav-item-2"]
navlinks[2].textContent = siteContent["nav"]["nav-item-3"]
navlinks[3].textContent = siteContent["nav"]["nav-item-4"]
navlinks[4].textContent = siteContent["nav"]["nav-item-5"]
navlinks[5].textContent = siteContent["nav"]["nav-item-6"]

//cta content and styling
let ctatext = document.querySelector(".cta h1");
ctatext.textContent = siteContent["cta"]["h1"]

let ctabtn = document.querySelector(".cta button");
ctabtn.textContent = siteContent["cta"]["button"]

//main content and styling

// top content block
let toph4 = document.querySelectorAll(".top-content .text-content h4");
toph4[0].textContent = siteContent["main-content"]["features-h4"]
toph4[1].textContent = siteContent["main-content"]["about-h4"]

let toptext = document.querySelectorAll(".top-content .text-content p")
toptext[0].textContent = siteContent["main-content"]["features-content"]
toptext[1].textContent = siteContent["main-content"]["about-content"]


//footer content
let footercontent = document.querySelector("footer p");
footercontent.textContent = siteContent["footer"]["copyright"]