let diceProcess = [];
let playerOneLife = 2;
let playerTwoLife = 2;

/**
 * 
 * @param {number} diceNum fix 하지 않은 주사위의 수
 * @param {number} player 플레이어를 구분하는 파라미터
 * @returns fix 하지 않은 주사위를 굴려 sort를 사용해 정렬한 배열
 */
function throwDice(diceNum, player) {
  diceProcess = [] // 주사위 과정 배열 초기화
  for (let i = 0; i < diceNum; i++) { // fix 하지 않은 주사위를 갯수만큼 diceNum을 받아 주사위를 던짐
    diceProcess.push(Math.ceil(Math.random() * 6))
  }
  return diceProcess.sort((a, b) => a - b) // 주사위 결과값 내림차순 정렬
}

/**
 * 
 * @param {number} player 플레이어를 구분하는 파라미터
 * @returns 해당하는 플레이어의 life 를 1 감소함
 */
function lifeCounter(player) {
  return player === 1 ? playerOneLife-- : playerTwoLife--;
}

console.log(throwDice(3))
