const filterData = [
    {
        group: "człowiek",
        filter: false
    },
    {
        group: "jedzenie",
        filter: false
    },
    {
        group: "zdrowie",
        filter: false
    },
]
const categoryData = [
    {
        name: "Ćwiczenia leksykalne",
        img: "https://cdn4.iconfinder.com/data/icons/back-to-school-253/64/idea_lamp_creative_list_task-512.png",
    },
    {
        name: "Części mowy",
        img: "https://cdn0.iconfinder.com/data/icons/student-community/64/reading_book_student_study_read_learn_learning_explanation_education_library-512.png",
    },
    {
        name: "Ćwiczenia gramatyczne",
        img: "https://cdn4.iconfinder.com/data/icons/learning-31/64/learning_learn_education_school-512.png",
    },
    {
        name: "Znajomość funkcji językowych",
        img: "https://cdn3.iconfinder.com/data/icons/student-guidance/64/survey_feedback_opinion_review_satisfaction-512.png",
    },
    {
        name: "Znajomość środków językowych",
        img: "https://cdn3.iconfinder.com/data/icons/business-learn/64/discussion_meeting_mediation_counseling_group_chat_conversation_communications_talk_debate_chat-512.png",
    },
    {
        name: "Wypowiedź pisemna",
        img: "https://cdn4.iconfinder.com/data/icons/back-to-school-253/64/homework_book_pencil_task_assignment-512.png",
    },
    {
        name: "Rozumienie ze słuchu",
        img: "https://cdn3.iconfinder.com/data/icons/student-guidance/64/consultation_communication_meeting_advisor_discussion-512.png",
    },
    {
        name: "Rozumienie textów pisanych",
        img: "https://cdn4.iconfinder.com/data/icons/back-to-school-253/64/dictionary_book_search_find_words-512.png",
    },
    {
        name: "Materiały PDF",
        img: "https://cdn4.iconfinder.com/data/icons/planning-14/64/planner_notebook_agenda_planning_notes_plan_organizer_-512.png",
    },
];
const exercisesData = [
    {
        name: "dane osobowe",
        type: "zadanie typu ....",
        group: "człowiek",
        level: "A1",
    },
    {
        name: "wygląd",
        type: "zadanie typu ....",
        group: "człowiek",
        level: "A1",
    },
    {
        name: "części ciała",
        type: "zadanie typu ....",
        group: "człowiek",
        level: "A2",
    },
    {
        name: "posiłki",
        type: "zadanie typu ....",
        group: "jedzenie",
        level: "A1",
    },
    {
        name: "owoce",
        type: "zadanie typu ....",
        group: "jedzenie",
        level: "A1",
    },
    {
        name: "rodzaję mięs",
        type: "zadanie typu ....",
        group: "jedzenie",
        level: "A2",
    },
    {
        name: "narządy",
        type: "zadanie typu ....",
        group: "zdrowie",
        level: "A1",
    },
    {
        name: "różne wyrażenia",
        type: "zadanie typu ....",
        group: "zdrowie",
        level: "A2",
    },
    {
        name: "quiz",
        type: "zadanie typu ....",
        group: "zdrowie",
        level: "A2",
    },
];

function navbar(){
    let navBar = document.querySelector('#navBar');
        navBar.classList.add('width');
        navBar.classList.add('boxFont');
        navBar.classList.add('flex');
        navBar.setAttribute('id','navbar');
        

        let logo = document.createElement('img');
            logo.setAttribute('id','logo');
            logo.setAttribute('onclick','categoriesOfExercises(categoryData)');
            logo.setAttribute('src','https://i.ibb.co/PwmSG2q/rwe-logo.jpg');
       
        let searchBar = document.createElement('div');
            searchBar.classList.add('boxFont');
            searchBar.classList.add('flex');
            searchBar.setAttribute('id','searchBar');
        
            let searchInput = document.createElement('input');
                searchInput.classList.add('search');
                searchInput.classList.add('boxFont');
                searchInput.classList.add('width');
                searchInput.setAttribute('id','searchInput');
                searchInput.setAttribute('type','text');
                searchInput.setAttribute('placeholder','Search for anything');
            
            let searchButton = document.createElement('input');
                searchButton.classList.add('search');
                searchButton.classList.add('boxFont');
                searchButton.setAttribute('id','searchButton');
                searchButton.setAttribute('type','image');
                searchButton.setAttribute('src','https://www.pikpng.com/pngl/b/62-624013_magnifying-glass-white-icon-clipart.png');
                searchButton.setAttribute('onclick','');

        let navbarMenu = document.createElement('div');
            navbarMenu.classList.add('flex');
            navbarMenu.classList.add('buttonsBorder');
            navbarMenu.classList.add('font');
            
            let logReg = document.createElement('div');
                logReg.classList.add('button');
                logReg.classList.add('link');
                logReg.classList.add('flex');
                logReg.classList.add('wrap');
                logReg.setAttribute('id','logReg');
                logReg.setAttribute('onmouseover','showLogReg()');
                logReg.setAttribute('onmouseout','hideLogReg()');
            
                let loginIcon = document.createElement('img');
                    loginIcon.classList.add('buttonIMG');
                    loginIcon.setAttribute('src','https://icons.iconarchive.com/icons/icons8/windows-8/64/User-Interface-Login-icon.png');
                
                let loginTxt = document.createElement('p');
                    loginTxt.classList.add('navbarIconWidth');
                    loginTxt.classList.add('marginZero');
                    loginTxt.classList.add('boxFont');
                    loginTxt.classList.add('flex');
                    loginTxt.setAttribute('id','loginTxt');
                    loginTxt.innerText = 'Log In';

                let logRegPopup = document.createElement('div');
                    logRegPopup.classList.add('flex');
                    logRegPopup.classList.add('wrap');
                    logRegPopup.setAttribute('id','logRegPopup');
                    logRegPopup.setAttribute('onmouseover','showLogReg()');
                    logRegPopup.setAttribute('onmouseout','hideLogReg()');

                    let loginForm = document.createElement('form');
                        loginForm.classList.add('font');
                        loginForm.classList.add('wrap');
                        loginForm.classList.add('flex');
                        loginForm.setAttribute('id','loginForm');

                    let userNameLabel = document.createElement('label');
                        userNameLabel.setAttribute('for','username');
                        userNameLabel.innerText = 'Enter your user name here';
                    
                    let userNameInput = document.createElement('input');
                        userNameInput.classList.add('width');
                        userNameInput.classList.add('margin');
                        userNameInput.classList.add('regForm');
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
                        passwordInput.setAttribute('id','password');
                        passwordInput.setAttribute('name','passwordInput');
                        passwordInput.setAttribute('type','password');
                        passwordInput.setAttribute('autocomplete','off');
                        passwordInput.setAttribute('required','');

                    let logInButton = document.createElement('input');
                        logInButton.classList.add('margin');
                        logInButton.classList.add('regForm');
                        logInButton.classList.add('regButton');
                        logInButton.setAttribute('type','submit');
                        logInButton.setAttribute('value','Log In');
                        logInButton.setAttribute('onclick','logIn(event)');

                    let noAccTxt = document.createElement('p');
                        noAccTxt.classList.add('logOption');
                        noAccTxt.classList.add('textCenter');
                        noAccTxt.classList.add('paddingZero');
                        noAccTxt.classList.add('width');
                        noAccTxt.classList.add('paddingZero');
                        noAccTxt.setAttribute('id','noAccTxt');
                        noAccTxt.innerText = "You don't have account?";

                    let registerLink = document.createElement('div');
                        registerLink.classList.add('textCenter');
                        registerLink.classList.add('paddingZero');
                        registerLink.classList.add('width');
                        registerLink.setAttribute('id','registerLink');
                        registerLink.setAttribute('onclick','registerGenerate()');
                        registerLink.innerText = 'Register';

            let userAccount = document.createElement('div');
                userAccount.classList.add('button');
                userAccount.classList.add('navButtonMargin');
                userAccount.classList.add('flex');
                userAccount.classList.add('wrap');
                userAccount.classList.add('link');
                userAccount.setAttribute('id','userAccount');

                let profileIcon = document.createElement('img');
                    profileIcon.classList.add('buttonIMG');
                    profileIcon.setAttribute('src','https://freeiconshop.com/wp-content/uploads/edd/person-outline.png');

                let profileTxt = document.createElement('div');
                    profileTxt.classList.add('navbarIconWidth');
                    profileTxt.classList.add('marginZero');
                    profileTxt.classList.add('boxFont');
                    profileTxt.classList.add('flex');
                    profileTxt.innerText = 'Profile';

            // let basket = document.createElement('div');
            //     basket.classList.add('button');
            //     basket.classList.add('link');
            //     basket.classList.add('navButtonMargin');
            //     basket.classList.add('flex');
            //     basket.setAttribute('id','basket');

            //     let basketIcon = document.createElement('img');
            //         basketImg.classList.add('buttonIMG');
            //         basketImg.setAttribute('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3lq3F5wIgfte5dY2SwTmVqjuS422fIH8JCg&usqp=CAU');

            //     let basketTxt = document.createElement('div');
            //         basketTxt.classList.add('navbarIconWidth');
            //         basketTxt.classList.add('marginZero');
            //         basketTxt.classList.add('boxFont');
            //         basketTxt.classList.add('flex');
            //         basketTxt.innerText = 'Basket';

    navBar.append(logo);
    navBar.append(searchBar);
        searchBar.append(searchInput);
        searchBar.append(searchButton);
    navBar.append(navbarMenu);
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
}

function showLogReg() {
    const logRegPopup = document.getElementById("logRegPopup");
          logRegPopup.style.visibility = "visible";
};

function hideLogReg() {
    const logRegPopup = document.getElementById("logRegPopup");
          logRegPopup.style.visibility = "hidden";
};

function categoriesOfExercises(data){
    
            let contentDiv = document.querySelector('#content');
                contentDiv.classList.remove('yAxisSpaceBetween');
                contentDiv.classList.remove('width80');
                contentDiv.innerText = ' ';
    
                let categoryTitle = document.createElement('p');
                    categoryTitle.classList.add('textCenter');
                    categoryTitle.classList.add('font');
                    categoryTitle.classList.add('welcome');
                    categoryTitle.classList.add('width');
                    categoryTitle.classList.add('marginZero');
                    categoryTitle.innerText = 'Welcome in Aga English School!';

                let categorySubTitle = document.createElement('p');
                    categorySubTitle.classList.add('textCenter');
                    categorySubTitle.classList.add('font');
                    categorySubTitle.classList.add('margin05TB');
                    categorySubTitle.classList.add('width');
                    categorySubTitle.innerText = 'Register for free to follow your progress';

                let categoryGrid = document.createElement('div');
                    categoryGrid.classList.add('flex');
                    categoryGrid.classList.add('borderBox');
                    categoryGrid.classList.add('wrap');
                    categoryGrid.setAttribute('id','contentGrid');
                        data.map(item=>{
                    
                    let categoryBar = document.createElement('div');
                        categoryBar.classList.add('contentSquare');
                        categoryBar.classList.add('border1pxRadius');
                        categoryBar.classList.add('flex');
                        categoryBar.classList.add('wrap');
                        categoryBar.classList.add('font');
                        categoryBar.setAttribute('onclick','getExercisesTitle(event, exercisesData)');
                    
                        let categoryImg = document.createElement('img');
                            categoryImg.classList.add('contentIMG');
                            categoryImg.setAttribute('src', item.img);
                        
                        let categoryInfo = document.createElement('div');
                            categoryInfo.classList.add('textCenter');
                            categoryInfo.classList.add('textBackgroundLightColor');
                            categoryInfo.classList.add('flex');
                            categoryInfo.classList.add('marginZero');
                            categoryInfo.classList.add('width');
                            categoryInfo.classList.add('radiusLowerCorners');
                            categoryInfo.innerText = item.name;
    
    content.append(categoryTitle);
    content.append(categorySubTitle);
    content.append(categoryGrid);
        categoryGrid.append(categoryBar);
            categoryBar.append(categoryImg);
            categoryBar.append(categoryInfo);
        }
    )
};

function getExercisesTitle(event, data){
    filterBorder(filterData);
    let title; 
// if(filter.srcElement.lastChild.data !== undefined){
//     title = event.srcElement.lastChild.data;
// } else {
//     title = event.target.lastChild.innerText;
// };
exercises(data, title);
}
function filterBorder(data){
let content = document.querySelector('#content');
    content.innerText = '';
    content.classList.add('width80');
    content.classList.add('wrap');
    content.classList.add('yAxisSpaceBetween');

    let filterBox = document.createElement('div');
    filterBox.classList.add('flex');
    filterBox.setAttribute('id','filterBox');

        let filterList = document.createElement('div');
        filterList.classList.add('font');
        filterList.classList.add('border1pxRadius');
        filterList.classList.add('whiteBackground');
        filterList.setAttribute('id','filterList');

            let filterInfo = document.createElement('div');
            filterInfo.classList.add('width');
            filterInfo.classList.add('textCenter');
            filterInfo.classList.add('filterInfo');
            filterInfo.innerText = "Wybierz filtry";

content.append(filterBox);
    filterBox.append(filterList);
        filterList.append(filterInfo);

    data.map(item=>{

        let filterBar = document.createElement('div');
            filterBar.classList.add('filterBar');
            filterBar.classList.add('width');
            filterBar.classList.add('flex');

            let filterLabel = document.createElement('label');
                filterLabel.setAttribute('for', item.group);
                filterLabel.classList.add('filterName');

                let filterCheck = document.createElement('input');
                    filterCheck.setAttribute('type','checkbox');
                    filterCheck.classList.add('border1pxRadius');
                    filterCheck.classList.add('checkbox');
                    filterCheck.setAttribute('id', item.group);
                    filterCheck.setAttribute('onclick','filter(event, filterData, exercisesData)');
                
                let filterName = document.createElement('span');
                    filterName.classList.add('marginForm');
                    filterName.innerText = item.group;


    filterList.append(filterBar);
        filterBar.append(filterLabel);
            filterLabel.append(filterCheck);
            filterLabel.append(filterName);

});
};
function exercises(data){
// let contentTitle = document.createElement('div');
//         contentTitle.classList.add('font');
//         contentTitle.classList.add('width');
//         contentTitle.classList.add('textCenter');
//         contentTitle.classList.add('margin05Bottom');
//         contentTitle.classList.add('contentTitle');
//         contentTitle.classList.add('border1pxRadius');
//         contentTitle.classList.add('whiteBackground');
//         contentTitle.innerText = title;            
if(document.querySelector('#itemList')){
    document.querySelector('#itemList').remove();
}


let itemList = document.createElement('div');
itemList.classList.add('flex');
itemList.classList.add('wrap');
itemList.classList.add('width80');
itemList.setAttribute('id','itemList');

content.append(itemList);
    // itemList.append(contentTitle);

    data.map(item=>{
    
    let itemBar = document.createElement('div');
    itemBar.classList.add('itemBar');
    itemBar.classList.add('font');
    itemBar.classList.add('wrap');
    itemBar.classList.add('flex');
    itemBar.classList.add('margin05Bottom');
    itemBar.classList.add('width');
    itemBar.classList.add('border1pxRadius');
    itemBar.classList.add('whiteBackground');
    
        let itemName = document.createElement('div');
        itemName.classList.add('itemName');
        itemName.classList.add('boxFont');
        itemName.classList.add('width');
        itemName.innerText = item.name.charAt(0).toUpperCase() + item.name.slice(1);
        
        let itemInfo = document.createElement('div');
        itemInfo.classList.add('itemInfo');
        itemInfo.classList.add('boxFont');
        itemInfo.classList.add('width');
        itemInfo.innerText = item.type.charAt(0).toUpperCase() + item.type.slice(1);

        let itemLevel = document.createElement('div');
        itemLevel.classList.add('itemLevel');
        itemLevel.classList.add('boxFont');
        itemLevel.classList.add('width');
        itemLevel.innerText = `Poziom zadania: ${item.level.charAt(0).toUpperCase()}${item.level.slice(1)}`;


    itemList.append(itemBar);
        itemBar.append(itemName);
        itemBar.append(itemInfo);
        itemBar.append(itemLevel);
        }
    )
};


function filter(e, filters, categories){
    const id = e.target.id;
    const filtered = [];
    filters.forEach((item)=>{
        if(item.group === id){
           item.filter = !item.filter
        }})
    filters.filter(item => {
        if(item.filter === true){
            filtered.push(item.group)
        }
    });
    filtered.sort();
    const categoriesToShow = categories.filter(item => filtered.includes(item.group));
    if(categoriesToShow.length < 1){
        exercises(categories);
    } else exercises(categoriesToShow);
}

function registerGenerate(){ 
    let content = document.querySelector('#content');
        content.innerText = ' ';

    let registerTxt = document.createElement('h1');
        registerTxt.innerText = 'Register';
        registerTxt.classList.add('width');
        registerTxt.classList.add('font');
        registerTxt.classList.add('textCenter');
            
    let form = document.createElement('form');
        form.classList.add('flex');
        form.classList.add('wrap');
        form.setAttribute('id','registerForm');
        form.classList.add('font');

        let userNameLabel = document.createElement('label');
            userNameLabel.setAttribute('for','username');
            userNameLabel.innerText = 'Enter your user name here';
        
        let userNameInput = document.createElement('input');
            userNameInput.classList.add('width');
            userNameInput.classList.add('margin');
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
            password2Input.classList.add('regForm');
            password2Input.setAttribute('id','password2');
            password2Input.setAttribute('name','password2Input');
            password2Input.setAttribute('type','password');
            password2Input.setAttribute('autocomplete','off');
            password2Input.setAttribute('required','');

        let registerButton = document.createElement('input');
            registerButton.classList.add('margin');
            registerButton.classList.add('regButton');
            registerButton.classList.add('regForm');
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

function register(e){
    e.preventDefault();
    const password = e.target.elements.passwordInput.value;
    const password2 = e.target.elements.password2Input.value;
    if(password !== password2){alert('Both passwords must be the same')} else {
    const form = document.getElementById('regForm');
        form.addEventListener('submit', async(e)=>{
            const username = e.target.elements.userNameInput.value
            const email = e.target.elements.emailInput.value
            const password = e.target.elements.passwordInput.value
            const result = await fetch('https://mecapikot.herokuapp.com/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    password, email, username, 
                })
            }).then((res)=>res.json());
            console.log(result);
        });
    }
}
    
function logIn(e){
    const form = document.getElementById('loginForm')
        form.addEventListener('submit', async(e)=>{
            e.preventDefault();
            const username = e.target.elements.usernameInput.value;
            const password = e.target.elements.passwordInput.value;
            // const result = await fetch('https://mecapikot.herokuapp.com/api/auth/user');
            // const body = await result.json();
            console.log(`USERNAME: ${username}, PASSWORD: ${password}`);
        })
}





window.onload = navbar();