window.addEventListener('load', function() {

    const emailAuth = document.getElementById('email');
    const passwordAuth = document.getElementById('password');
    const signUpBtn = document.getElementById('sign-up');
    const logInBtn = document.getElementById('log-in');
    const logOutBtn = document.getElementById('log-out');


    signUpBtn.addEventListener('click', e => {
        const email = emailAuth.value;
        const password = passwordAuth.value;
        const auth = firebase.auth();
        const promise = auth.createUserWithEmailAndPassword(email, password);
        promise.catch(e => console.log(e.message));
    });

    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            console.log(user);
        } else {
            console.log('no user');
        }
    })

    logInBtn.addEventListener('click', e => {
        const email = emailAuth.value;
        const password = passwordAuth.value;
        const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(email, password);
        promise.catch(e => console.log(e.message));
    });

    logOutBtn.addEventListener('click', e => {
        firebase.auth().signOut();
    });
});