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

  // code/chara.json
  var require_chara = __commonJS({
    "code/chara.json"(exports, module) {
      module.exports = {
        name: "\u9E3D\u5B50"
      };
    }
  });

  // yaml:D:\tweego\html\code\test.yaml
  var require_test = __commonJS({
    "yaml:D:\\tweego\\html\\code\\test.yaml"(exports, module) {
      module.exports = { time: 10 };
    }
  });

  // dsv:D:\tweego\html\code\test.csv
  var test_exports = {};
  __export(test_exports, {
    default: () => test_default
  });
  var test_default;
  var init_test = __esm({
    "dsv:D:\\tweego\\html\\code\\test.csv"() {
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

  // code/main.js
  var chara = require_chara();
  var tesy = require_test();
  var csv = (init_test(), test_exports);
  var \u4E2D\u6587 = chara;
  console.log(\u4E2D\u6587);
  console.log(tesy);
  console.log(csv.default);
})();
