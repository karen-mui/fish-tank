class BiteFish extends Fish {

  constructor(options) {
    super(options); // call super to run the code inside Fish's constructor
    this.imageUri = '/images/bitefish.gif'
  }

  checkToKillFish() {
    const allDenizens = this.tank.getDenizens();

    for (const id in allDenizens) {
      if (this.isNear(allDenizens[id], 50) && (allDenizens[id] instanceof GoFish || allDenizens[id] instanceof SwitchFish)) {
        allDenizens[id].kill();
        console.log("eaten!")
      }
    }
  }

  updateOneTick() {
    super.updateOneTick();

    this.checkToKillFish();
  }

}
