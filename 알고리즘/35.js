// 숫자 문자열과 영단어

// 네오와 프로도가 숫자놀이를 하고 있습니다. 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.

// 다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.

// 1478 → "one4seveneight"
// 234567 → "23four5six7"
// 10203 → "1zerotwozero3"
// 이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다. s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.

// 참고로 각 숫자에 대응되는 영단어는 다음 표와 같습니다.

// 숫자	영단어
// 0	zero
// 1	one
// 2	two
// 3	three
// 4	four
// 5	five
// 6	six
// 7	seven
// 8	eight
// 9	nine
// 제한사항
// 1 ≤ s의 길이 ≤ 50
// s가 "zero" 또는 "0"으로 시작하는 경우는 주어지지 않습니다.
// return 값이 1 이상 2,000,000,000 이하의 정수가 되는 올바른 입력만 s로 주어집니다.
// 입출력 예
// s	result
// "one4seveneight"	1478
// "23four5six7"	234567
// "2three45sixseven"	234567
// "123"	123
// 입출력 예 설명
// 입출력 예 #1

// 문제 예시와 같습니다.
// 입출력 예 #2

// 문제 예시와 같습니다.
// 입출력 예 #3

// "three"는 3, "six"는 6, "seven"은 7에 대응되기 때문에 정답은 입출력 예 #2와 같은 234567이 됩니다.
// 입출력 예 #2와 #3과 같이 같은 정답을 가리키는 문자열이 여러 가지가 나올 수 있습니다.
// 입출력 예 #4

// s에는 영단어로 바뀐 부분이 없습니다.

// 풀이 1

function solution(s) {
    var answer = '';

    s = s.replace(/zero/gi, '0')
    s = s.replace(/one/gi, '1')
    s = s.replace(/two/gi, '2')
    s = s.replace(/three/gi, '3')
    s = s.replace(/four/gi, '4')
    s = s.replace(/five/gi, '5')
    s = s.replace(/six/gi, '6')
    s = s.replace(/seven/gi, '7')
    s = s.replace(/eight/gi, '8')
    s = s.replace(/nine/gi, '9')


    return answer = Number(s);
}
// 정규표현식 사용한 풀이 replace(/zero/gi,'0')는 /zero/gi에서 zero를 '0'으로 치환시킨다는 뜻이다.
// '슬래쉬 사이에 모든(g) 문자를, 대소문자 구분없이(i) 치환 하겠다' 
// g는 모든 전역 (첫번째 일치하는 문자열을 찾아도 끝까지 찾는다)
// i는 대소문자 구분 없이

// 풀이2

function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for (let i = 0; i < numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }
    return Number(answer);
}

// 1. 문자열을 영문으로 표기된 숫자 기준으로 split 한다. 그렇게되면 영문자로 표기된 숫자는 사라지고 양옆으로 남은 문자열들이 arr배열에 들어간다.
// 2. join을 통해서 arr배열을 다시 합쳐주면 arr배열 원소들 사이에 i 가 들어가면서 새로운 문자열이 생성된다.

// 'one4seveneight'의 경우 split을 통해 [ '', '4seveneight'] 이 생성된다.
// 이후 join(i)를 통하여 두 원소 사이에 '1' (i는 1인 상태기 때문에) 이 들어가게 되어 14seveneight 이 생성된다.
// 이후 for문을 계속 따라가다보면
// [ '14', 'eight'] // split 을 통해 생성.
// 147eight // join을 통해 생성.
// [ '147', ''] // split을 통해 생성.
// 1478 // join을 통해 성성.

