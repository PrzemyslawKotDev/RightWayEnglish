const categories = function(data){

    let content = document.querySelector('#content');
    if(!content.classList.contains('hidden')){
        content.classList.toggle('hidden');
    }
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
       });

setTimeout(()=>{
        
    content.innerText = '';

    let categoryTitle = document.createElement('p');
        categoryTitle.classList.add('textCenter');
        categoryTitle.classList.add('font');
        categoryTitle.classList.add('fontSize150');
        categoryTitle.classList.add('width');
        categoryTitle.classList.add('marginZero');
        categoryTitle.innerText = 'Welcome to RightWay English Test Site!';

    let categorySubTitle = document.createElement('p');
        categorySubTitle.classList.add('textCenter');
        categorySubTitle.classList.add('font');
        categorySubTitle.classList.add('margin05TB');
        categorySubTitle.classList.add('width');
        categorySubTitle.innerText = 'Register for free to follow your progress';

    let categoryGrid = document.createElement('div');
        categoryGrid.classList.add('flex');
        categoryGrid.classList.add('centerHorizontal');
        categoryGrid.classList.add('centerVertical');
        categoryGrid.classList.add('borderBox');
        categoryGrid.classList.add('wrap');
        categoryGrid.setAttribute('id','categoryGrid');
            data.map(item=>{
        
        let categoryBar = document.createElement('div');
            categoryBar.classList.add('contentSquare');
            categoryBar.classList.add('flex');
            categoryBar.classList.add('centerHorizontal');
            categoryBar.classList.add('centerVertical');
            categoryBar.classList.add('wrap');
            categoryBar.classList.add('font');
            categoryBar.classList.add('cursorPointer');
            categoryBar.setAttribute('onclick','exerciseTypes(event, exercisesInfo)');
            categoryBar.setAttribute('value', item.name);

            let imgHolder = document.createElement('div');
                imgHolder.classList.add('borderRadius10');
                imgHolder.classList.add('flex');
                imgHolder.classList.add('width');
                imgHolder.classList.add('padding125');
                imgHolder.classList.add('centerHorizontal');
                imgHolder.classList.add('centerVertical');
                imgHolder.classList.add('radiusUpperCorners');
                imgHolder.classList.add('border1pxDarker');
                imgHolder.setAttribute('value', item.name);

        
                let categoryImg = document.createElement('img');
                    categoryImg.classList.add('contentIMG');
                    categoryImg.setAttribute('value', item.name);
                    categoryImg.setAttribute('src', item.img);
            
            let categoryInfo = document.createElement('div');
                categoryInfo.classList.add('textCenter');
                categoryInfo.classList.add('whiteColor');
                categoryInfo.classList.add('height25');
                categoryInfo.classList.add('darkerBlue');
                categoryInfo.classList.add('flex');
                categoryInfo.classList.add('centerHorizontal');
                categoryInfo.classList.add('centerVertical');
                categoryInfo.classList.add('marginZero');
                categoryInfo.classList.add('width');
                categoryInfo.classList.add('radiusLowerCorners');
                categoryInfo.classList.add('contentBox');
                categoryInfo.setAttribute('value', item.name);
                categoryInfo.innerText = item.name;

content.append(categoryTitle);
content.append(categorySubTitle);
content.append(categoryGrid);
    categoryGrid.append(categoryBar);
        categoryBar.append(imgHolder);
            imgHolder.append(categoryImg);
        categoryBar.append(categoryInfo);
            })

        content.classList.toggle('hidden');

    }, 500)

};