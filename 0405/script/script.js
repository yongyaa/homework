const btn = document.querySelector('#btn')
console.log(btn)
// function(){} =화살표 함수 변경=> ()=>{}
btn.addEventListener('click',()=>{
    fun1(20,6)
}) // 이벤트만족 시 실행함수
fun1(200,2) // 함수호출 자동실행
function fun1(n,m){ // 함수생성
    console.log(n+m)
}
console.log('------------------------------')
function re1(){
    console.log(1)
}
function re2(){
    return 1 // 수정 혹은 필요시 마다 return을 통하여 원하는 값을 불러올수있다(함수를 또다시 생성하지 않아도된다.)
}
re1()
console.log(re2())
window.write(re2())

function fun(a,b){
    return a+b
}
console.log(fun(10,20))
console.log('-----------------')
function japangi(drink){
    return drink
}
let data = japangi('콜라')+'출력'
console.log(data)