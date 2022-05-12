const logIn = function(e){
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