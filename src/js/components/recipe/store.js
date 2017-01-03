/*eslint-disable */
import {recipeActions} from 'components/recipe/actions';
import {dispatcher} from 'dispatcher';

class RecipeStore {
	constructor () {
		this.map = {};
		this.bindListeners({
			initialize: recipeActions.initialize
		});
	}

	initialize(){

	}


}

export const recipeStore = dispatcher.createStore(RecipeStore, 'RecipeStore');
