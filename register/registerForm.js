const registerForm = function(){ 

    const menu = document.getElementById("menu");
          menu.classList.add('invisible');

    let content = document.querySelector('#content');
        content.innerText = ' ';

    let registerTxt = document.createElement('h1');
        registerTxt.innerText = 'Register';
        registerTxt.classList.add('width');
        registerTxt.classList.add('font');
        registerTxt.classList.add('textCenter');
            
    let form = document.createElement('form');
        form.classList.add('flex');
        form.classList.add('centerHorizontal');
        form.classList.add('centerVertical');
        form.classList.add('wrap');
        form.classList.add('width50');
        form.setAttribute('id','registerForm');
        form.classList.add('font');

        let userNameLabel = document.createElement('label');
            userNameLabel.setAttribute('for','username');
            userNameLabel.innerText = 'Enter your user name here';
        
        let userNameInput = document.createElement('input');
            userNameInput.classList.add('width');
            userNameInput.classList.add('margin');
            userNameInput.classList.add('border1pxDarker');
            userNameInput.classList.add('regForm');
            userNameInput.setAttribute('id','username');
            userNameInput.setAttribute('name','userNameInput');
            userNameInput.setAttribute('type','text');
            userNameInput.setAttribute('autocomplete','off');
            userNameInput.setAttribute('required','');
        
        let emailLabel = document.createElement('label');
            emailLabel.setAttribute('for','email');
            emailLabel.innerText = 'Enter your email here';
        
        let emailInput = document.createElement('input');
            emailInput.classList.add('width');
            emailInput.classList.add('margin');
            emailInput.classList.add('border1pxDarker');
            emailInput.classList.add('regForm');
            emailInput.setAttribute('id','email');
            emailInput.setAttribute('name','emailInput');
            emailInput.setAttribute('type','email');
            emailInput.setAttribute('autocomplete','off');
            emailInput.setAttribute('required','');

        let passwordLabel = document.createElement('label');
            passwordLabel.setAttribute('for','email');
            passwordLabel.innerText = 'Enter your password here';
        
        let passwordInput = document.createElement('input');
            passwordInput.classList.add('width');
            passwordInput.classList.add('margin');
            passwordInput.classList.add('border1pxDarker');
            passwordInput.classList.add('regForm');
            passwordInput.setAttribute('id','password');
            passwordInput.setAttribute('name','passwordInput');
            passwordInput.setAttribute('type','password');
            passwordInput.setAttribute('autocomplete','off');
            passwordInput.setAttribute('required','');

        let password2Label = document.createElement('label');
            password2Label.setAttribute('for','email');
            password2Label.innerText = 'Repeat your password here';

        let password2Input = document.createElement('input');
            password2Input.classList.add('width');
            password2Input.classList.add('margin');
            password2Input.classList.add('border1pxDarker');
            password2Input.classList.add('regForm');
            password2Input.setAttribute('id','password2');
            password2Input.setAttribute('name','password2Input');
            password2Input.setAttribute('type','password');
            password2Input.setAttribute('autocomplete','off');
            password2Input.setAttribute('required','');

        let registerButton = document.createElement('input');
            registerButton.classList.add('margin');
            registerButton.classList.add('darkerBlue');
            registerButton.classList.add('width8');
            registerButton.classList.add('border1pxDarker');
            registerButton.classList.add('regForm');
            registerButton.classList.add('whiteColor');
            registerButton.setAttribute('id','registerButton');
            registerButton.setAttribute('type','submit');
            registerButton.setAttribute('value','Create account');
            registerButton.setAttribute('onclick','register()');

content.append(registerTxt);
content.append(form);
    form.append(userNameLabel);
    form.append(userNameInput);
    form.append(emailLabel);
    form.append(emailInput);
    form.append(passwordLabel);
    form.append(passwordInput);
    form.append(password2Label);
    form.append(password2Input);
    form.append(registerButton);
}