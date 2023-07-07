const submitCard = document.getElementById("confirm")
submitCard.addEventListener('submit', execute)

const userName = document.getElementById("cardHolder")
userName.addEventListener('input',checkname)
const userCardNumber= document.getElementById("cardNumber")
const cardMonth = document.getElementById("month")
const cardYear=document.getElementById("year")
const cardCode = document.getElementById("cvc")
let cardDisplay =document.getElementById("cardUpdate").addEventListener('Input', display)
cardDisplay.innerText= currentCardName;
let currentCardName = userName.value;
let currentCardNumber = userCardNumber.value;
let currentMonth = cardMonth.value;
let currentYear = cardYear.value;
let currentCvc = cardCode.value;
let errorMessage =document.getElementById("errorText")



// function execute(e){
//     e.preventDefault();
//     if(currentCardName===" "){
//         return errorMessage;
//     }else{
//         return currentCardName;
      
//     } 
// }

function checkname(){
    if(currentCardName===" "){
                return errorMessage;
            }
            else{
                return currentCardName;
}
}