let money1 = 10000
let money2 = 1000
let total = money1+money2
const btn = document.querySelector('#answer_btn')
const result = document.querySelector('#result')
console.log(total, btn, result)

result.value = `결과는 ${total}입니다.`
btn.addEventListener('click',function(){ 
    console.log(this)//<== 결과값이 맞는지 내가 출력한 값을 콘솔창에 확인해준다
    result.value = `정답은 ${total}원입니다.`
})