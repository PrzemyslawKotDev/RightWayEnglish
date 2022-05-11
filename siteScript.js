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
const exercisesInfo = [
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
const exercisesData = [
    {
        part1: "Holland is also known",
        correct1: "as",
        part2: "the Netherlands.",
        correct2: "",
        part3: "",
        correct3: "",
        part4: "",
    },
    {
        part1: " You can't take part in the elections",
        correct1: "unless",
        part2: "you are a citizen of Poland.",
        correct2: "",
        part3: "",
        correct3: "",
        part4: "",
    },
    {
        part1: "Even",
        correct1: "though",
        part2: "we don't like her, I really think we should",
        correct2: "help",
        part3: "her in",
        correct3: "this",
        part4: "situation.",
    },
    {
        part1: "The fact he knows the boss is",
        correct1: "neither",
        part2: "here nor there. He won't get the job.",
        correct2: "",
        part3: "",
        correct3: "",
        part4: "",
    },
    {
        part1: "Only adults are",
        correct1: "allowed",
        part2: "to enter and as I can see you aren't old",
        correct2: "enough",
        part3: ".",
        correct3: "",
        part4: "",
    },
    {
        part1: "Of course I'll forgive him. After",
        correct1: "all",
        part2: "we're only humans. We do make mistakes.",
        correct2: "",
        part3: "",
        correct3: "",
        part4: "",
    },
    {
        part1: "I don't know if they all go to the party. I will, at",
        correct1: "any",
        part2: "rate.",
        correct2: "",
        part3: "",
        correct3: "",
        part4: "",
    },
    {
        part1: " I don't like your new car. I really prefered the previous",
        correct1: "one",
        part2: ".",
        correct2: "",
        part3: "",
        correct3: "",
        part4: "",
    },
    {
        part1: "Don't tell me lies. What you said doesn't",
        correct1: "make",
        part2: "any sense.",
        correct2: "",
        part3: "",
        correct3: "",
        part4: "",
    },
    {
        part1: "Monica has",
        correct1: "such",
        part2: "a beautiful son. She must be really happy.",
        correct2: "",
        part3: "",
        correct3: "",
        part4: "",
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
                contentDiv.classList.remove('width');
                contentDiv.innerText = ' ';
    
                let categoryTitle = document.createElement('p');
                    categoryTitle.classList.add('textCenter');
                    categoryTitle.classList.add('font');
                    categoryTitle.classList.add('welcome');
                    categoryTitle.classList.add('width');
                    categoryTitle.classList.add('marginZero');
                    categoryTitle.innerText = 'Welcome in RightWay English!';

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
                        categoryBar.setAttribute('onclick','getExercisesTitle(event, exercisesInfo)');
                    
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
                            categoryInfo.classList.add('contentBox');
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
                filterLabel.classList.add('flex');
                filterLabel.classList.add('wrap');

                let filterCheck = document.createElement('input');
                    filterCheck.setAttribute('type','checkbox');
                    filterCheck.classList.add('border1pxRadius');
                    filterCheck.classList.add('checkbox');
                    filterCheck.setAttribute('id', item.group);
                    filterCheck.setAttribute('onclick','filter(event, filterData, exercisesInfo)');
                
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
let content = document.querySelector('#content');

let exercisesList = document.createElement('div');
    exercisesList.classList.add('flex');
    exercisesList.classList.add('wrap');
    exercisesList.classList.add('width80');
    exercisesList.setAttribute('id','itemList');

content.append(exercisesList);
    // itemList.append(contentTitle);

    data.map(item=>{
    
    let exerciseBar = document.createElement('div');
        exerciseBar.classList.add('itemBar');
        exerciseBar.classList.add('font');
        exerciseBar.classList.add('wrap');
        exerciseBar.classList.add('flex');
        exerciseBar.classList.add('margin05Bottom');
        exerciseBar.classList.add('width');
        exerciseBar.classList.add('border1pxRadius');
        exerciseBar.classList.add('whiteBackground');
        exerciseBar.setAttribute('onclick','loadExercise(exercisesData)');
        
        let exerciseName = document.createElement('div');
            exerciseName.classList.add('itemName');
            exerciseName.classList.add('boxFont');
            exerciseName.classList.add('width');
            exerciseName.innerText = item.name.charAt(0).toUpperCase() + item.name.slice(1);
        
        let exerciseInfo = document.createElement('div');
            exerciseInfo.classList.add('itemInfo');
            exerciseInfo.classList.add('boxFont');
            exerciseInfo.classList.add('width');
            exerciseInfo.innerText = item.type.charAt(0).toUpperCase() + item.type.slice(1);

        let exerciseLevel = document.createElement('div');
            exerciseLevel.classList.add('itemLevel');
            exerciseLevel.classList.add('boxFont');
            exerciseLevel.classList.add('width');
            exerciseLevel.innerText = `Poziom zadania: ${item.level.charAt(0).toUpperCase()}${item.level.slice(1)}`;


    itemList.append(exerciseBar);
        exerciseBar.append(exerciseName);
        exerciseBar.append(exerciseInfo);
        exerciseBar.append(exerciseLevel);
        }
    )
};

function loadExercise(data){
let content = document.querySelector('#content');
    content.classList.remove('yAxisSpaceBetween');
    content.innerText = ``;

    let exercisesToDo = document.createElement('div');
        exercisesToDo.classList.add('boxFont');
        exercisesToDo.classList.add('width80');

    let tips = document.createElement('div');
        tips.classList.add('boxFont');
        tips.classList.add('width');
        tips.classList.add('font');
        tips.classList.add('padding');
        tips.classList.add('textCenter');
        tips.classList.add('fontSize125');
        tips.innerText = `Show button gives u the answers. Check button checks if your answer is correct. Get score button works properly if u check your answers.`;

    let goodLuck = document.createElement('div');
        goodLuck.classList.add('boxFont');
        goodLuck.classList.add('width');
        goodLuck.classList.add('font');
        goodLuck.classList.add('padding05Bottom');
        goodLuck.classList.add('textCenter');
        goodLuck.classList.add('borderBottom');
        goodLuck.classList.add('fontSize150');
        goodLuck.classList.add('fontWeight500');
        goodLuck.innerText = `Good luck!`;

content.append(exercisesToDo);
    exercisesToDo.append(tips);
    exercisesToDo.append(goodLuck);

        data.map((item, key) => {

            let exercise = document.createElement('div');
                exercise.classList.add('font');
                exercise.classList.add('width');
                exercise.classList.add('padding');
                exercise.classList.add('borderBox');
                exercise.classList.add('borderBottom');
                exercise.setAttribute('id', key);

                exercisesToDo.append(exercise);

                let part1 = document.createElement('span');
                    part1.innerText = `${item.part1} `;

                    exercise.append(part1);
                    
                let correct1 = document.createElement('input');
                    correct1.classList.add('inlineBlock');
                    correct1.classList.add('wordInput');
                    correct1.classList.add('transition1sBackgroundColor');
                    correct1.setAttribute('id',`correct${key}1`);

                    exercise.append(correct1);

                let part2 = document.createElement('span');
                    part2.innerText = `${item.part2} `;

                    exercise.append(part2);

                if(item.part3){

                    let correct2 = document.createElement('input');
                        correct2.classList.add('wordInput');
                        correct2.classList.add('transition1sBackgroundColor');
                        correct2.classList.add('inlineBlock');
                        correct2.setAttribute('id',`correct${key}2`);

                    let part3 = document.createElement('span');
                        part3.innerText = `${item.part3} `;

                    exercise.append(correct2);
                    exercise.append(part3);

                };
                if(item.part4){

                    let correct3 = document.createElement('input');
                        correct3.classList.add('wordInput');
                        correct3.classList.add('transition1sBackgroundColor');
                        correct3.classList.add('inlineBlock');
                        correct3.setAttribute('id',`correct${key}3`);

                    let part4 = document.createElement('span');
                        part4.innerText = `${item.part4} `;

                    exercise.append(correct3);
                    exercise.append(part4);

                }
                let answersBar = document.createElement('div');
                    answersBar.classList.add('width');
                    answersBar.classList.add('flex');
                    answersBar.classList.add('font');
                    answersBar.classList.add('height');
                    answersBar.classList.add('itemsToLeft');
                    
                    let answerTxt = document.createElement('span');
                        answerTxt.classList.add('font');
                        answerTxt.classList.add('answerTxtPadding');
                        answerTxt.innerText = `Answers: `;

                    let answers = document.createElement('span');
                        answers.classList.add('hidden');
                        answers.classList.add('font');
                        answers.classList.add('transition1sVisibility');
                        answers.setAttribute('id',`answers${key}`);
                        const answersArray = [];
                        if(item.correct1){answersArray.push(item.correct1)};
                        if(item.correct2){answersArray.push(item.correct2)};
                        if(item.correct3){answersArray.push(item.correct3)};
                        const answersString = answersArray.join(', ');
                        answers.innerText = answersString;

                let buttons = document.createElement('div');
                    buttons.classList.add('padding');
                    buttons.classList.add('width');
                    buttons.classList.add('font');
                
                    let check = document.createElement('button');
                        check.classList.add('padding');
                        check.classList.add('inlineBlock');
                        check.classList.add('checkButton');
                        check.innerText = `Check`;
                        check.onclick = ()=>{
                            const answer1 = document.getElementById(`correct${key}1`).value.toLowerCase();
                            const answers = document.getElementById(`answers${key}`).innerText.toLowerCase();
                            if(answer1 !== '' && answers.includes(answer1)){
                                document.getElementById(`correct${key}1`).classList.remove('wrongAnswer');
                                document.getElementById(`correct${key}1`).classList.add('goodAnswer');
                            } else {
                                document.getElementById(`correct${key}1`).classList.remove ('goodAnswer');
                                document.getElementById(`correct${key}1`).classList.add('wrongAnswer');
                            };
                            if(item.correct2){

                                const answer2 = document.getElementById(`correct${key}2`).value.toLowerCase();

                                if(answer2 !== '' && answers.includes(answer2)){
                                    document.getElementById(`correct${key}2`).classList.remove('wrongAnswer');
                                    document.getElementById(`correct${key}2`).classList.add('goodAnswer');
                                } else {
                                    document.getElementById(`correct${key}2`).classList.remove ('goodAnswer');
                                    document.getElementById(`correct${key}2`).classList.add('wrongAnswer');
                                }
                            };
                            if(item.correct3){

                                const answer3 = document.getElementById(`correct${key}3`).value.toLowerCase();

                                if(answer3 !== '' && answers.includes(answer3)){
                                    document.getElementById(`correct${key}3`).classList.remove('wrongAnswer');
                                    document.getElementById(`correct${key}3`).classList.add('goodAnswer');
                                } else {
                                    document.getElementById(`correct${key}3`).classList.remove ('goodAnswer');
                                    document.getElementById(`correct${key}3`).classList.add('wrongAnswer');
                              }
                            };
                        }
                        
                    let showCorrectAnswers = document.createElement('button');
                        showCorrectAnswers.classList.add('padding');
                        showCorrectAnswers.classList.add('showButton');
                        showCorrectAnswers.classList.add('inlineBlock');
                        showCorrectAnswers.innerText = `Show`;
                        showCorrectAnswers.onclick = ()=>{
                            document.getElementById(`answers${key}`).classList.remove('hidden');
                        }

                    exercise.append(answersBar);
                        answersBar.append(answerTxt);
                        answersBar.append(answers);
                    exercise.append(buttons);
                        buttons.append(check);
                        buttons.append(showCorrectAnswers);
                
        }
    );
    let score = document.createElement('div');
        score.classList.add('width');
        score.classList.add('font');
        score.classList.add('textCenter');
        score.classList.add('padding');
        score.setAttribute('id',`score`);
        score.innerText = `Good answers: 0 / Wrong answers: 0 / Score: 0%`;
    
    let getScore = document.createElement('button');
        getScore.classList.add('padding');
        getScore.innerText = `Overall score`;
        getScore.onclick = ()=>{
            const goodAnswers = document.querySelectorAll('.goodAnswer').length;
            const wrongAnswers = document.querySelectorAll('.wrongAnswer').length;
            const scoreDiv = document.getElementById('score');
            const scorePercent = (goodAnswers/(goodAnswers+wrongAnswers)*100)
            scoreDiv.innerText = `Good answers: ${goodAnswers} / Wrong answers: ${wrongAnswers} / Score: ${scorePercent}%`
        }

content.append(score);
content.append(getScore);

}

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
        content.classList.remove('yAxisSpaceBetween');
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

window.onload = navbar(),categoriesOfExercises(categoryData);