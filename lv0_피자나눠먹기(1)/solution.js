// 문제 설명
// 머쓱이네 피자가게는 피자를 일곱 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 주어질 때, 모든 사람이 피자를 한 조각 이상 먹기 위해 필요한 피자의 수를 return 하는 solution 함수를 완성해보세요.

// 제한사항
// 1 ≤ n ≤ 100
// 입출력 예
// n	result
// 7	1
// 1	1
// 15	3

function solution(n) {
    var answer = 0;
    const pizzaSlice = n /7;
    answer = Math.ceil(pizzaSlice);
    return answer;
}

// 7명 이하는 1
// 7명 이상 14명 이하는 2
// 14명 이상 21명 이하는 3
//...