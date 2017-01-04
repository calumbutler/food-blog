import React from 'react';
import {recipeActions} from 'components/recipe/actions';
import {recipeStore} from 'components/recipe/store';
import {homeStore} from 'components/home/store';

export default class Recipe extends React.Component{
	constructor(props){
		super(props);
		this.state = recipeStore.getState();
		recipeStore.listen(this.storeUpdate.bind(this));
	}
	storeUpdate(){
		this.setState(recipeStore.getState());
	}
	componentDidMount(){
		recipeActions.initialize();
	}
	componentDidUpdate(){
	}
	render(){
		console.log(homeStore.getState().newRecipes[this.props.params.recipeId-1])
			return (
				<div id="recipe-container" className='recipe--container' style={{backgroundImage: 'url(' + homeStore.getState().newRecipes[this.props.params.recipeId-1].imgUrl + ')'}}>
					<div className='recipe--container__wrapper flex flex-column'>
						<div className='recipe--title__container text-center'>
							<h2>{homeStore.getState().newRecipes[this.props.params.recipeId-1].title}</h2>
						</div>
						<div className='recipe--box flex flex-row flex-wrap justify-between'>

							<div className='recipe--section'>
								<h3>Ingredients</h3>
								<ol className='direction--list'>
								{
									homeStore.getState().newRecipes[this.props.params.recipeId-1].directions.map((item) => {
										return(<li>{item}</li>)
									})
								}
								</ol>
							</div>
							<div className='recipe--section'>
								<h3>Method</h3>
								<ol className='direction--list'>
								{
									homeStore.getState().newRecipes[this.props.params.recipeId-1].directions.map((item) => {
										return(<li>{item}</li>)
									})
								}
								</ol>
							</div>
						</div>
					</div>
				</div>
			);
		}
}
