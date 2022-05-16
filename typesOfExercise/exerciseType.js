const exerciseTypes = function(event, data){
    const title = event.srcElement.attributes.value.value;
    const duplicatedCategories = []; 
        data.forEach(item => duplicatedCategories.push(item.group));
    
    const uniqueCategories = [...new Set(duplicatedCategories)]

let content = document.querySelector('#content');
    content.innerText = '';    

let container = document.createElement('div');
    container.classList.add('flex');
    container.classList.add('verticalSpaceBetween');
    container.setAttribute('id','container');


    let filterBox = document.createElement('div');
        filterBox.classList.add('flex');
        filterBox.classList.add('centerHorizontal');
        filterBox.classList.add('centerVertical');
        filterBox.setAttribute('id','filterBox');

        let filterList = document.createElement('div');
            filterList.classList.add('font');
            filterList.classList.add('borderRadius10');
            filterList.classList.add('border1pxDarker');
            filterList.classList.add('whiteBackground');
            filterList.setAttribute('id','filterList');

            let filterInfo = document.createElement('div');
                filterInfo.classList.add('width');
                filterInfo.classList.add('textCenter');
                filterInfo.classList.add('filterInfo');
                filterInfo.innerText = "Wybierz filtry";

    let exercisesBox = document.createElement('div');
        exercisesBox.classList.add('flex');
        exercisesBox.classList.add('centerHorizontal');
        exercisesBox.classList.add('centerVertical');
        exercisesBox.classList.add('wrap');
        exercisesBox.setAttribute('id', 'exercisesBox');

    let exercisesTitle = document.createElement('div');
        exercisesTitle.classList.add('font');
        exercisesTitle.classList.add('width');
        exercisesTitle.classList.add('textCenter');
        exercisesTitle.classList.add('margin05Bottom');
        exercisesTitle.classList.add('padding1');
        exercisesTitle.classList.add('fontSize200');
        exercisesTitle.classList.add('border1pxDarker');
        exercisesTitle.classList.add('border1pxDarker');
        exercisesTitle.classList.add('borderRadius10');
        exercisesTitle.classList.add('whiteBackground');
        exercisesTitle.innerText = title;
        
content.append(container)
    container.append(filterBox);
        filterBox.append(filterList);
            filterList.append(filterInfo);
    container.append(exercisesBox);
        exercisesBox.append(exercisesTitle);

        uniqueCategories.map(item=>{

        let filterBar = document.createElement('div');
            filterBar.classList.add('filterBar');
            filterBar.classList.add('verticalToLeft');
            filterBar.classList.add('width');
            filterBar.classList.add('flex');
            filterBar.classList.add('centerHorizontal');
            filterBar.classList.add('centerVertical');

            let filterLabel = document.createElement('label');
                filterLabel.setAttribute('for', item);
                filterLabel.classList.add('filterName');
                filterLabel.classList.add('cursorPointer');
                filterLabel.classList.add('flex');
                filterLabel.classList.add('centerHorizontal');
                filterLabel.classList.add('centerVertical');
                filterLabel.classList.add('wrap');

                let filterCheck = document.createElement('input');
                    filterCheck.setAttribute('type','checkbox');
                    filterCheck.classList.add('borderRadius10');
                    filterCheck.classList.add('whiteBackground');
                    filterCheck.classList.add('border1pxDarker');
                    filterCheck.classList.add('checkbox');
                    filterCheck.setAttribute('id', item);
                    filterCheck.setAttribute('onclick','filter(event, filters, exercisesInfo)');
                
                let filterName = document.createElement('span');
                    filterName.classList.add('margin05');
                    filterName.innerText = item;

    filterList.append(filterBar);
        filterBar.append(filterLabel);
            filterLabel.append(filterCheck);
            filterLabel.append(filterName);
})
generateExerciseTypes(exercisesInfo)
};