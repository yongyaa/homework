// const user = document.querySelectorAll('.box input') // 모든 input을 지정
// console.log(user)
// input 마우스 커서를 올렸을 때 == focus
// 이벤트 내에 function은 this대상을 DOM 이벤트 객체로 인식하고
// 화살표 함수는 this를 js 전역객체대상으로 인식하기 때문에
// 정확하게 대상을 구분해서 작성해야 한다.
// user[0].addEventListener('focus',function(){bg(this)})
// user[1].addEventListener('focus',function(){bg(this)})
// user[2].addEventListener('focus',function(){bg(this)})
// 함수
// function bg(target){
//     bgno()
//     return target.style.backgroundColor = '#ff0'
// }
// function bgno(){
//     user[0].style.background = 'none'
//     user[1].style.background = 'none'
//     user[2].style.background = 'none'
// }
// 배경색 바꾸는 문법: 객체.style.backgroundColor = '#ff0'
// 매번 달라지는 값은 매개변수로 지정한다.
// --------------------------------------------------------
const like = document.querySelector('.like img')
console.log(like)
const coin = document.querySelector('.coin img')
console.log(coin)
// 객체.src = '값'
like.addEventListener('mouseover',()=>{like_on(like,'heart')})
like.addEventListener('mouseout',()=>{like_off(like,'heart')})
coin.addEventListener('mouseover',()=>{like_on(coin,'2')})
coin.addEventListener('mouseout',()=>{like_off(coin,'1')})
function like_on(on,name){
    return on.src = `../images/${name}_on.png`
}
function like_off(off,name){
    return off.src = `../images/${name}_off.png`
}
// 객체.src = '../images/heart_on.png'

