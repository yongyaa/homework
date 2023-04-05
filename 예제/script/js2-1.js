const re = document.querySelector('#result')
const re1 = document.querySelector('#result1')
const re2 = document.querySelector('#result2')
const btn = document.querySelector('#answer_btn')

btn.addEventListener("click",function(){
    let number_type = Number(re.value)
    console.log(this)
    re1.value = typeof number_type
    re2.value = re.value
})