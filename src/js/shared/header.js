import React from 'react';

export default class Header extends React.Component {

	constructor (props) {
		super(props);
	}

	componentDidMount(){
	}

	render(){
		return (
			<article className='header--article'>
				<header className='header--header flex flex-column justify-between'>
					<h1 className='header--title'>Burn & Relish</h1>
					<ul className='header--navigation flex flex-row justify-center'>
						<li> Recipes</li>
						<li> Techniques</li>
						<li> other</li>
						<li className='last'> areas</li>
					</ul>
				</header>
			</article>

		);
	}
}
