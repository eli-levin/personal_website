var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HueCycle = function (_React$Component) {
  _inherits(HueCycle, _React$Component);

  function HueCycle(props) {
    _classCallCheck(this, HueCycle);

    var _this = _possibleConstructorReturn(this, (HueCycle.__proto__ || Object.getPrototypeOf(HueCycle)).call(this, props));

    _this.state = { degree: props.base }; //181 bc Math.random returns <1 and this will truncate
    return _this;
  }

  _createClass(HueCycle, [{
    key: 'tick',
    value: function tick() {
      this.setState(function (state) {
        return {
          degree: state.degree < 180 ? state.degree + 1 : 0
        };
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.interval = setInterval(function () {
        return _this2.tick();
      }, 2400);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: 'getHSLA',
    value: function getHSLA() {
      var val = 1 / 0.2 * this.state.degree * 210;
      return 'hsla(' + val + ', 90%, 60%, 1)';
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement('div', { 'class': 'hue-cycle', style: { backgroundColor: this.getHSLA() } });
    }
  }]);

  return HueCycle;
}(React.Component);

// ReactDOM.render(
//   <HueCycle />,
//   document.getElementById('root')
// );

var numbers = [1, 2, 3, 4];
var gbase = Math.floor(Math.random() * 181);
var listItems = numbers.map(function (n) {
  return React.createElement(HueCycle, { base: Math.min(gbase + n * 2, 180) });
});

ReactDOM.render(React.createElement(
  'div',
  null,
  listItems
), document.getElementById('root'));