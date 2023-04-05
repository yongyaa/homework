const re = document.querySelector('#result')
const re1 = document.querySelector('#result1')
const re2 = document.querySelector('#result2')
const btn = document.querySelector('#answer_btn')

console.log(re,re1,re2,btn)

btn.addEventListener("click",function(){
    // console.log(this) // 버튼 동작확인
    // console.log(re1.value,re2.value) // 추적값 확인
    // console.log(re1+re2) //더하기 결과확인 (오류)
    //문자+문자=문자 ex) 1+1=11
    // console.log(typeof re1.value,typeof re2.value) //타입확인
    let num1 = Number(re1.value) 
    let num2 = Number(re2.value)
    let total = num1 + num2
    re.value = `${total.toLocaleString('ko-kr')}원 거렁뱅이 쉑 ㅋㅋ`
})