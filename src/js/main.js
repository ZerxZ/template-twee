(() => {
  var __defProp = Object.defineProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    __markAsModule(target);
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __accessCheck = (obj, member, msg) => {
    if (!member.has(obj))
      throw TypeError("Cannot " + msg);
  };
  var __privateGet = (obj, member, getter) => {
    __accessCheck(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
  };
  var __privateAdd = (obj, member, value) => {
    if (member.has(obj))
      throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
  };
  var __privateSet = (obj, member, value, setter) => {
    __accessCheck(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
  };

  // code/json/chara.json
  var require_chara = __commonJS({
    "code/json/chara.json"(exports, module) {
      module.exports = {
        name: "\u9E3D\u5B50"
      };
    }
  });

  // yaml:D:\tweego\html\code\yaml\test.yaml
  var require_test = __commonJS({
    "yaml:D:\\tweego\\html\\code\\yaml\\test.yaml"(exports, module) {
      module.exports = { time: 10 };
    }
  });

  // dsv:D:\tweego\html\code\csv\test.csv
  var test_exports = {};
  __export(test_exports, {
    default: () => test_default
  });
  var test_default;
  var init_test = __esm({
    "dsv:D:\\tweego\\html\\code\\csv\\test.csv"() {
      test_default = [
        {
          "\u7F16\u53F7": "1",
          "\u540D\u5B57": "\u8DEF\u97F5"
        },
        {
          "\u7F16\u53F7": "2",
          "\u540D\u5B57": "\u72D0\u72F8"
        }
      ];
    }
  });

  // code/csv.js
  var require_csv = __commonJS({
    "code/csv.js"(exports, module) {
      var csv = {};
      csv.test = (init_test(), test_exports).default;
      var _obj;
      var csvManager = class {
        constructor(obj) {
          __privateAdd(this, _obj, void 0);
          __privateSet(this, _obj, obj);
        }
        add() {
        }
        get obj() {
          return __privateGet(this, _obj);
        }
      };
      _obj = new WeakMap();
      module.exports = new csvManager(csv);
    }
  });

  // code/main.js
  var Game = {};
  Game.chara = require_chara();
  Game.tesy = require_test();
  Game.csvManager = require_csv();
  setup.hello = function(name) {
    return "Hello " + name + ", how are you?";
  };
  window.Game = Game;
  console.log(window.Game);
})();
