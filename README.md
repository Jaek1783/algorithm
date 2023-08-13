# algorithm

## Lv0
- 1. 몫구하기

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
