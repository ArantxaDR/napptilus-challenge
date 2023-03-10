import React from 'react';
import './Pagination.scss';

export const Pagination = ({ totalPages, handleClick}) => {
	const pages = [...Array(totalPages).keys()].map((num) => num + 1);	

	return (
		<div className='pagination'>
			{pages.map((num) => {
				return (
					<button
						key={num}
						onClick={() => handleClick(num)}
						>
						{num}
					</button>
				);
			})}
		</div>
	);
}
