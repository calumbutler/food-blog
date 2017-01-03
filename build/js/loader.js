define(['exports', 'react', 'react-dom', 'babel-polyfill', 'shared/container'], function (exports, _react, _reactDom, _babelPolyfill2, _sharedContainer) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _React = _interopRequireDefault(_react);

  var _ReactDom = _interopRequireDefault(_reactDom);

  //import {Home} from 'components/home/Home';
  //import {Recipe} from 'components/recipe/RecipePage';
  // import Header from 'shared/header';
  // import Footer from 'shared/footer';

  var _babelPolyfill3 = _interopRequireDefault(_babelPolyfill2);

  var _Container = _interopRequireDefault(_sharedContainer);

  //import { Router, Route, Link, IndexRoute } from 'react-router';
  console.log('asdas');
  //let currentPage = location.hash.split('#')[1] ? location.hash.split('#')[1] : 'home';
  console.log(_Container['default']);
  if (!_babelPolyfill) {
    console.log('Error: babel-polyfill could not be detected');
  }

  var initializeApp = function initializeApp() {
    console.log('main init');
    //ReactDom.render(<Header/>, document.getElementById('header'));
    _ReactDom['default'].render(_React['default'].createElement(_Container['default'], null), document.getElementById('container'));
  };

  if (document.readyState === 'loaded') {
    initializeApp();
  } else {
    window.onload = initializeApp;
  }
});
//# sourceMappingURL=loader.js.map