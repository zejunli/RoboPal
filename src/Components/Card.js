import React from 'react';
import './Card.css'



const Card = (props) => {
	return (
		<div className="bgLightPink dib br3 pa3 ma2 grow shadow-5 tc">
			<img src={`https://robohash.org/${props.id}?200x200`} alt='Jane Doe'/>
			<div>
				<h2>{props.name}</h2>
				<p>{props.email}</p>
			</div>
		</div>)
} 

export default Card;