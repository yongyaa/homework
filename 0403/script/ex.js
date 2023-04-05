const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')
const result = document.querySelector('#result')
console.log(btn1,btn2,btn3,result)
let qa = window.confirm('let과 const의 차이점을 서술하시오.')
btn1.addEventListener('click',function(){
    console.log(this) // this는 현재의 대상을 뜻한다.
    result.innerHTML = `let은 값이 변하는 변수,<br> const는 값이 변하지 않는 상수이다.`
})
btn2.addEventListener('click',function(){
    qa = window.confirm('변수와 배열의 차이점을 서술하시오')
    result.innerHTML = `세상에는 정답이란것이 없습니다.`
})
// 증감연산자의 전위연산, 후위연산의 차이점을 서술하시오.
btn3.addEventListener('click',function(){
    qa = window.prompt('증감연산자의 전위연산, 후위연산의 차이점을 서술하시오.')
    result.innerHTML = `변수의 값을 1씩 증가 또는 감소하는 증감 `
})