let money1 = 10000
let money2 = 2000
let money3 = 1000
let total = money1 - (money2 + money3)
let total_replace = total.toLocaleString('ko-kr')

console.log(money1,money2,money3,total,total_replace)

const btn = document.querySelector('#answer_btn')
const result = document.querySelector('#result')
console.log(btn,result)

btn.addEventListener('click',function(){
    console.log(this)
    result.value = `${total_replace}원 입니다.`
})