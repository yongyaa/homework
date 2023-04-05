function fun1(a){// 매개변수 a 생성
    console.log(a) // 3. 값이 대입된 매개변수를 전달 후 출력
}
fun1(10) // 2. a매개변수에 10값 대입
console.log('------------------------------')
function japangi(a){
    console.log(a + '가 나왔다.')
}
japangi('사이다')
japangi('콜라')
console.log('------------------------------')
function fun2(a,b){
    // 두 자리 더하기 계산기
    console.log(a+b)
}
fun2(10,20)
fun2(15,37)
console.log('------------------------------')
//콜라 2개 출력
// 사이다 1개 출력
// 커피 10개 출력
function japangi2(drink, num){
    console.log(`${drink} ${num}개`)
}
japangi2('맥콜',2)
japangi2('사이다',1)
japangi2('커피',10)
console.log('------------------------------------')
const re = document.querySelector('#result')
function dan99(num){
    re.innerHTML += `${num}X1= ${num*1}<br>`
    re.innerHTML += `${num}X2= ${num*2}<br>`
    re.innerHTML += `${num}X3= ${num*3}<br>`
    re.innerHTML += `${num}X4= ${num*4}<br>`
    re.innerHTML += `${num}X5= ${num*5}<br>`
    re.innerHTML += `${num}X6= ${num*6}<br>`
    re.innerHTML += `${num}X7= ${num*7}<br>`
    re.innerHTML += `${num}X8= ${num*8}<br>`
    re.innerHTML += `${num}X9= ${num*9}<br>`
}
dan99(2)
dan99(3)
dan99(4)
dan99(5)
dan99(6)
dan99(7)
dan99(8)
dan99(9)

console.log('카트라이더 하고싶당')
console.log('----------------------------------')
const cat = {
    name:'cookie',
    birthday:'12.25',
    birth:function(){
        return `${cat.name}ya ${cat.birthday}일 생일 축하해!`
    }
}
console.log(cat)
console.log(cat.birth())