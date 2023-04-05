// 출금하기 버튼클릭
// 3자리 간격 콤마 ?00,00원 출금되었습니다.
// (선택) 남은 잔액 ????원 남았습니다.
const order = document.querySelector('.order')
const result = document.querySelector('#result')
let my = 10000000
console.log(order,result,my)
function money(){
    let num1 = Number(window.prompt('얼마 출금하시겠습니까?'))
    let num1_type = num1.toLocaleString('ko-kr')
    result.innerHTML = `${num1.toLocaleString('ko-kr')}원 출금되었습니다.`
    let bank_total = my - num1
    result.innerHTML += ` 남은 잔액은 ${bank_total.toLocaleString('ko-kr')}원 입니다` // result.innerHTML앞에 +는 복합대입의 기능이다. 쓰는일이 많으므로 알아둘것
}
order.addEventListener('click',money)