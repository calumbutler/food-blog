import {actions} from 'components/home/actions';
import {dispatcher} from 'dispatcher';
import {Config} from 'config';

class Store {
	constructor () {
		this.pageName = 'home';
		this.newRecipes = Config.newRecipes;

		this.bindListeners({
			initialize: actions.initialize,
			currentPage: actions.currentPage,
			updateNewRecipes: actions.updateNewRecipes
		});
	}

	initialize(){

	}

	currentPage(pageName){
		this.currentPage = pageName;
	}

	updateNewRecipes(newRecipes){
		this.newRecipes = newRecipes;
	}

}
export const homeStore = dispatcher.createStore(Store, 'Store');
