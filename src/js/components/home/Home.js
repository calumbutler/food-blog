import React from 'react';
import {actions} from 'components/home/actions';
import {homeStore} from 'components/home/store';
import {batchUpdate} from 'components/home/utilities';
import {Link} from 'react-router';


export default class Home extends React.Component {
	constructor(props){
		super(props);
		this.state = homeStore.getState();
		homeStore.listen(this.storeUpdate.bind(this));
	}

	storeUpdate(){
		this.setState(homeStore.getState());
	}

	componentDidMount(){
	}

	componentDidUpdate(){
	}


	render(){
      return (
				<section className='content flex flex-wrap justify-center'>
					{
						homeStore.getState().newRecipes.map(function(item){
							return(
								<div className={item.className}>
									<Link to={"/recipe/" + item.id} >
										<img className='content--image' src={item.imgUrl} />
									</ Link>
								</div>
							)
						})
					}
				</section>
    );
  }
}
