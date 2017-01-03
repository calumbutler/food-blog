import {actions} from 'components/footer/actions';
import {dispatcher} from 'dispatcher';

class Store {
	constructor () {


		this.bindListeners({
			initialize: actions.initialize
		});
	}

	initialize(){

	}

}

export const store = dispatcher.createStore(Store, 'Store');
