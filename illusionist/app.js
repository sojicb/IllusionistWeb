const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => { //toggle nav
        nav.classList.toggle('nav-active');

        //toggle animation
        navLinks.forEach((link, index) =>{
            if(link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //burger animation
        burger.classList.toggle('toggle');
    });
};

const getCardInformation = (image, name) =>{
   document.cookie = 'imagePath=' + image;
   document.cookie = 'cardName='  + name;
};

const deleteCookie = () => {
    for(var i = 0; i <= 3; i++) {
        document.cookie = "imagePath=; expires=Thu, 01 Jan 1970 00:00:01 GTM;";
        document.cookie = "cardName=; expires=Thu, 01 Jan 1970 00:00:01 GTM;";
    }
}

const showMore = () => {
    const btn = document.querySelector('#block-button');
    const more = document.querySelector('#more');
    
        if(more.style.display == 'none'){
            btn.innerHTML = 'Show Less Decks';
            more.style.animation = 'moveDown 0.5s ease-in-out';
            more.style.display = 'flex';
        }else if(more.style.display == 'flex'){
            more.style.animation = 'moveUp 0.5s ease-in-out';
            setTimeout(() => {more.style.display = 'none';}, 500);
            btn.innerHTML = 'Show More Decks';  
        }
};

const sendNotification = () =>{
    const submitBtn = document.querySelector('#sumbit-button');
    const firstName = document.getElementById('fname');
    const lastName = document.getElementById('lname');
    const country = document.getElementById('country');

    submitBtn.addEventListener('click', () => {
        alert('Thank you for contacting us \n' + firstName.value + ' ' + lastName.value + ' from ' + country.value);
    });
};

navSlide();
sendNotification();
