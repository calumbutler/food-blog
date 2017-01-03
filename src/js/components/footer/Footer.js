import React from 'react';
import {actions} from 'components/footer/actions';
import {store} from 'components/footer/store';
import {batchUpdate} from 'components/footer/utilities'


export default class Footer extends React.Component {
	constructor(props){
		super(props);
		this.state = store.getState();
		store.listen(this.storeUpdate.bind(this));
	}

	storeUpdate(){
		this.setState(store.getState());
	}

	componentDidMount(){
	}

	componentDidUpdate(){
	}


	render(){
      return (
        <div id='footer' className='footer'>
        </div>
    );
  }
}
