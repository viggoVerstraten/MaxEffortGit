

//Set pages Main
let pakkettenPage = document.getElementById('pakkettenpage');
let homePage = document.getElementById('homepage');
let aboutPage = document.getElementById('aboutpage');
let galleryPage = document.getElementById('galerij');
let contactPage= document.getElementById('contact');

//set From
let messageForm = document.getElementById('message');

//Set images
let image = document.getElementById('work');
let imageBottom = document.getElementById('explain');

//set buttons
const pakkettenButton= document.getElementById('pakkettenButton');
const aboutButton = document.getElementById('aboutButton');
const homebutton = document.getElementById('homeButton');
const galarijButton = document.getElementById('gallery');
const contactButton= document.getElementById('contactButton');
const whatsappButton = document.getElementById('whatsapp');
const instagramButton = document.getElementById('instagram');
const facebookButton = document.getElementById('facebook');
const package1Button = document.getElementById('pakket-1-button');
const package2Button = document.getElementById('pakket-2-button');
const package3Button = document.getElementById('pakket-3-button');

//Set Button Actions
pakkettenButton.addEventListener('click', scrolldownPakketten);
homebutton.addEventListener('click', scrolldownHome);
aboutButton.addEventListener('click', scrolldownAbout);
galarijButton.addEventListener('click', scrolldownGalerij);
contactButton.addEventListener('click', scrolldownContact);
whatsappButton.addEventListener('click', function () {
   window.open("https://api.whatsapp.com/send?phone=0031640168974&text=Hey%20Max!");
});
instagramButton.addEventListener('click', function () {
   window.open('https://www.instagram.com/maxkeur_pt/')
});
facebookButton.addEventListener('click', function () {
   window.open('https://www.facebook.com/MAXEFFORT.NL/')
});

$(window).scroll(function() {
    $('.begin').css({
        'services': -($(this).scrollTop() / 2) + "px"
    });
});

package1Button.addEventListener('click', function () {
   messageForm.value = 'Ik wil graag gebruik maken van de eerste optie: pakket 1.';
    window.scrollTo({
        top: contactPage.offsetTop,
        behavior: "smooth"
    });
});

package2Button.addEventListener('click', function () {
    messageForm.value = 'Ik wil graag gebruik maken van de tweede optie: pakket 2.';
    window.scrollTo({
        top: contactPage.offsetTop,
        behavior: "smooth"
    });
});

package3Button.addEventListener('click', function () {
    messageForm.value = 'Ik wil graag gebruik maken van de derde optie: pakket 3.';
    window.scrollTo({
        top: contactPage.offsetTop,
        behavior: "smooth"
    });
});

function scrolldownPakketten(){
    window.scrollTo({
        top: pakkettenPage.offsetTop,
        behavior: "smooth"
    });
}

function scrolldownHome(){
    window.scrollTo({
        top: homePage.offsetTop,
        behavior: "smooth"
    });
}

function scrolldownAbout(){
    window.scrollTo({
        top: aboutPage.offsetTop,
        behavior: "smooth"
    });
}

function scrolldownGalerij(){
    window.scrollTo({
        top:galleryPage.offsetTop,
        behavior: "smooth"
    });
}

function scrolldownContact(){
    window.scroll({
        top: contactPage.offsetTop,
        behavior: "smooth"
    });
}



//header Onscroll shrink
window.onscroll = function() {scrollFunction()};

function scrollFunction() {

}

//init
window.onscroll = function () {

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("listView").style.height = '5vh'
    } else {
        document.getElementById("listView").style.height = "10vh";
    }

    if(document.documentElement.scrollTop > 0.5 * (aboutPage.offsetTop)){
        image.classList.add('active');

    }

    if (document.documentElement.scrollTop > aboutPage.offsetTop){
    }
};


