import React from 'react';

const Spinner = props => {
	return(
		<React.Fragment>
			<div className='spinner-container' >
				<img src={'/assets/chip.svg'} alt="Loading..."/>
			</div>
		</React.Fragment>
	)
}

export default Spinner