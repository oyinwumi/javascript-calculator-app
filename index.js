
const display = document.querySelector('#display')
const resultDisplay = document.querySelector('#result-display')
const controlButtons =document.querySelector('.wrap').children
const allSymbols = ['+','-','*','/','%','c','del','=']

let firstValue = ''
let secondValue = ''
let symbol = ''
let result = ''

const calculate = () =>{
    firstValue = parseFloat(firstValue)
    secondValue = parseFloat(secondValue)
   

    if (symbol === '+') result = firstValue + secondValue
    if (symbol === '-') result = firstValue - secondValue
    if (symbol === '*') result = firstValue * secondValue
    if (symbol === '/') result = firstValue / secondValue
    if (symbol === '%') result = firstValue % secondValue

    resultDisplay.innerText = result
    firstValue = result
    secondValue = ''

}

for(let button of controlButtons){
    button.addEventListener('click',  () =>{
    const{ innerText: btnValue } = button
     const btnValueIsSymbol = allSymbols.includes(btnValue)

   

     if(btnValue === 'C'){
        firstValue =  secondValue = display.innerText  = symbol = ''
        return resultDisplay.innerText = ''
        
     }

      else if(btnValue === 'Del'){
       return display.innerText = display.innerText.slice(0, -1)
         
       }

    //   else if (btnValueIsSymbol || firstValue !== btnValue && '+' ) {
    //     return display.innerText = ''
    //  }

 
    
     if(firstValue && btnValueIsSymbol){
        secondValue && calculate()
        symbol = btnValue
     }
     else if(!symbol)firstValue += btnValue
     else if(symbol) secondValue +=btnValue

     if(btnValue !== '=')display.innerText += btnValue
        
    })
}
