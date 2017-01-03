define(['exports', 'module', 'shared/header', 'shared/footer', 'components/home/Home', 'components/recipe/RecipePage', 'react', 'react-router'], function (exports, module, _sharedHeader, _sharedFooter, _componentsHomeHome, _componentsRecipeRecipePage, _react, _reactRouter) {
  'use strict';

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _Header = _interopRequireDefault(_sharedHeader);

  var _Footer = _interopRequireDefault(_sharedFooter);

  var _Home = _interopRequireDefault(_componentsHomeHome);

  var _Recipe = _interopRequireDefault(_componentsRecipeRecipePage);

  var _React = _interopRequireDefault(_react);

  //console.log(Router)

  var Container = (function (_React$Component) {
    _inherits(Container, _React$Component);

    function Container() {
      _classCallCheck(this, Container);

      _get(Object.getPrototypeOf(Container.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Container, [{
      key: 'render',
      value: function render() {
        return _React['default'].createElement(
          'div',
          { id: 'page', className: 'app hfeed site' },
          _React['default'].createElement(
            'div',
            { id: 'container' },
            _React['default'].createElement(_Header['default'], null),
            _React['default'].createElement(
              _reactRouter.Router,
              { history: _reactRouter.hashHistory },
              _React['default'].createElement(_reactRouter.Route, { path: '/home/', component: _Home['default'] }),
              _React['default'].createElement(
                _reactRouter.Route,
                { path: '/recipe/', component: _Recipe['default'] },
                _React['default'].createElement(_reactRouter.Route, { path: '/recipe/:recipeId', component: _Recipe['default'] })
              )
            ),
            _React['default'].createElement(_Footer['default'], null)
          )
        );
      }
    }]);

    return Container;
  })(_React['default'].Component);

  module.exports = Container;
});
//# sourceMappingURL=container.js.map