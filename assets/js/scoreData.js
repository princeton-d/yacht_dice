const scoreData = {
  aces: document.querySelector('.acesBtn'),
  deuces: document.querySelector('.deucesBtn'),
  threes: document.querySelector('.threesBtn'),
  fours: document.querySelector('.foursBtn'),
  fives: document.querySelector('.fivesBtn'),
  sixes: document.querySelector('.sixesBtn'),
  subtotal: document.querySelector('.subtotal'),
  bonus: document.querySelector('.bonus'),
  choice: document.querySelector('.choiceBtn'),
  kind: document.querySelector('.kindBtn'),
  fullHouse: document.querySelector('.fullHouseBtn'),
  sStraight: document.querySelector('.sStraightBtn'),
  lStraight: document.querySelector('.lStraightBtn'),
  yacht: document.querySelector('.yachtBtn'),
  total: document.querySelector('.total'),
}

const userScoreData = {
  aces: {
    one: scoreData.aces.children[0].children,
    two: scoreData.aces.children[1].children
  },
  deuces: {
    one: scoreData.deuces.children[0].children,
    two: scoreData.deuces.children[1].children
  },
  threes: {
    one: scoreData.threes.children[0].children,
    two: scoreData.threes.children[1].children
  },
  fours: {
    one: scoreData.fours.children[0].children,
    two: scoreData.fours.children[1].children
  },
  fives: {
    one: scoreData.fives.children[0].children,
    two: scoreData.fives.children[1].children
  },
  sixes: {
    one: scoreData.sixes.children[0].children,
    two: scoreData.sixes.children[1].children
  },
  subtotal: {
    one: scoreData.subtotal.children[0].children,
    two: scoreData.subtotal.children[1].children
  },
  bonus: {
    one: scoreData.bonus.children[0].children,
    two: scoreData.bonus.children[1].children
  },
  choice: {
    one: scoreData.choice.children[0].children,
    two: scoreData.choice.children[1].children
  },
  kind: {
    one: scoreData.kind.children[0].children,
    two: scoreData.kind.children[1].children
  },
  fullHouse: {
    one: scoreData.fullHouse.children[0].children,
    two: scoreData.fullHouse.children[1].children
  },
  sStraight: {
    one: scoreData.sStraight.children[0].children,
    two: scoreData.sStraight.children[1].children
  },
  lStraight: {
    one: scoreData.lStraight.children[0].children,
    two: scoreData.lStraight.children[1].children
  },
  yacht: {
    one: scoreData.yacht.children[0].children,
    two: scoreData.yacht.children[1].children
  },
  total: {
    one: scoreData.total.children[0].children,
    two: scoreData.total.children[1].children
  },
}

export default userScoreData;