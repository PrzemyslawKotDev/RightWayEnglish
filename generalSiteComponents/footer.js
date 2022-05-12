const footer = function(){
    let footerDiv = document.getElementById('footer');

        let footerInfo = document.createElement('div');
            footerInfo.classList.add('font');
            footerInfo.setAttribute('id', 'footerInfo');

            let footerTitle = document.createElement('p');
                footerTitle.innerText = 'Right Way English Test Site!';

            let footerTxt = document.createElement('p');
                footerTxt.innerText = 'This is online English learning platform. You can find here original lexical and grammar exercises as well as exercises on the use of linguistic functions and means useful for the eighth-grade exam, matura exam, as well as competitions and olympics.';

        let newsletter = document.createElement('div');
            newsletter.classList.add('font');
            newsletter.classList.add('flex');
            newsletter.classList.add('centerHorizontal');
            newsletter.classList.add('centerVertical');
            newsletter.classList.add('wrap');
            newsletter.classList.add('verticalToLeft');
            newsletter.classList.add('marginNewsletter');

            let newsletterTxt = document.createElement('p');
                newsletterTxt.innerText = 'Zapisz się do naszego newslettera';

            let newsletterInput = document.createElement('input');
                newsletterInput.classList.add('width50');
                newsletterInput.setAttribute('id', 'saveToNews');
                newsletterInput.setAttribute('type', 'email');
                newsletterInput.setAttribute('placeholder', 'Your e-mail');

            let newsletterButton = document.createElement('button');
                newsletterButton.setAttribute('id', 'submitNews');
                newsletterButton.innerText = 'Sign In';

footerDiv.append(footerInfo);
    footerInfo.append(footerTitle);
    footerInfo.append(footerTxt);
footerDiv.append(newsletter);    
    newsletter.append(newsletterTxt);
    newsletter.append(newsletterInput);
    newsletter.append(newsletterButton);

}
