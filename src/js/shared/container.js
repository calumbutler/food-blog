import Header from 'shared/header';
import Footer from 'shared/footer';
import Home from 'components/home/Home';
import Recipe from 'components/recipe/RecipePage';
import React from 'react';
import {Router, Route, Link, IndexRoute, hashHistory} from 'react-router';
//console.log(Router)
export default class Container extends React.Component {
  render () {
    return (
      <div id="page" className="app hfeed site">
        <div id="container">
          <Header />
          <Router history={hashHistory}>
            <Route path="/" component={Home}/>
            <Route path="/home/" component={Home}/>
            <Route path="/recipe/" component={Recipe}>
              <Route path="/recipe/:recipeId" component={Recipe}/>
            </Route>
          </Router>
          <Footer />
       </div>
    </div>
  );
  }
}
