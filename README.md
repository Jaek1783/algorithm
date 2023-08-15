# algorithm

## Lv0
- 1. 몫구하기
- 2. 숫자비교하기
- 3. 두 수의 나눗셈
- 4. 배열 두배 만들기
- 5. 배열의 평균값
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