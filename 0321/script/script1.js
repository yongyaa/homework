// F12 -> console 항상 실행하기
// javascript == 객체지향프로그래밍언어
// 변수 = 데이터 저장소
// var, let, const
// var vs let ==> 중복변수명 에러 구분
// const 상수 (처음의 선언된 값이 변하지 않는것이 중요)
// a.length ==> a=객체, length=속성
// a.typeof() ==> typeof()=메소드를 뜻한다(함수)
// console.log('a') ==> ''안에 들어있으면 문자를 의미한다. 콘솔창에 문자데이터 a를 표시한다.라고 해석이 가능함
// window.alert(10) ==> 숫자10을 윈도우 팝업창에 표시한다.
// console.log('안녕하세요'.lengh) ==> 문자 안녕하세요 문자 데이터의 길이를 표시한다.
let a = 10  //변수 a=10
let b = 'hello' //변수 b=문자'hello'
let c = a   //변수c는 a와 동일하다.
console.log(a.length)   //a의 문자 길이를 표시 undefined 
console.log(a+b)    //a,b출력   10hello
console.log(typeof b)   //b의 속성을 표시 string
window.alert(c) //팝업창에 c표시    10
window.alert(a+c)   //팝업창에 a+c표시  20
let d = '너무'
let e = '졸려'
window.alert(d+e)