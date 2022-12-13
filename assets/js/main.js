// DATA
let TURN = true // true = player 1's turn, false = player 2's turn
let DICE_PROCESS = []; // fix 하지 않은 주사위 배열
let FIX_DICE = []; // fix 한 주사위 배열
let PLAYER_ONE_LIFE = 3; // 플레이어 1의 남은 주사위 횟수
let PLAYER_TWO_LIFE = 3; // 플레이어 2의 남은 주사위 횟수

/**
 * 플레이어의 주사위 횟수를 1 감소시키고 fix 하지 않은 주사위를 던져주는 기능
 * @param {number} diceNum fix 하지 않은 주사위의 수
 * @param {number} player 플레이어를 구분하는 파라미터
 * @returns fix 하지 않은 주사위를 굴려 sort를 사용해 정렬한 배열
 */
function throwDice(diceNum, player) {
  DICE_PROCESS = [] // 주사위 과정 배열 초기화
  for (let i = 0; i < diceNum; i++) { // fix 하지 않은 주사위를 갯수만큼 diceNum을 받아 주사위를 던짐
    DICE_PROCESS.push(Math.ceil(Math.random() * 6))
  }
  lifeCounter(player)
  return DICE_PROCESS.sort((a, b) => a - b) // 주사위 결과값 내림차순 정렬
}

/**
 * 플레이어의 주사위 횟수를 감소시키는 함수
 * @param {number} player 플레이어를 구분하는 파라미터
 * @returns 해당하는 플레이어의 life 를 1 감소함
 */
function lifeCounter(player) {
  return player === 1 ? PLAYER_ONE_LIFE-- : PLAYER_TWO_LIFE--;
}

console.log(throwDice(5, 2))