// DOM
const throwDiceBtn = document.querySelector('.throwDiceBtn'); // 주사위 던지기 버튼
const fixDiceArea = document.querySelector('.fixDiceArea'); // 픽스한 주사위 영역
const unfixDiceArea = document.querySelector('.unfixDiceArea'); // 픽스하지 않은 주사위 영역


// DATA
let TURN = true // true = player 1's turn, false = player 2's turn
let DICE_PROCESS = [0, 0, 0, 0, 0]; // fix 하지 않은 주사위 배열
let FIX_DICE = []; // fix 한 주사위 배열
let PLAYER_ONE_LIFE = 3; // 플레이어 1의 남은 주사위 횟수
let PLAYER_TWO_LIFE = 3; // 플레이어 2의 남은 주사위 횟수


// EventListener
throwDiceBtn.addEventListener('click', () => throwDice(DICE_PROCESS.length, TURN));


// Function
function init() {
  DiceResultAreaSetup()
}
/**
 * fixDiceArea 와 unFixDiceArea 하위 버튼에 class 명을 설정해줌
 */
function DiceResultAreaSetup() {
  const fixDiceAreaBtn = fixDiceArea.children;
  const unFixDiceAreaBtn = unfixDiceArea.children;
  for (let i = 0; i < fixDiceAreaBtn.length; i++) {
    fixDiceAreaBtn[i].classList.add(`fixDiceArea${i}`)
  }
  for (let i = 0; i < unFixDiceAreaBtn.length; i++) {
    unFixDiceAreaBtn[i].classList.add(`unFixDiceArea${i}`)
  }
}
/**
 * 플레이어의 주사위 횟수를 1 감소시키고 fix 하지 않은 주사위를 던져주는 기능
 * @param {number} diceNum fix 하지 않은 주사위의 수
 * @param {number} player 플레이어를 구분하는 파라미터
 * @returns fix 하지 않은 주사위를 굴려 sort를 사용해 정렬한 배열
 */
function throwDice(diceNum, player) {
  DICE_PROCESS = [] // 주사위 과정 배열 초기화
  for (let i = 0; i < diceNum; i++) { // fix 하지 않은 주사위를 갯수만큼 diceNum을 받아 주사위를 던짐
    DICE_PROCESS.push(Math.ceil(Math.random() * 6));
  };
  DICE_PROCESS.sort((a, b) => a - b); // 주사위 결과값 내림차순 정렬
  assignUnFixDice(DICE_PROCESS.length)
  lifeCounter(player);
};
/**
 * 플레이어의 주사위 횟수를 감소시키는 함수
 * @param {number} player 플레이어를 구분하는 파라미터
 * @returns 해당하는 플레이어의 life 를 1 감소함
 */
function lifeCounter(player) {
  return player === 1 ? PLAYER_ONE_LIFE-- : PLAYER_TWO_LIFE--;
}
/**
 * 주사위 배열을 unFixDiceButton 에 출력해줌
 * @param {number} diceNum fix 하지 않은 주사위의 수
 */
function assignUnFixDice(diceNum) {
  for (let i = 0; i < diceNum; i++) {
    document.querySelector(`.unFixDiceArea${i}`).innerText = DICE_PROCESS[i]
  }
}

init()