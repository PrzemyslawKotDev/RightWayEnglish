function logInForm(){
    
    const menu = document.getElementById("menu");
          menu.classList.add('invisible');

let content = document.querySelector('#content');
    content.innerText = ' ';

    let loginForm = document.createElement('form');
        loginForm.classList.add('font');
        loginForm.classList.add('wrap');
        loginForm.classList.add('flex');
        loginForm.classList.add('centerHorizontal');
        loginForm.classList.add('centerVertical');
        loginForm.setAttribute('id','loginForm');

        let userNameLabel = document.createElement('label');
            userNameLabel.setAttribute('for','username');
            userNameLabel.innerText = 'User name';
        
        let userNameInput = document.createElement('input');
            userNameInput.classList.add('width');
            userNameInput.classList.add('margin');
            userNameInput.classList.add('regForm');
            userNameInput.classList.add('border1pxLighter');
            userNameInput.setAttribute('id','username');
            userNameInput.setAttribute('name','usernameInput');
            userNameInput.setAttribute('type','text');
            userNameInput.setAttribute('autocomplete','off');
            userNameInput.setAttribute('required','');

        let passwordLabel = document.createElement('label');
            passwordLabel.setAttribute('for','email');
            passwordLabel.innerText = 'Password';
        
        let passwordInput = document.createElement('input');
            passwordInput.classList.add('width');
            passwordInput.classList.add('margin');
            passwordInput.classList.add('regForm');
            passwordInput.classList.add('border1pxLighter');
            passwordInput.setAttribute('id','password');
            passwordInput.setAttribute('name','passwordInput');
            passwordInput.setAttribute('type','password');
            passwordInput.setAttribute('autocomplete','off');
            passwordInput.setAttribute('required','');

        let logInButton = document.createElement('input');
            logInButton.classList.add('margin');
            logInButton.classList.add('regForm');
            logInButton.classList.add('border1pxDarker');
            logInButton.classList.add('fontWeight600');
            logInButton.classList.add('regButton');
            logInButton.classList.add('colorWhite');
            logInButton.classList.add('cursorPointer');
            logInButton.setAttribute('type','submit');
            logInButton.setAttribute('value','Log In');
            logInButton.setAttribute('onclick','logIn(event)');

        let noAccTxt = document.createElement('p');
            noAccTxt.classList.add('noTextDecor');
            noAccTxt.classList.add('blackColor');
            noAccTxt.classList.add('margin025');
            noAccTxt.classList.add('textCenter');
            noAccTxt.classList.add('paddingZero');
            noAccTxt.classList.add('width');
            noAccTxt.classList.add('paddingZero');
            noAccTxt.classList.add('paddingZero');
            noAccTxt.setAttribute('id','noAccTxt');
            noAccTxt.innerText = "You don't have account?";

        let registerLink = document.createElement('div');
            registerLink.classList.add('textCenter');
            registerLink.classList.add('paddingZero');
            registerLink.classList.add('paddingZero');
            registerLink.classList.add('cursorPointer');
            registerLink.classList.add('width');
            registerLink.classList.add('fontweight600');
            registerLink.setAttribute('id','registerLink');
            registerLink.setAttribute('onclick','registerForm()');
            registerLink.innerText = 'Register';

content.append(loginForm);
    loginForm.append(userNameLabel);
        loginForm.append(userNameInput);
        loginForm.append(passwordLabel);
        loginForm.append(passwordInput);
        loginForm.append(logInButton);
        loginForm.append(noAccTxt);
        loginForm.append(registerLink);

}