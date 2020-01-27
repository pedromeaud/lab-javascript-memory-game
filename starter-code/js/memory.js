class MemoryGame {
  constructor(cards) {
    this.cards = cards;

    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    const shuffleMethod = cards => {
      let x = cards.length;
      while (x !== 0) {
        const y = Math.floor(Math.random() * x);
        x--;
        let z = cards[x];
        cards[x] = cards[y];
        cards[y] = z;
      }
      return cards;
    };
    shuffleMethod(this.cards);
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }

  isFinished() {
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    } else {
      return false;
    }
  }
}
