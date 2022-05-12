const exercise = function(data){
    let content = document.querySelector('#content');
        content.classList.remove('verticalSpaceBetween');
        content.innerText = ``;
    
        let exercisesToDo = document.createElement('div');
            exercisesToDo.classList.add('borderBox');
            exercisesToDo.classList.add('width80');
    
        let tips = document.createElement('div');
            tips.classList.add('borderBox');
            tips.classList.add('width');
            tips.classList.add('font');
            tips.classList.add('padding05');
            tips.classList.add('textCenter');
            tips.classList.add('fontSize125');
            tips.innerText = `Show button gives u the answers. Check button checks if your answer is correct. Get score button works properly if u check your answers.`;
    
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
        exercisesToDo.append(tips);
        exercisesToDo.append(goodLuck);
    
            data.map((item, key) => {
    
                let exercise = document.createElement('div');
                    exercise.classList.add('font');
                    exercise.classList.add('width');
                    exercise.classList.add('padding05');
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
                        correct1.classList.add('margin025');
                        correct1.classList.add('transition1sBackgroundColor');
                        correct1.setAttribute('id',`correct${key}1`);
    
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
                            answers.classList.add('transition1sVisibility');
                            answers.setAttribute('id',`answers${key}`);
                            const answersArray = [];
                            if(item.correct1){answersArray.push(item.correct1)};
                            if(item.correct2){answersArray.push(item.correct2)};
                            if(item.correct3){answersArray.push(item.correct3)};
                            const answersString = answersArray.join(', ');
                            answers.innerText = answersString;
    
                    let buttons = document.createElement('div');
                        buttons.classList.add('padding05');
                        buttons.classList.add('width');
                        buttons.classList.add('font');
                    
                        let check = document.createElement('button');
                            check.classList.add('padding05');
                            check.classList.add('cursorPointer');
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
                            showCorrectAnswers.classList.add('padding05');
                            showCorrectAnswers.classList.add('showButton');
                            showCorrectAnswers.classList.add('cursorPointer');
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
                const scorePercent = (goodAnswers/(goodAnswers+wrongAnswers)*100)
                scoreDiv.innerText = `Good answers: ${goodAnswers} / Wrong answers: ${wrongAnswers} / Score: ${scorePercent}%`
            }
    
    content.append(score);
    content.append(getScore);
    
}