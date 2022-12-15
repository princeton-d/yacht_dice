// DOM
const throwDiceBtn = document.querySelector('.throwDiceBtn'); // 주사위 던지기 버튼
const fixDiceArea = document.querySelector('.fixDiceArea'); // 픽스한 주사위 영역
const unfixDiceArea = document.querySelector('.unfixDiceArea'); // 픽스하지 않은 주사위 영역


// DATA
let TURN = true // true = player 1's turn, false = player 2's turn
let UN_FIX_DICE_PROCESS = [Infinity, Infinity, Infinity, Infinity, Infinity]; // fix 하지 않은 주사위 배열
let FIX_DICE_PROCESS = [Infinity, Infinity, Infinity, Infinity, Infinity]; // fix 한 주사위 배열
let DICE_CHANCE = 5;
let PLAYER_ONE_LIFE = 3; // 플레이어 1의 남은 주사위 횟수
let PLAYER_TWO_LIFE = 3; // 플레이어 2의 남은 주사위 횟수


// EventListener
throwDiceBtn.addEventListener('click', () => throwDice(DICE_CHANCE, TURN));


// Function
function init() {
  DiceResultAreaSetup()
};

/**
 * fixDiceArea 와 unFixDiceArea 하위 버튼에 class 명을 설정해주고, 클릭 이벤트 설정
 */
function DiceResultAreaSetup() {
  const fixDiceAreaBtn = fixDiceArea.children;
  const unFixDiceAreaBtn = unfixDiceArea.children;
  for (let i = 0; i < fixDiceAreaBtn.length; i++) {
    fixDiceAreaBtn[i].classList.add(`fixDiceArea${i}`);
    fixDiceAreaBtn[i].classList.add(`fix`);
    fixDiceAreaBtn[i].classList.add(`${i}`);
    const changeBtn = document.querySelector(`.fixDiceArea${i} `);
    changeBtn.addEventListener('click', changeDice);
  }
  for (let i = 0; i < unFixDiceAreaBtn.length; i++) {
    unFixDiceAreaBtn[i].classList.add(`unFixDiceArea${i}`);
    unFixDiceAreaBtn[i].classList.add(`unFix`);
    unFixDiceAreaBtn[i].classList.add(`${i}`);
    const changeBtn = document.querySelector(`.unFixDiceArea${i}`);
    changeBtn.addEventListener('click', changeDice);
  }
};

/**
 * 플레이어의 주사위 횟수를 1 감소시키고 fix 하지 않은 주사위를 던져주는 기능
 * @param {number} DICE_CHANCE fix 하지 않은 주사위의 수
 * @param {number} player 플레이어를 구분하는 파라미터
 * @returns fix 하지 않은 주사위를 굴려 sort를 사용해 정렬한 배열
 */
function throwDice(DICE_CHANCE, player) {
  UN_FIX_DICE_PROCESS = [Infinity, Infinity, Infinity, Infinity, Infinity] // 주사위 과정 배열 초기화
  for (let i = 0; i < DICE_CHANCE; i++) { // fix 하지 않은 주사위를 갯수만큼 diceNum을 받아 주사위를 던짐
    UN_FIX_DICE_PROCESS.shift();
    UN_FIX_DICE_PROCESS.push(Math.ceil(Math.random() * 6));
  };
  UN_FIX_DICE_PROCESS.sort((a, b) => a - b); // 주사위 결과값 내림차순 정렬
  assignUnFixDice(DICE_CHANCE)
  lifeCounter(player);
};

/**
 * 플레이어의 주사위 횟수를 감소시키는 함수
 * @param {number} player 플레이어를 구분하는 파라미터
 * @returns 해당하는 플레이어의 life 를 1 감소함
 */
function lifeCounter(player) {
  return player === 1 ? PLAYER_ONE_LIFE-- : PLAYER_TWO_LIFE--;
};

/**
 * 주사위 배열을 unFixDiceButton 에 출력해줌
 * @param {number} DICE_CHANCE fix 하지 않은 주사위의 수
 */
function assignUnFixDice(DICE_CHANCE) {
  for (let i = 0; i < DICE_CHANCE; i++) {
    document.querySelector(`.unFixDiceArea${i}`).innerText = UN_FIX_DICE_PROCESS[i]
  }
}

function changeDice(e) {
  if (e.target.classList[1] === 'fix') {
    if (0 < e.target.innerText && e.target.innerText < 7) {
      const CUTTING_AREA_NUM = Number(e.target.classList[2]);
      UN_FIX_DICE_PROCESS.pop(1);
      UN_FIX_DICE_PROCESS.push(Number(e.target.innerText));
      UN_FIX_DICE_PROCESS.sort((a, b) => a - b);
      FIX_DICE_PROCESS.splice(CUTTING_AREA_NUM, 1);
      FIX_DICE_PROCESS.push(Infinity)
      for (let i = 0; i < FIX_DICE_PROCESS.length; i++) {
        fixDiceArea.children[i].innerText = FIX_DICE_PROCESS[i] === Infinity ? '' : FIX_DICE_PROCESS[i];
        unfixDiceArea.children[i].innerText = UN_FIX_DICE_PROCESS[i] === Infinity ? '' : UN_FIX_DICE_PROCESS[i];
      }
      DICE_CHANCE++
    }
  } else if (e.target.classList[1] === 'unFix') {
    if (0 < e.target.innerText && e.target.innerText < 7) {
      const CUTTING_AREA_NUM = Number(e.target.classList[2]);
      FIX_DICE_PROCESS.pop(1);
      FIX_DICE_PROCESS.push(Number(e.target.innerText));
      FIX_DICE_PROCESS.sort((a, b) => a - b);
      UN_FIX_DICE_PROCESS.splice(CUTTING_AREA_NUM, 1);
      UN_FIX_DICE_PROCESS.push(Infinity)
      for (let i = 0; i < UN_FIX_DICE_PROCESS.length; i++) {
        unfixDiceArea.children[i].innerText = UN_FIX_DICE_PROCESS[i] === Infinity ? '' : UN_FIX_DICE_PROCESS[i];
        fixDiceArea.children[i].innerText = FIX_DICE_PROCESS[i] === Infinity ? '' : FIX_DICE_PROCESS[i];
      }
      DICE_CHANCE--
    }
  }

}

init()