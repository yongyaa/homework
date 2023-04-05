// answer_btn 
// answer_input
//day1 
//day2
//day3
//total

let day1 = 10
let day2 = 5
let day3 = 8
let total = day1+day2+day3
const answer_btn = document.querySelector('#answer_btn')
const answer_input = document.querySelector('#result')
console.log(total,answer_btn,answer_input)
answer_input.value = `결과는 ${total}장입니다.`//템플릿 문자열  // input에서 23을 보이기 위해선 value를 사용하기 때문에 innerHTML이 아닌 속성value를 이용해서 넣는다.

// 요소.addEventListener(이벤트종류, 함수실행 및 호출);
answer_btn.addEventListener('click',function(){ 
    //이벤트 조건 만족 시 실행 결과
    console.log(this)
    answer_input.value = `정답은 ${total}장입니다.`
})

