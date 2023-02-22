class Thermostat {
  constructor() {
    this.temp = 20;
    this.max = 25;
    this.min = 10;
  }

  getTemperature() {
    return this.temp;
  }

  up() {
    if (this.temp < this.max) {
      this.temp++;
    }
  }

  down() {
    if (this.temp > this.min) {
      this.temp--;
    }
  }

  setPowerSavingMode(bool) {
    if (bool === true) {
      this.max = 25;
    } else {
      this.max = 32;
    }
  }

  reset() {
    this.temp = 20;
  }
}

module.exports = Thermostat;
