import {dispatcher} from 'dispatcher';

class homeActions {

  initialize(){
		this.dispatch();
	}
  currentPage(pageName){
    this.dispatch(pageName)
  }

  updateNewRecipes(newRecipes){
    this.dispatch(newRecipes)
  }

}
export const actions = dispatcher.createActions(homeActions);
