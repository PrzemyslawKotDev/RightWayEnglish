const navbar = function(){
    let navBar = document.querySelector('#navBar');

    let navBarStandart = document.createElement('div');
        navBarStandart.classList.add('width');
        navBarStandart.classList.add('whiteBackground');
        navBarStandart.classList.add('borderBox');
        navBarStandart.classList.add('flex');
        navBarStandart.classList.add('spaceBetween');
        navBarStandart.classList.add('centerHorizontal');
        navBarStandart.classList.add('positionAbsolute');
        navBarStandart.classList.add('margin05Bottom');
        navBarStandart.setAttribute('id','navBarStandart');
        
        let logo = document.createElement('img');
            logo.classList.add('cursorPointer');
            logo.classList.add('bigLogo');
            logo.setAttribute('id','logo');
            logo.setAttribute('onclick','categories(categoryData)');
            logo.setAttribute('src','https://i.ibb.co/PwmSG2q/rwe-logo.jpg');
       
        let searchBar = document.createElement('div');
            searchBar.classList.add('borderBox');
            searchBar.classList.add('flex');
            searchBar.classList.add('centerHorizontal');
            searchBar.classList.add('centerVertical');
            searchBar.setAttribute('id','searchBar');
        
            let searchInput = document.createElement('input');
                searchInput.classList.add('search');
                searchInput.classList.add('borderBox');
                searchInput.classList.add('width80');
                searchInput.setAttribute('id','searchInput');
                searchInput.setAttribute('type','text');
                searchInput.setAttribute('placeholder','Search for anything');
            
            let searchButton = document.createElement('input');
                searchButton.classList.add('search');
                searchButton.classList.add('borderBox');
                searchButton.setAttribute('id','searchButton');
                searchButton.setAttribute('type','image');
                searchButton.setAttribute('src','https://www.pikpng.com/pngl/b/62-624013_magnifying-glass-white-icon-clipart.png');
                searchButton.setAttribute('onclick','');

        let navbarMenu = document.createElement('div');
            navbarMenu.classList.add('flex');
            navbarMenu.classList.add('centerHorizontal');
            navbarMenu.classList.add('centerVertical');
            navbarMenu.classList.add('buttonsBorder');
            navbarMenu.classList.add('font');
            
            let logReg = document.createElement('div');
                logReg.classList.add('navbarContentButton');
                logReg.classList.add('flex');
                logReg.classList.add('centerHorizontal');
                logReg.classList.add('centerVertical');
                logReg.classList.add('wrap');
                logReg.setAttribute('id','logReg');
                logReg.setAttribute('onmouseover','showLogReg()');
                logReg.setAttribute('onmouseout','hideLogReg()');
            
                let loginIcon = document.createElement('img');
                    loginIcon.classList.add('iconSize');
                    loginIcon.setAttribute('src','https://icons.iconarchive.com/icons/icons8/windows-8/64/User-Interface-Login-icon.png');
                
                let loginTxt = document.createElement('p');
                    loginTxt.classList.add('navbarIconWidth');
                    loginTxt.classList.add('marginZero');
                    loginTxt.classList.add('borderBox');
                    loginTxt.classList.add('flex');
                    loginTxt.classList.add('centerHorizontal');
                    loginTxt.classList.add('centerVertical');
                    loginTxt.innerText = 'Log In';

                let logRegPopup = document.createElement('div');
                    logRegPopup.classList.add('flex');
                    logRegPopup.classList.add('centerHorizontal');
                    logRegPopup.classList.add('centerVertical');
                    logRegPopup.classList.add('wrap');
                    logRegPopup.classList.add('whiteBackground');
                    logRegPopup.classList.add('border3pxLighter');
                    logRegPopup.classList.add('borderRadius10');
                    logRegPopup.setAttribute('id','logRegPopup');
                    logRegPopup.setAttribute('onmouseover','showLogReg()');
                    logRegPopup.setAttribute('onmouseout','hideLogReg()');

                    let loginForm = document.createElement('form');
                        loginForm.classList.add('font');
                        loginForm.classList.add('wrap');
                        loginForm.classList.add('flex');
                        loginForm.classList.add('centerHorizontal');
                        loginForm.classList.add('centerVertical');
                        loginForm.setAttribute('id','loginForm');

                    let userNameLabel = document.createElement('label');
                        userNameLabel.setAttribute('for','username');
                        userNameLabel.innerText = 'Enter your user name here';
                    
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
                        passwordLabel.innerText = 'Enter your password here';
                    
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

            let userAccount = document.createElement('div');
                userAccount.classList.add('navbarContentButton');
                userAccount.classList.add('marginRight1');
                userAccount.classList.add('cursorPointer');
                userAccount.classList.add('flex');
                userAccount.classList.add('centerHorizontal');
                userAccount.classList.add('centerVertical');
                userAccount.classList.add('wrap');
                userAccount.classList.add('link');
                userAccount.setAttribute('id','userAccount');

                let profileIcon = document.createElement('img');
                    profileIcon.classList.add('iconSize');
                    profileIcon.setAttribute('src','https://freeiconshop.com/wp-content/uploads/edd/person-outline.png');

                let profileTxt = document.createElement('div');
                    profileTxt.classList.add('navbarIconWidth');
                    profileTxt.classList.add('marginZero');
                    profileTxt.classList.add('borderBox');
                    profileTxt.classList.add('flex');
                    profileTxt.classList.add('centerHorizontal');
                    profileTxt.classList.add('centerVertical');
                    profileTxt.innerText = 'Profile';

            // let basket = document.createElement('div');
            //     basket.classList.add('navbarContentButton');
            //     basket.classList.add('link');
            //     basket.classList.add('navButtonMargin');
            //     basket.classList.add('flex');
                // basket.classList.add('centerHorizontal');
                // basket.classList.add('cursorPointer');
                // basket.classList.add('centerVertical');
            //     basket.setAttribute('id','basket');

            //     let basketIcon = document.createElement('img');
            //         basketImg.classList.add('iconSize');
            //         basketImg.setAttribute('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3lq3F5wIgfte5dY2SwTmVqjuS422fIH8JCg&usqp=CAU');

            //     let basketTxt = document.createElement('div');
            //         basketTxt.classList.add('navbarIconWidth');
            //         basketTxt.classList.add('marginZero');
            //         basketTxt.classList.add('borderBox');
            //         basketTxt.classList.add('flex');
                    // basketTxt.classList.add('centerHorizontal');
                    // basketTxt.classList.add('centerVertical');
            //         basketTxt.innerText = 'Basket';

navBar.append(navBarStandart);
    navBarStandart.append(logo);
    navBarStandart.append(searchBar);
        searchBar.append(searchInput);
        searchBar.append(searchButton);
    navBarStandart.append(navbarMenu);
        navbarMenu.append(logReg);
            logReg.append(loginIcon);
            logReg.append(loginTxt);
            logReg.append(logRegPopup);
                logRegPopup.append(loginForm);
                logRegPopup.append(userNameLabel);
                logRegPopup.append(userNameInput);
                logRegPopup.append(passwordLabel);
                logRegPopup.append(passwordInput);
                logRegPopup.append(logInButton);
                logRegPopup.append(noAccTxt);
                logRegPopup.append(registerLink);
        navbarMenu.append(userAccount);
            userAccount.append(profileIcon);
            userAccount.append(profileTxt);
        // menuContainer.append(basket);
        //     basket.append(basketIcon);
        //     basket.append(basketTxt);
};

function showLogReg() {
    const logRegPopup = document.getElementById("logRegPopup");
          logRegPopup.style.visibility = "visible";
};

function hideLogReg() {
    const logRegPopup = document.getElementById("logRegPopup");
          logRegPopup.style.visibility = "hidden";
};