import React from 'react';
import ReactDom from 'react-dom';
//import {Home} from 'components/home/Home';
//import {Recipe} from 'components/recipe/RecipePage';
// import Header from 'shared/header';
// import Footer from 'shared/footer';
import babelPolyfill from 'babel-polyfill'
import Container from 'shared/container';
//import { Router, Route, Link, IndexRoute } from 'react-router';
console.log('asdas')
//let currentPage = location.hash.split('#')[1] ? location.hash.split('#')[1] : 'home';
console.log(Container)
if (!_babelPolyfill) {
	console.log('Error: babel-polyfill could not be detected');
}

let initializeApp = () => {
	console.log('main init')
  //ReactDom.render(<Header/>, document.getElementById('header'));
	ReactDom.render(<Container />, document.getElementById('container'));
};

if (document.readyState === 'loaded') {
   initializeApp()
} else {
  window.onload = initializeApp;
}
