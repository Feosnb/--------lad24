let randomNum = Math.round(Math.random()* (999999-100) + 100)
let randomNumArr = Array.from(randomNum.toString())
for (let i = 0; i <=9 ; i++) {    
let userNum = prompt(`Введите ${randomNumArr.length-1}и значное число`, 'введите число')
let userNumArr = Array.from(userNum.toString())
let wellPlacedNum = []
let wrongPlacedNum=[]
randomNumArr.forEach ((element, index) => {
    if (element===userNumArr[index]){
        wellPlacedNum.push(randomNumArr[index])} 
        else {
        if (userNumArr.indexOf(element,0)>0){
            wrongPlacedNum.push(element)
        }   
        }
    })
alert(` совпавших цифр не на своих местах - ${wrongPlacedNum.length} (${wrongPlacedNum.join(',')}) цифр на своих местах - ${wellPlacedNum.length} (${wellPlacedNum.join(',')})  попыток осталось ${9-i}`)
}
