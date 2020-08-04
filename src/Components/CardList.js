import React from 'react';
import Card from './Card';


// key is for the purpose of performance of DOM, when deleting one of them,
// the react needs to know which to delete, and the key is like the ID of the item.
// without the key, it'll have to re-render the entire list.
const CardList = ({robots}) => {
	return (
		<div>
	    	{
		    	robots.map((user, i) => {
					return (
						<Card 
							key={i} 
							id={robots[i].id} 
							name={robots[i].name} 
							email={robots[i].email}
							/>
					);	
	    		})
	    	}
	    </div>	
	);
}

export default CardList;