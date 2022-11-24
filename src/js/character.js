export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.stonedState = false;
    this.distance = 1;
  }

  set stoned(state) {
    this.stonedState = state;
  }

  get stoned() {
    return this.stonedState;
  }

  set attack(power) {
    this.attackPower = power;
  }

  get attack() {
    if (this.distance > 5) {
      return 0;
    }
    let attackFinal = this.attackPower * (1 - 0.1 * this.distance);
    if (this.stonedState) {
      attackFinal -= Math.log2(this.distance) * 5;
    }
    return Math.round(attackFinal);
  }
}
