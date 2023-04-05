const re1 = document.querySelector('#result1')
const re2 = document.querySelector('#result2')
const btn = document.querySelector('#answer_btn')
// 1.btn을 클릭했을때
btn.addEventListener('click',function(){
    // 2.prompt 값 입력(인증번호)
    let num = window.prompt('인증번호를 입력해주세요.')
    // 3.2번 값의 데이터 타입이 result1 출력
    re1.value = typeof num
    // 4.2번 값의 데이터 결과가 result2 출력 
    re2.value = num
})

console.log(btn,re2,re1)