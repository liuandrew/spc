import React, { Component } from 'react'


// Spc (COMPONENT)
// ------------------------------------------------------
// Base route container for all items in Spc route

export default class Spc extends Component {

	render() {
		return (
			<div>
				{this.props.children}
			</div>
		)
	}
}