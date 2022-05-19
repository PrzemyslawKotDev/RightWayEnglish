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
            menuButton.setAttribute('onclick','toggleMenu()');
        
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

            let menu = document.createElement('div');
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
navBar.append(menu);
    menu.append(logIn);
    menu.append(profile);
    menu.append(register);

}

function toggleMenu() {
    const menu = document.getElementById("menu");
          menu.classList.toggle("invisible");
};