import React from 'react';
import './Header.scss';
import shoping from '../../assets/images/shopping-cart.png'

export const Header = () => {
	return (
		<header className='header_container'>
			<h1>Esto es un header</h1>
			<div className='breadcrumb'>
				<div className='breadcrumb_item'>
					<p>Página/</p>
				</div>
				<div className='breadcrumb_item'>
					<p>Página/</p>
				</div>
				<div className='breadcrumb_item'>
					<p>Página/</p>
				</div>
			</div>
			<div>
				<img className='header_container-icon' src={shoping} alt='Shopping cart'/>
			</div>
	  </header>
  )
}