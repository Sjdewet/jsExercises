// Q1
// let fullName= "Summer De Wet";
// console.log(fullName);

// Q2
// function fullName (){
//     let  firstName ="Summer";
//     let  surname ="De Wet";
//      return firstName + " " +surname
//  }
//  console.log(fullName());
//  function age (){
//      let myAge = "18";
//      return myAge
//  }
//  console.log(age());
//  function subjects(){
//      let array =["English","Mathemathics","Afrikaans"]
//      return array
//  }
//  console.log(subjects());
//  function living(){
//      let myAddress =["Southfield","Flintdale Road","South Africa"]
//      return myAddress
//  }
//  console.log(living());

// Q3

function getSum(){
    let num1 = +document.querySelector('#number1').value
    let num2 = +document.querySelector('#number2').value
    let operator = document.querySelector('#operator').value
    let display = document.querySelector('#screen')

    if(operator == '+'){
        display.textContent = num1 + num2
    } else if(operator == '-'){
        display.innerText = num1 - num2
    } else if(operator == '*'){
        display.innerText = num1 * num2
    } else if(operator == '/'){
        display.innerText = num1 / num2
    }
}

