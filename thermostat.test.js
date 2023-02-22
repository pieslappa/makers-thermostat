const Thermostat = require('./thermostat');

describe('Thermostat', () => {
  it('Starts with a temperature of 20C', () => {
    const thermostat = new Thermostat();
    expect(thermostat.getTemperature()).toBe(20);
  });

  it('Increases the temperature', () => {
    const thermostat = new Thermostat();
    thermostat.up();
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(22);
  });

  it('Decreases the temperature', () => {
    const thermostat = new Thermostat();
    thermostat.down();
    thermostat.down();
    expect(thermostat.getTemperature()).toBe(18);
  });

  it('Turns power saving mode on', () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(true);
    for (let i = 0; i < 10; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(25);
  });

  it('Turns power saving mode off', () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(false);
    for (let i = 0; i < 6; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(26);
  });

  it('Sets the minimum temperature at 10C', () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(false);
    for (let i = 0; i < 14; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(32);
  });

  it('Resets the thermostat', () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(false);
    for (let i = 0; i < 14; i++) {
      thermostat.up();
    }
    thermostat.reset();
    expect(thermostat.getTemperature()).toBe(20);
  });
});
