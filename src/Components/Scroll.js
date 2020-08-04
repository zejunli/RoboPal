import React from 'react';


const Scroll = (props) => {
	return (
			<div style={{overflowY: 'scroll', border:'1px solid #FFCC78', height:'85vh'}}>
				{props.children}
			</div>
		)
}

export default Scroll;