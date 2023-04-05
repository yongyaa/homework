let study = ['html', 'css','js','jq','sass','git']
let device = ['desktop','tablet','mobile','tv']
let weather = ['맑음','비','눈','흐림','태풍']
let num = 0
console.log(study,device,weather)//6,4,5
//-------------------배열속성 및 메서드()
console.log(Array.isArray(study))//true
console.log(Array.isArray(device))//true
console.log(Array.isArray(weather))//true
console.log(Array.isArray(num))//false
//------------------------------
// console.log(study.pop())
// console.log(study)
// console.log(study.pop())//배열의 마지막 인덱스를 제거하고 이 값을 리턴합니다.원본에 반영한다
// console.log(study)
console.log(study.shift())//배열의 첫번째 인덱스를 제거하고 이 값을 리턴합니다.원본 배열이 변경됩니다.
console.log(study)
study .unshift('html5')
console.log(study)
study.pop()
console.log(study)
study.push('github')
console.log(study)
study.concat(device)// 배열에 변수 및 배열 값을 결합시킵니다.
console.log(study.concat(device))//1회성이라 원본에 반영을 하지 않는다 ex)쇼핑몰 비회원임시로그인
console.log(device.concat(study))
console .log('----------------------------')
study.reverse(device)//배열의 순서를 반전합니다.
console.log(study)//원본 배열이 변경됩니다.
device.sort()
console.log(device)
console.log(weather.slice(0,2))
console.log(weather.slice(1,3))//내가 원하는걸 골라서 가져올수있다 (index기준)
console.log(weather.slice(0,-1))//-5 -4 -3 -2 -1 순서 임으로 -5 -4 -3 -2  '맑음','비','눈','흐림'
console.log(weather.slice(2)) // 종료 INDEX를 적지않으면 모두 나온다. 종료 index를 적지않으면 눈부터 끝까지 다 
console.log(weather.slice(-1))// 갯수가 많아서 뒤에서 부터 셀 때 -1 (갯수를 다 세기 힘들때)
//weather.splice(0,2)
weather.splice(0,2,'sunny')//지워진 맑음 대신에 추가 문자열 'sunny' 단순히 지우는 것 뿐만 아니라 추가도 가능 
//두개 지운다고 두번 입력x
console.log(weather)
console.log('---------------------------------')
let yoil = ['월','화','수','목','금','토','일']
yoil.push('')
console.log(yoil.join('요일/'))
// 