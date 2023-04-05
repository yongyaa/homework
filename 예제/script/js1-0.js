// const h1 = document.getElementsByTagName('h1')[0]
// const sub_title = document.getElementsByClassName('sub_title')
// const h3 = document.getElementsByTagName('h3')[0]
// const p = document.getElementsByTagName('p')[0]
// const main = document.getElementById('main')
// const btn = document.getElementById('btn')
// const link = document.getElementById('link')
//출력----------------------
// console.log(h1)
// console.log(sub_title[0],sub_title[1])
// console.log(h3)
// console.log(p)
// console.log(main)
// console.log(btn)
// console.log(link)
const box_h4 = document.querySelector('.box h4')//가장 가까운 부모 기준으로 구분용으로 작성한다 (꺽새표시로 자식만 구분하는것도 가능하다)
const h1_tag = document.querySelector('h1')
const h1_after = document.querySelector('h1::after')
console.log(h1_after, box_h4)
//객체.style.css속성 = '속성값'
h1_tag.style.backgroundColor = '#ff0'
const h2_cls = document.querySelectorAll('.sub_title')//all을 붙히지 않고 그냥 쓰면 하나만 선택된다
const h3_tag = document.querySelector('h3')
const p_tag = document.querySelector('p')
const main_id = document.querySelector('#main')
const btn_id = document.querySelector('#btn')
const link_id = document.querySelector('#link')
console.log(h1_tag)//변수 값 확인
console.log(h2_cls[1])//
console.log(h3_tag)
console.log(p_tag)
console.log(main_id)
console.log(btn_id)
console.log(link_id)
