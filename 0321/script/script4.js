const more = document.getElementsByClassName('more')
const img = document.getElementsByTagName('img')
const plus = document.getElementsByClassName('plus')
const join_btn = document.getElementById('join_btn')
const li = document.getElementsByTagName('li')
console.log(more)
console.log(img)
console.log(plus)
console.log(join_btn)
console.log(li)

// ------------------------style속성
// 객체.속성
// style == css
// 속성종류 => css에 있는 속성들
// 객체.style.속성 =(대입) 값
more[0].style.color = 'red'
li[0].style.backgroundColor = '#123'
li[1].style.backgroundColor = '#456'
li[2].style.backgroundColor = '#789'
li[3].style.backgroundColor = '#456'
li[4].style.backgroundColor = '#123'
li[0].style.fontSize = '3rem'