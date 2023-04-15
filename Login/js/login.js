
var loginEmail=document.getElementById('loginEmail')
var loginPassword =document.getElementById('loginPassword') 
var inputsSignUp=[];
 inputsSignUp = JSON.parse(localStorage.getItem('userInputs'))














document.getElementById('login').addEventListener('click',function () {
    if(loginEmail.value == '' || loginPassword.value == ''){
            document.getElementById('message').innerHTML=`Please Fill All Required Fields`
          }else{
            signIn()
          }
        }
)





function signIn(){
for (var i = 0; i < inputsSignUp.length; i++) {
  if (loginEmail.value == inputsSignUp[i].email && loginPassword.value ==inputsSignUp[i].password) {
    var y= inputsSignUp[i].name;
   localStorage.setItem('UserName',y)
   location.href='./Home/home.html'
   break;
  }
}
}
 