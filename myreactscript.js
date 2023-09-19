var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StoreDashboard = function (_React$Component) {
  _inherits(StoreDashboard, _React$Component);

  function StoreDashboard(props) {
    _classCallCheck(this, StoreDashboard);

    var _this = _possibleConstructorReturn(this, (StoreDashboard.__proto__ || Object.getPrototypeOf(StoreDashboard)).call(this, props));

    _this.state = { liked: false };
    return _this;
  }

  _createClass(StoreDashboard, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.state.liked) {
        return "This is from React implementation setState";
      }

      return React.createElement(
        "button",
        { onClick: function onClick() {
            _this2.setState({ liked: true });
          } },
        "Click to try React inside AngularJS1.x"
      );
    }
  }]);

  return StoreDashboard;
}(React.Component);

setTimeout(function () {
  console.log("============================timedout===============");
  var domContainer = document.querySelector("#store");
  ReactDOM.render(React.createElement(StoreDashboard, null), domContainer);
}, 1000);