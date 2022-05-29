const exercise = function(data, precept){
    let content = document.querySelector('#content');
        content.classList.toggle('hidden');
        window.scroll({
            top: 0, 
            behavior: 'smooth' 
           });

setTimeout(()=>{

    content.classList.remove('verticalSpaceBetween');
    content.innerText = ``;

    let exercisesToDo = document.createElement('div');
        exercisesToDo.classList.add('borderBox');
        exercisesToDo.setAttribute('id', 'exercisesToDo');

    let goodLuck = document.createElement('div');
        goodLuck.classList.add('borderBox');
        goodLuck.classList.add('width');
        goodLuck.classList.add('font');
        goodLuck.classList.add('padding05Bottom');
        goodLuck.classList.add('textCenter');
        goodLuck.classList.add('borderBottom');
        goodLuck.classList.add('fontSize150');
        goodLuck.classList.add('fontWeight500');
        goodLuck.innerText = `Good luck!`;
        
content.append(exercisesToDo);
exercisesToDo.append(goodLuck);

if(precept){

let preceptContainer = document.createElement('div');
    preceptContainer.classList.add('borderBox');
    preceptContainer.classList.add('width');
    preceptContainer.classList.add('borderBox');
    preceptContainer.classList.add('flex');
    preceptContainer.classList.add('wrap');
    preceptContainer.classList.add('centerHorizontal');
    preceptContainer.classList.add('centerVertical');
    preceptContainer.classList.add('borderLeft1pxDarker');
    preceptContainer.classList.add('borderRight1pxDarker');
    preceptContainer.classList.add('margin1Bottom');

exercisesToDo.append(preceptContainer);

precept.forEach(item=>{

        let preceptBox = document.createElement('div');
            preceptBox.classList.add('borderBox');
            preceptBox.classList.add('font');
            preceptBox.classList.add('flex');
            preceptBox.classList.add('centerHorizontal');
            preceptBox.classList.add('centerVertical');
            preceptBox.classList.add('width');
            preceptBox.classList.add('borderBottom');

            let preceptTitle = document.createElement('div');
                preceptTitle.classList.add('width8');
                preceptTitle.classList.add('flex');
                preceptTitle.classList.add('centerHorizontal');
                preceptTitle.classList.add('centerVertical');
                preceptTitle.classList.add('padding05');
                preceptTitle.classList.add('textCenter');
                preceptTitle.innerText = item[0];

                let preceptTxtHolder = document.createElement('div');
                preceptTxtHolder.classList.add('flex');
                preceptTxtHolder.classList.add('wrap');
                preceptTxtHolder.classList.add('centerHorizontal');
                preceptTxtHolder.classList.add('centerVertical');
                preceptTxtHolder.classList.add('padding1');
                preceptTxtHolder.classList.add('width');
                preceptTxtHolder.classList.add('borderLeft1pxDarker');

                preceptContainer.append(preceptBox);
                    preceptBox.append(preceptTitle);
                    preceptBox.append(preceptTxtHolder);

                for(let i = 1; i<item.length; i++){
                    let preceptTxt = document.createElement('span');
                        preceptTxt.classList.add('width');
                        preceptTxt.classList.add('padding05');
                        preceptTxt.innerText = item[i]; 
                        preceptTxtHolder.append(preceptTxt);
                }
})
};

        data.map((item, key) => {

            const answersArray = [];
                        
                        if(typeof item.correct1 === 'array'){
                            item.correct1.forEach(item=>answersArray.push(item))
                        } else {answersArray.push(item.correct1)};
                        if(typeof item.correct2 === 'array'){
                            item.correct2.forEach(item=>answersArray.push(item))
                        } else {if (item.correct2){answersArray.push(item.correct2)}};
                        if(typeof item.correct3 === 'array'){
                            item.correct3.forEach(item=>answersArray.push(item))
                        } else {if (item.correct3){answersArray.push(item.correct3)}};

                        const answersString = answersArray.join(', ');

            let exercise = document.createElement('div');
                exercise.classList.add('font');
                exercise.classList.add('width');
                exercise.classList.add('padding05');
                exercise.classList.add('borderBox');
                exercise.classList.add('borderBottom');
                exercise.setAttribute('id', key);

                exercisesToDo.append(exercise);

                if(item.number){

                    let ruleNumber = document.createElement('input');
                        ruleNumber.classList.add('transition1sBackgroundColor');
                        ruleNumber.classList.add('width3ch');
                        ruleNumber.classList.add('margin025');
                        ruleNumber.classList.add('padding02');
                        ruleNumber.classList.add('textCenter');
                        ruleNumber.setAttribute('name', item.number);
                        ruleNumber.setAttribute('maxlength', '2');
                        ruleNumber.setAttribute('type', 'number');
                        ruleNumber.setAttribute('id', `number${key}`);
                        ruleNumber.oninput = ()=>{
                            if(document.getElementById(`number${key}`).value === document.getElementById(`number${key}`).getAttribute('name')){
                            ruleNumber.classList.remove('wrongAnswer');
                            ruleNumber.classList.add('goodAnswer');
                            } else {
                                ruleNumber.classList.add('wrongAnswer');
                                ruleNumber.classList.remove('goodAnswer');
                            }
                        }
                        exercise.append(ruleNumber);
                }
                let part1 = document.createElement('span');
                    part1.innerText = `${item.part1} `;

                    exercise.append(part1);
                    
                let correct1 = document.createElement('input');
                    correct1.classList.add('inlineBlock');
                    correct1.classList.add('wordInput');
                    correct1.classList.add('margin025');
                    correct1.classList.add('transition1sBackgroundColor');
                    correct1.setAttribute('id',`correct${key}1`);
                    correct1.oninput = ()=>{
                        const answer1 = document.getElementById(`correct${key}1`).value.toLowerCase();
                        if(answersArray.find(item =>item.toLowerCase() == answer1)){
                            document.getElementById(`correct${key}1`).classList.remove('wrongAnswer');
                            document.getElementById(`correct${key}1`).classList.add('goodAnswer');
                        } else {
                            document.getElementById(`correct${key}1`).classList.remove ('goodAnswer');
                            document.getElementById(`correct${key}1`).classList.add('wrongAnswer');
                        };
                    }
                    
                    exercise.append(correct1);

                let part2 = document.createElement('span');
                    part2.innerText = `${item.part2} `;

                    exercise.append(part2);

                if(item.part3){

                    let correct2 = document.createElement('input');
                        correct2.classList.add('margin025');
                        correct2.classList.add('wordInput');
                        correct2.classList.add('transition1sBackgroundColor');
                        correct2.classList.add('inlineBlock');
                        correct2.setAttribute('id',`correct${key}2`);
                        correct2.oninput = ()=>{
                            const answer2 = document.getElementById(`correct${key}2`).value.toLowerCase();
                            if(answersArray.find(item =>item.toLowerCase() == answer2)){
                                document.getElementById(`correct${key}2`).classList.remove('wrongAnswer');
                                document.getElementById(`correct${key}2`).classList.add('goodAnswer');
                            } else {
                                document.getElementById(`correct${key}2`).classList.remove ('goodAnswer');
                                document.getElementById(`correct${key}2`).classList.add('wrongAnswer');
                            };
                        }
                    let part3 = document.createElement('span');
                        part3.innerText = `${item.part3} `;

                    exercise.append(correct2);
                    exercise.append(part3);

                };

                if(item.part4){

                    let correct3 = document.createElement('input');
                        correct3.classList.add('margin025');
                        correct3.classList.add('wordInput');
                        correct3.classList.add('transition1sBackgroundColor');
                        correct3.classList.add('inlineBlock');
                        correct3.setAttribute('id',`correct${key}3`);
                        correct3.oninput = ()=>{
                            const answer3 = document.getElementById(`correct${key}3`).value.toLowerCase();
                            if(answersArray.find(item =>item.toLowerCase() == answer3)){
                                document.getElementById(`correct${key}3`).classList.remove('wrongAnswer');
                                document.getElementById(`correct${key}3`).classList.add('goodAnswer');
                            } else {
                                document.getElementById(`correct${key}3`).classList.remove ('goodAnswer');
                                document.getElementById(`correct${key}3`).classList.add('wrongAnswer');
                            };
                        }
                    let part4 = document.createElement('span');
                        part4.innerText = `${item.part4} `;

                    exercise.append(correct3);
                    exercise.append(part4);

                }

                let answersBar = document.createElement('div');
                    answersBar.classList.add('width');
                    answersBar.classList.add('flex');
                    answersBar.classList.add('centerHorizontal');
                    answersBar.classList.add('centerVertical');
                    answersBar.classList.add('font');
                    answersBar.classList.add('height2');
                    answersBar.classList.add('verticalToLeft');
                    
                    let answerTxt = document.createElement('span');
                        answerTxt.classList.add('font');
                        answerTxt.classList.add('answerTxtPadding');
                        answerTxt.innerText = `Answers: `;

                    let answers = document.createElement('span');
                        answers.classList.add('hidden');
                        answers.classList.add('font');
                        answers.classList.add('transition1s');
                        answers.setAttribute('id',`answers${key}`);
                        
                        answers.innerText = answersString;

                let buttons = document.createElement('div');
                    buttons.classList.add('padding05');
                    buttons.classList.add('width');
                    buttons.classList.add('font');
                
                        
                    let showCorrectAnswers = document.createElement('button');
                        showCorrectAnswers.classList.add('padding05');
                        showCorrectAnswers.classList.add('showButton');
                        showCorrectAnswers.classList.add('cursorPointer');
                        showCorrectAnswers.classList.add('inlineBlock');
                        showCorrectAnswers.innerText = `Show answers`;
                        showCorrectAnswers.onclick = ()=>{
                            document.getElementById(`answers${key}`).classList.remove('hidden');
                        }

                    exercise.append(answersBar);
                        answersBar.append(answerTxt);
                        answersBar.append(answers);
                    exercise.append(buttons);
                        buttons.append(showCorrectAnswers);
                
        }
    );
    let score = document.createElement('div');
        score.classList.add('width');
        score.classList.add('font');
        score.classList.add('textCenter');
        score.classList.add('padding05');
        score.setAttribute('id',`score`);
        score.innerText = `Good answers: 0 / Wrong answers: 0 / Score: 0%`;
    
    let getScore = document.createElement('button');
        getScore.classList.add('cursorPointer');
        getScore.classList.add('padding05');
        getScore.innerText = `Overall score`;
        getScore.onclick = ()=>{
            const goodAnswers = document.querySelectorAll('.goodAnswer').length;
            const wrongAnswers = document.querySelectorAll('.wrongAnswer').length;
            const scoreDiv = document.getElementById('score');
            const scorePercent = Math.round((goodAnswers/(goodAnswers+wrongAnswers)*100))
            scoreDiv.innerText = `Good answers: ${goodAnswers} / Wrong answers: ${wrongAnswers} / Score: ${scorePercent}%`
        }

content.append(score);
content.append(getScore);
content.classList.toggle('hidden');

    }, 500)
}
