import React, { Component } from 'react'

export default class SpcChartsView extends Component {
	constructor(props) {
		super(props)

		this.state = {
			station: '',
			unit: '',
			filter: '',
			dateRange: ''
		}
	}

	onFieldChange(field, event) {
		this.setState({
			[field]: event.target.value
		})
	}

	render() {
		return (
			<div className="row spc-inputs">
				<div className="col-3">
					<div className="form-group">
						<label for="stationInput">Station ID</label>
						<input 
							type="text" 
							className="form-control" 
							id="stationInput" 
							placeholder="Station ID" 
							value={this.state.station}
							onChange={(event) => {this.onFieldChange('station', event)}}
						/>
					</div>
				</div>
				<div className="col-3">
					<div className="form-group">
						<label for="unitInput">Unit SN</label>
						<input 
							type="text" 
							className="form-control" 
							id="unitInput" 
							placeholder="Unit SN" 
							value={this.state.unit}
							onChange={(event) => {this.onFieldChange('unit', event)}}
						/>
					</div>
				</div>
				<div className="col-3">
					<div className="form-group">
						<label for="dateRange">Date Range</label>
						<input 
							type="text" 
							className="form-control" 
							id="dateRange" 
							placeholder="10/01/17" 
							value={this.state.dateRange}
							onChange={(event) => {this.onFieldChange('dateRange', event)}}
						/>
					</div>
				</div>
				<div className="col-3">
					<div className="form-group">
						<button className="btn btn-primary spc-button">Update Charts</button>
					</div>
				</div>
			</div>
		)
	}
}