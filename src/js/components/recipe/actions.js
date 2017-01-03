import {dispatcher} from 'dispatcher';

class RecipeActions {

	initialize(){
		this.dispatch();
	}
	changeMapSize(size){
		this.dispatch(size);
	}

}
export const recipeActions = dispatcher.createActions(RecipeActions);
