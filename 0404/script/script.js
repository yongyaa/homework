//배열,객체
//배열 : 2개 이상의 값 저장소
//객체 : 2개 이상의 속성:값 저장소
//배열 vs 객체 : 값에 대한 속성의 유무
//객체는 값의 의미있는 속성명이 함께 지정되기 떄문에 의미있는 지정을 대상을 쉽게 구분가능하다
//의미있는 지정으로 대상을 쉽게 구분가능하다.
let num = new Array(5,4,3) //빈값으로 시작
console.log(num)
num[4] = 1
//비어있는값은 empty로 표시된다
console.log(num)
//vs
let num2 = [1,2,3,4,5,6,7,8,9] //값이 적용되어 시작
num2[20] = 'last'
console.log(num2)
//------------------------------------------------객체
console.log('-------------------객체')
let study = {
    subject: ['html', 'css','js','jq','sass','git','photoshop','ill'],
    name: '홍길동',
    age:20,
    area:'인천',
    goals:'풀스택',
    birth:'1990-04-05'//날짜는 문자열

}
console.log(study)
console.log(study.subject)
console.log(study.subject[2])
console.log(study.subject[6])
console.log(study.age)
study.age++
//내일 홍길동은 21살이 됩니다! 생일축하해주세요!
console.log(`내일 ${study.name}은 ${study.age}가 됩니다! 축하해주세요!`)
//홍길동의 시험점수는 html+css 70점 , js 60점입니다.
console.log(`${study.name}의 시험점수는 ${study.subject[0]} + ${study.subject[1]} 70점, ${study.subject[2]} 60점입니다`)