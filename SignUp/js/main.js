var userNameInput=document.getElementById('userNameInput')
var userEmailInput=document.getElementById('userEmailInput')
var userPasswordInput=document.getElementById('userPasswordInput')
var alertPass=document.getElementById('alertPass')
var alertEmail=document.getElementById('alertEmail')
var alertName=document.getElementById('alertName')
var mainDiv=document.querySelector('.mainDiv')
var allINputs=document.querySelectorAll('.form-control')
 var inputsSignUp=[];

  
if (localStorage.getItem('userInputs')!=null) {
  inputsSignUp=JSON.parse(localStorage.getItem('userInputs'))
  
}else{
  inputsSignUp=[];  
}






 function signUpBtn11(){
   if (userNameInput.value == '' || userEmailInput.value == '' || userPasswordInput.value == '') {
    document.getElementById('message').innerHTML=`Please Fill All Required Fields`
   } 
   else{
    var input={
      name:userNameInput.value,
      email:userEmailInput.value,
      password:userPasswordInput.value,
      }
      inputsSignUp.push(input);
      localStorage.setItem('userInputs',JSON.stringify(inputsSignUp))
      location.href = '../index.html'
   }
  
}

  function validate(regex,inputOfRegex,alert){
    
    if (regex.test(inputOfRegex.value)) {
      inputOfRegex.classList.add("is-valid")
      inputOfRegex.classList.remove("is-invalid")
      signUpBtn.removeAttribute('disabled')
      alert.classList.add("d-none")
    mainDiv.classList.replace(  "h-120", "h-75")
    


  return true;
    }else{
      signUpBtn.disabled='true';
      inputOfRegex.classList.add("is-invalid")
      inputOfRegex.classList.remove("is-valid")
      alert.classList.remove("d-none")
    mainDiv.classList.replace("h-75","h-120")
      return false;
    }
    }
   





userNameInput.addEventListener('keyup',function(){
  validate(/^[A-Za-z]{3,8}(\s?[A-Za-z]{3,8})?$/,userNameInput,alertName)

})
userEmailInput.addEventListener('keyup',function(){
  validate(/^[a-zA-Z0-9.!#$%&'*+\=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,userEmailInput,alertEmail)

})
userPasswordInput.addEventListener('keyup',function(){
  validate(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,userPasswordInput,alertPass)

})