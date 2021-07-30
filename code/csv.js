const csv = {};
csv.test = require(`./csv/test.csv`).default;
class csvManager {
  #obj;
  constructor(obj) {
    this.#obj = obj;
  }
  add() {}
  get obj() {
    return this.#obj;
  }
}

module.exports = new csvManager(csv);
