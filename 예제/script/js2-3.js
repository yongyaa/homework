const re = document.querySelector('#result')
const re1 = document.querySelector('#result1')
const re2 = document.querySelector('#result2')
const btn = document.querySelector('#answer_btn')

btn.addEventListener('click',function(){
    let num = Number(window.prompt('입금액을 입력하세요'))
    re1.value = num.toLocaleString('ko-kr')
    re2.value = 100
    let result = num + 100
    re.value = result.toLocaleString('ko-kr')

})