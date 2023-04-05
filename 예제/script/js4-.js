// 아메리카노 1잔 가격 4700원
const order = document.querySelector('#order')
const number = document.querySelector('#number')
const re = document.querySelector('#result')
const reset = document.querySelector('#reset')
const price = 4700 //고정가격
let num = 0 //변경 수량 변수(초기값0)
let total = 0 //변경 최종가격 변수(초기값0)
console.log(order,number,re,reset,price,num,total)

function add(){
    num++
    total = price * num
    number.innerHTML = num
    result.innerHTML = total.toLocaleString('ko-kr')
}
function rese(){
    num=0
    total=0
    number.innerHTML = num
    result.innerHTML = total
}
order.addEventListener('click',add)
reset.addEventListener('click',rese)