var box1 = 10 /* 중복 변수를 못 잡아서 실수를 범함 */
let box2 = 20 /* 중복 변수를 잡을 수 있음 */
const box3 = 30 
let box4 = 'hello javascript'
console.log(`box1 변수의 값 = ${box1}`) /* 탬플릿 문자열 */ /* 콘솔은 객체. 로그는 메소드 */
console.log(`box2 변수의 값 = ${box2}`)
console.log(`box3 상수의 값 = ${box3}`)
/* box1 = box1+1 */ /* 오른쪽부터 읽어야 한다 */
box1 += 1 /* 위의 방식을 더 쉽게 풀이하는 방식 */
box1 += 10 //box1 = box1+10
console.log(`box1 변수 값 = ${box1}`)
box2 = box2%2 /* 2를 나눈 나머지값, % 연산자를 산술연산자라고 하고 =을 대입연산자라고 한다. +=는 복합대입연산자 */
console.log(`box2 변수 값 = ${box2}`)
box2 = box1++ /* box3은 상수이므로 바꿀 수 없다. 변하지 않는 값을 변하게 하려 해서 오류가 뜸 */ /* ++는 증감연산자 증감연산자가 앞에 있으면 전위 연산자, 뒤에 있으면 후위연산자 */
console.log(`box2 변수 값 = ${box2}`)
console.log(`box2=${box2}, box1=${box1}`) /* 후위연산자를 쓴 box1은 21, box2는 22 box1의 값을 먼저 box2에 대입하고 ++ 값을 나중에 대입한 것 */
box1 = box3
console.log(`box1=${box1}, box3=${box3}`) /* 변화를 주려고 한 게 아니기 때문에 상수라도 오류 안 뜸 */
console.log(box4.length)
//------------------------
let array1 = ['aqua' , `lime` , 'yellow']
let array2 = new Array('black', 'white' , 'gray') /* 위와 같은 결과값 */
let array3 = new Array(10)
console.log(array1)
console.log(array1[0], array1[1], array1[2])
console.log(array2)
console.log(array3)
array3[9] = 'black' /* 10번째 자리에 black을 넣고 싶을 때, 변수가 선언될 때에만 소괄호가 붙음, Array가 메소드이기 때문 */
console.log(array3)
//-----------------------------------
let array4 = [10,20,30,40,50]
console.log(array4)
console.log(array4[0]+1) //101이 아니라 11이 뜸 숫자 + 숫자, 변수 값에 숫자를 기입했기 때문에, 배열에 들어간 데이터에 따라 작성한 결과값이 다르다
console.log(array4[1]%2) //0
console.log(++array4[4]) //51
console.log(array4[3]++) //40, 출력 후의 연산이기 때문에