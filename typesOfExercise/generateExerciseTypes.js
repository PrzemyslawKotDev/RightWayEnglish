const generateExerciseTypes = function(data){

if(document.querySelector('#exercisesList')){
document.querySelector('#exercisesList').remove();
}

const exercisesBox = document.getElementById('exercisesBox');

    let exercisesList = document.createElement('div');
        exercisesList.classList.add('flex');
        exercisesList.classList.add('centerHorizontal');
        exercisesList.classList.add('centerVertical');
        exercisesList.classList.add('wrap');
        exercisesList.classList.add('width');
        exercisesList.setAttribute('id', 'exercisesList');

data.map(item=>{

        let exerciseBar = document.createElement('div');
            exerciseBar.classList.add('itemBar');
            exerciseBar.classList.add('font');
            exerciseBar.classList.add('wrap');
            exerciseBar.classList.add('flex');
            exerciseBar.classList.add('centerHorizontal');
            exerciseBar.classList.add('centerVertical');
            exerciseBar.classList.add('margin05Bottom');
            exerciseBar.classList.add('width');
            exerciseBar.classList.add('cursorPointer');
            exerciseBar.classList.add('borderRadius10');
            exerciseBar.classList.add('border1pxDarker');
            exerciseBar.classList.add('whiteBackground');
            exerciseBar.setAttribute('name', item.group);
            exerciseBar.setAttribute('onclick',`exercise(${item.data})`);
            
            let exerciseName = document.createElement('div');
                exerciseName.classList.add('itemName');
                exerciseName.classList.add('borderBox');
                exerciseName.classList.add('width');
                exerciseName.innerText = item.name.charAt(0).toUpperCase() + item.name.slice(1);
            
            let exerciseInfo = document.createElement('div');
                exerciseInfo.classList.add('itemInfo');
                exerciseInfo.classList.add('borderBox');
                exerciseInfo.classList.add('width');
                exerciseInfo.innerText = item.type.charAt(0).toUpperCase() + item.type.slice(1);

            let exerciseLevel = document.createElement('div');
                exerciseLevel.classList.add('itemLevel');
                exerciseLevel.classList.add('borderBox');
                exerciseLevel.classList.add('width');
                exerciseLevel.innerText = `Poziom zadania: ${item.level.charAt(0).toUpperCase()}${item.level.slice(1)}`;

exercisesBox.append(exercisesList);
    exercisesList.append(exerciseBar);
        exerciseBar.append(exerciseName);
        exerciseBar.append(exerciseInfo);
        exerciseBar.append(exerciseLevel);
    })
}