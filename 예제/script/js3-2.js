// 월-맑음
// 화-맑음
// 수-비
// 목-비
// 금-맑음
// 토-흐림
// 일-눈
let when = ['월','화','수','목','금','토','일']
let wea = ['맑음','비','흐림','눈']
const re = document.querySelectorAll('.result')
const btn = document.querySelector('#answer_btn')
btn.addEventListener('click',function(){
    re[0].innerHTML = `${when[0]}-${wea[0]}`
    re[1].innerHTML = `${when[1]}-${wea[0]}`
    re[2].innerHTML = `${when[2]}-${wea[1]}`
    re[3].innerHTML = `${when[3]}-${wea[1]}`
    re[4].innerHTML = `${when[4]}-${wea[0]}`
    re[5].innerHTML = `${when[5]}-${wea[2]}`
    re[6].innerHTML = `${when[6]}-${wea[3]}`
})
console.log(when,wea[1])
console.log(re[1])