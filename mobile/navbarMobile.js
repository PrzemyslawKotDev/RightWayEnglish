const navbarMobile = function(){
    
    let navBar = document.querySelector('#navBar');

    let navBarMobile = document.createElement('div');
        navBarMobile.classList.add('width');
        navBarMobile.classList.add('whiteBackground');
        navBarMobile.classList.add('borderBox');
        navBarMobile.classList.add('flex');
        navBarMobile.classList.add('wrap');
        navBarMobile.classList.add('positionAbsolute');
        navBarMobile.classList.add('centerHorizontal');
        navBarMobile.classList.add('spaceAround');
        navBarMobile.classList.add('padding02');
        navBarMobile.classList.add('borderBottom');
        
        navBarMobile.setAttribute('id','navBarMobile');

        let logo = document.createElement('img');
            logo.classList.add('cursorPointer');
            logo.setAttribute('id','logo');
            logo.setAttribute('onclick','categories(categoryData)');
            logo.setAttribute('src','https://i.ibb.co/PwmSG2q/rwe-logo.jpg');

        let menuButton = document.createElement('div');
            menuButton.classList.add('menuButton');
            menuButton.classList.add('darkerBlue');
            menuButton.classList.add('whiteColor');
            menuButton.classList.add('wrap');
            menuButton.setAttribute('onclick','showMenu()');
        
        let line0 = document.createElement('div');
            line0.classList.add('width');
            line0.classList.add('darkerBlue');
            line0.classList.add('line0');

        let line1 = document.createElement('div');
            line1.classList.add('darkerBlue');
            line1.classList.add('line');
            line1.classList.add('width');
            line1.classList.add('borderBottomWhite');

        let line2 = document.createElement('div');
            line2.classList.add('darkerBlue');
            line2.classList.add('line');
            line2.classList.add('width');
            line2.classList.add('borderBottomWhite');

        let line3 = document.createElement('div');
            line3.classList.add('darkerBlue');
            line3.classList.add('line');
            line3.classList.add('width');
            line3.classList.add('borderBottomWhite');

            let siteShadow = document.createElement('div');
                siteShadow.classList.add('flex');
                siteShadow.classList.add('centerHorizontal');
                siteShadow.classList.add('centerVertical');
                siteShadow.classList.add('positionAbsolute');
                siteShadow.classList.add('invisible');
                siteShadow.classList.add('darkerBlue');
                siteShadow.classList.add('opacity07');
                siteShadow.classList.add('invisible');
                siteShadow.classList.add('width');
                siteShadow.classList.add('zIndex40');
                siteShadow.classList.add('hidden');
                siteShadow.classList.add('transition05s');
                siteShadow.classList.add('noClick');
                siteShadow.setAttribute('id','siteShadow');
                siteShadow.setAttribute('onclick','hideMenu()');

            let menu = document.createElement('div');
                menu.classList.add('transition05s');
                menu.classList.add('hidden');
                menu.classList.add('flex');
                menu.classList.add('wrap');
                menu.classList.add('centerHorizontal');
                menu.classList.add('centerVertical');
                menu.classList.add('border1pxDarker');
                menu.classList.add('positionAbsolute');
                menu.classList.add('invisible');
                menu.classList.add('width60');
                menu.classList.add('whiteBackground');
                menu.classList.add('border5pxLighter');
                menu.classList.add('borderRadius10');
                menu.classList.add('padding05');
                menu.classList.add('zIndex50');
                menu.classList.add('font');
                menu.setAttribute('id','menu');
                
        let logIn = document.createElement('div');
            logIn.classList.add('flex');
            logIn.classList.add('borderBottom1pxLighter');
            logIn.classList.add('centerHorizontal');
            logIn.classList.add('centerVertical');
            logIn.classList.add('width');
            logIn.classList.add('height33');
            logIn.classList.add('textCenter');
            logIn.classList.add('cursorPointer');
            logIn.innerText = 'Log in';
            logIn.setAttribute('onclick','logInForm()');

        let profile = document.createElement('div');
            profile.classList.add('flex');
            profile.classList.add('borderBottom1pxLighter');
            profile.classList.add('centerHorizontal');
            profile.classList.add('centerVertical');
            profile.classList.add('width');
            profile.classList.add('height33');
            profile.classList.add('textCenter');
            profile.classList.add('cursorPointer');
            profile.innerText = 'Profile';

        let register = document.createElement('div');
            register.classList.add('flex');
            register.classList.add('centerHorizontal');
            register.classList.add('centerVertical');
            register.classList.add('width');
            register.classList.add('height33');
            register.classList.add('textCenter');
            register.classList.add('cursorPointer');
            register.innerText = 'Register';
            register.setAttribute('onclick','registerForm()');

navBar.append(navBarMobile);
    navBarMobile.append(logo);
    navBarMobile.append(menuButton);
        menuButton.append(line0);
        menuButton.append(line1);
        menuButton.append(line2);
        menuButton.append(line3);
navBar.append(siteShadow);
navBar.append(menu);
    menu.append(logIn);
    menu.append(profile);
    menu.append(register);

}

document.body.scrollHeight

function showMenu() {
    const menu = document.getElementById('menu');
    const siteShadow = document.getElementById('siteShadow');
          siteShadow.style.height = `${document.body.scrollHeight}px`;

    siteShadow.classList.remove('invisible');
    siteShadow.classList.toggle('noClick');
    siteShadow.classList.toggle('hidden');
    menu.classList.remove('invisible');
    menu.classList.toggle('hidden');
}

function hideMenu(){
    siteShadow.classList.toggle('hidden');
    siteShadow.classList.toggle('noClick');
    menu.classList.toggle('hidden');
    setTimeout(()=>{
    siteShadow.classList.add('invisible');
    menu.classList.add('invisible');
    }, 500)
}