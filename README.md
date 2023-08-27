# algorithm

## Lv0
- 1. 몫구하기
- 2. 숫자비교하기
- 3. 두 수의 나눗셈
- 4. 배열 두배 만들기
- 5. 배열의 평균값
- 6. 배열 자르기
- 7. 피자나눠먹기
- 8. 머쓱이 보다 큰 사람
- 9. 점 위치 구하기
### 1. 몫구하기
- 문제 설명
  - 정수 num1, num2가 매개변수로 주어질 때, num1을 num2로 나눈 몫을 return 하도록 solution 함수를 완성해주세요.

- 제한사항
  - 0 < num1 ≤ 100
  - 0 < num2 ≤ 100

- 입출력 예

num1 | num2 | result
---|:---:|---:
10 | 5 | 2
7 | 2 | 3

- 정답
```javascript
function solution(num1, num2) {
    var answer = ~~(num1 / num2);
    return answer;
}
```

### 2. 숫자비교하기

- 문제 설명
  - 정수 num1과 num2가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요.

- 제한사항
  - 0 ≤ num1 ≤ 10,000
  - 0 ≤ num2 ≤ 10,000

- 입출력 예

num1 | num2 | result
---|:---:|---:
2 | 3 | -1 
11 | 11 | 1
7 | 99 | -1

- 정답
```javascript
function solution(num1, num2) {
    return num1 === num2 ? 1:-1 ;
}
```
### 3. 두 수의 나눗셈

- 문제 설명
  - 정수 num1과 num2가 매개변수로 주어질 때, num1을 num2로 나눈 값에 1,000을 곱한 후 정수 부분을 return 하도록 soltuion 함수를 완성해주세요.

- 제한사항
  - 0 < num1 ≤ 100
  - 0 < num2 ≤ 100

- 입출력 예

num1 | num2 | result
---|:---:|---:
3 | 2 | 1500
7 | 3 | 2333
1 | 16 | 62

- 정답
```javascript
function solution1(num1, num2) {
    var answer = ~~((num1 / num2) *1000);
    return answer;
}

function solution2(num1, num2) {
    var answer = Math.turnc(num1 / num2 * 1000);
    return answer;
}
```

### 4. 배열 두배 만들기

- 문제 설명
  -정수 배열 numbers가 매개변수로 주어집니다. numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.

- 제한사항
  - -10,000 ≤ numbers의 원소 ≤ 10,000
  - 1 ≤ numbers의 길이 ≤ 1,000

- 입출력 예

 number | result
---:|---:
[1, 2, 3, 4, 5] |	[2, 4, 6, 8, 10]
[1, 2, 100, -99, 1, 2, 3] |	[2, 4, 200, -198, 2, 4, 6]

- 정답
```javascript
function solution(numbers) {
        var answer = [];
    for(let i=0; i <numbers.length; i++){
        const number2 = numbers[i]*2;
        answer.push(number2);
    }
    return answer;
}

//배열 값을 다 구하고,
//*2를 해서
//다시 배열에 넣는다
```
### 5. 배열의 평균 값

- 문제 설명
  - 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.

- 제한사항
  - 0 ≤ numbers의 원소 ≤ 1,000
  - 1 ≤ numbers의 길이 ≤ 100
  - 정답의 소수 부분이 .0 또는 .5인 경우만 입력으로 주어집니다.

- 입출력 예

 number | result
---:|---:
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]	| 5.5
[89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99] | 94.0

- 정답
``````javascript
function solution(numbers) {
    var answer = 0;
    if (numbers.length === 0) {
        return 0; // 빈 배열이면 평균값이 0입니다.
    }

    const sum = numbers.reduce((a, b) => a + b, 0);
    answer = sum / numbers.length;
    return answer;
}
``````

### 6. 배열 자르기

- 문제 설명
  - 정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때, numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return 하도록 solution 함수를 완성해보세요.

- 제한사항
  - 2 ≤ numbers의 길이 ≤ 30
  - 0 ≤ numbers의 원소 ≤ 1,000
  - 0 ≤num1 < num2 < numbers의 길이

- 입출력 예

numbers |	num1 | num2 | result
---:|---:|---:|---:
[1, 2, 3, 4, 5] |	1 |	3 |	[2, 3, 4]
[1, 3, 5]	| 1 |	2 |	[3, 5]

- 정답
``````javascript
function solution(numbers, num1, num2) {
    var answer = numbers.slice(num1, num2 + 1);

    return answer;
}

function solution(numbers, num1, num2) {
    var answer = [];

    for (let i = num1; i < num2+1; i++) {
        answer.push(numbers[i])
    }

    return answer;
}
``````

### 7. 피자나눠먹기

- 문제 설명
  - 머쓱이네 피자가게는 피자를 일곱 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 주어질 때, 모든 사람이 피자를 한 조각 이상 먹기 위해 필요한 피자의 수를 return 하는 solution 함수를 완성해보세요.

- 제한사항
  - 1 ≤ n ≤ 100

- 입출력 예

n	| result
---:|---:
7 |	1
1 |	1
15 | 3

- 정답
``````javascript

function solution(n) {
    var answer = 0;
    const pizzaSlice = n /7;
    answer = Math.ceil(pizzaSlice);
    return answer;
}

``````

### 8. 머쓱이 보다 큰 사람

- 문제 설명
  - 머쓱이는 학교에서 키 순으로 줄을 설 때 몇 번째로 서야 하는지 궁금해졌습니다. 머쓱이네 반 친구들의 키가 담긴 정수 배열 array와 머쓱이의 키 height가 매개변수로 주어질 때, 머쓱이보다 키 큰 사람 수를 return 하도록 solution 함수를 완성해보세요.

- 제한사항
  - 1 ≤ array의 길이 ≤ 100
  - 1 ≤ height ≤ 200
  - 1 ≤ array의 원소 ≤ 200

- 입출력 예

array |	height | result
---:|---:|---:
[149, 180, 192, 170] | 167 | 3
[180, 120, 140] | 190 | 0

- 정답
``````javascript
function solution(array, height) {
    let count = 0;
    var answer = 0;
    array.sort((a,b) => a- b);
    array.map(el => height < el ? count++ : count);
              answer = count;
    return answer;
}

function solution(array, height) {
    var answer = 0;
    for(let i=0; i<array.length; i++){
        if(height < array[i]){
            answer++
        }
    }
    return answer;
}
``````

### 9. 점 위치 구하기

- 문제 설명
  - 사분면은 한 평면을 x축과 y축을 기준으로 나눈 네 부분입니다. 사분면은 아래와 같이 1부터 4까지 번호를매깁니다.
  - <img src='https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/b58d4788-42fa-44fa-af50-481907e65473/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-07-07%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%203.27.04%20%E1%84%87%E1%85%A9%E1%86%A8%E1%84%89%E1%85%A1%E1%84%87%E1%85%A9%E1%86%AB.png' alt='문제이미지' width='400'>

  - x 좌표와 y 좌표가 모두 양수이면 제1사분면에 속합니다.
  - x 좌표가 음수, y 좌표가 양수이면 제2사분면에 속합니다.
  - x 좌표와 y 좌표가 모두 음수이면 제3사분면에 속합니다.
  - x 좌표가 양수, y 좌표가 음수이면 제4사분면에 속합니다.
  - x 좌표 (x, y)를 차례대로 담은 정수 배열 dot이 매개변수로 주어집니다. 좌표 dot이 사분면 중 어디에 속하는지 1, 2, 3, 4 중 하나를 return 하도록 solution 함수를 완성해주세요.

- 제한사항
  - dot의 길이 = 2
  - dot[0]은 x좌표를, dot[1]은 y좌표를 나타냅니다
  - -500 ≤ dot의 원소 ≤ 500
  - dot의 원소는 0이 아닙니다.

- 입출력 예
dot |	result
---:---:
[2, 4] | 1
[-7, 9]	| 2

- 정답
``````javascript
function solution(dot) {
    const [num,num2] = dot;
    const check = num * num2 > 0;
    return num > 0 ? (check ? 1 : 4) : (check ? 3 : 2);
}
``````