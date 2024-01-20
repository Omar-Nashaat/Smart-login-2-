var displayName = document.querySelector('#displayName');
var logOutBtn = document.querySelector('#logOutBtn');


if (localStorage.getItem('username') != null){
    var userName = `${localStorage.getItem('username')}`
    displayName.innerHTML = 'Welcome '+ userName.substring(0, userName.indexOf('@'));
}

function logOut(){
    window.location.href = 'index.html';
    localStorage.removeItem('username');
}

logOutBtn.addEventListener('click',logOut);