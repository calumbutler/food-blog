import React from 'react';
import {actions} from 'components/header/actions';
import {store} from 'components/header/store';
import {batchUpdate} from 'components/header/utilities'


export default class Home extends React.Component {
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
        <div id='header' className='header'>
					<div className=""></div>
        </div>
    );
  }
}
