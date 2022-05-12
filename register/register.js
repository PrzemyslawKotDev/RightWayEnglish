const register = function(e){
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