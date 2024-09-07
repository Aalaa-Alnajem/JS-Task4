var enterEmailSign = document.getElementById('enterEmailSign');
var enterPasswordSign = document.getElementById('enterPasswordSign');
var errorSign = document.getElementById('errorSign');
var login = document.getElementById('login');
var enterNameSign = document.getElementById('enterNameSign');
var loginPage = document.getElementById('loginPage');
var signPage = document.getElementById('signPage');
var enterEmailLogin = document.getElementById('enterEmailLogin');
var enterPasswordLogin = document.getElementById('enterPasswordLogin');
var errorLogin = document.getElementById('errorLogin');
var username = document.getElementById('username');
var acountList = [];


if(JSON.parse(localStorage.getItem('acountsList')) != null){
    acountList = JSON.parse(localStorage.getItem('acountsList'))
}

// If Input is Empty:
function isEmpty(){
    if (enterNameSign.value == "" || enterEmailSign.value == "" || enterPasswordSign.value == "") {
        return false
    } else {
        return true
    }
}
// To generate Account:
function generateAccount(){
    
    var userAccount = {
        userName: enterNameSign.Value,
        email: enterEmailSign.value,
        userPassword: enterPasswordSign.value,
    };
    acountList.push(userAccount);
    localStorage.setItem('acountsList', JSON.stringify(acountList));
}

// To Chick Input is exists or not:
function chickInput(){
    if (isEmpty() == false) {
        errorSign.innerHTML = '<span>All inputs is required</span>'
        return false;
    }
    if (acountList.length == 0) {
        
        errorSign.innerHTML = '<span class="text-success m-3">Success</span>'
        generateAccount()
        window.location.href = './sign.html'
    }else{
        let CheckExcist = acountList.filter(userAccount =>  userAccount.email == enterEmailSign.value)
        if(CheckExcist.length == 0 ){
            generateAccount()
            window.location.href = './sign.html'
        }else{
            errorSign.innerHTML = '<span>email already exists</span>'
        }
    }
}

// If Input is Empty:
function isLoginEmpty(){
    if (enterEmailLogin.value == "" || enterPasswordLogin.value == "") {
        return false
    } else {
        return true
    }
}

// 
function enterHome(){
    if (isLoginEmpty() == false) {
        errorLogin.innerHTML = '<span>All inputs is required</span>'
        return false;
    }
    if(acountList.length == 0){
        window.location.href = './index.html'
    }else{
        let CheckCorrect = acountList.filter(names => {
        return names.email == enterEmailLogin.value && names.password == enterPasswordLogin.value 
        } )
        if(CheckCorrect.length > 0){
            localStorage.setItem('userAccount', JSON.stringify(CheckCorrect))
            window.location.href = './home.html'
        }else{
            errorLogin.innerHTML = '<span class="p-2 text-danger">Incorrect email or password</span>'
        }
    }
} 
    if(window.location.href == './home.html'){
            username.innerHTML = "Welcome " + enterNameSign.value;
    }