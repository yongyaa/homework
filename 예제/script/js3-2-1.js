// 날씨 맑음
// 강수 20%
// 바람 3.4m/s
// 습도 15%
const btn = document.querySelectorAll('.btn')
const re = document.querySelector('#result')
const wea = {
    a:['맑음','흐림','비','눈'],
    b:['10%','20%'],
    c:[3.4],
    d:[15]
}
btn[0].addEventListener('click',function(){
    result.innerHTML = `${wea.a[0]}`
})
btn[1].addEventListener('click',function(){
    result.innerHTML = `${wea.b[1]}`
})
btn[2].addEventListener('click',function(){
    result.innerHTML = `${wea.c}m/s`
})
btn[3].addEventListener('click',function(){
    result.innerHTML = `${wea.d}%`
})
console.log(btn[0],re)