import React, { Component } from 'react';

class SearchBar extends Component {
	handleFilterTextChange = (e) => {
		this.props.onFilterTextChange(e.target.value);
	};
	handleInStockChange = (e) => {
		this.props.onInStockChange(e.target.checked);
	};
	render() {
		const { filterText, inStockOnly } = this.props;
		return (
			<form>
				<input
					type='text'
					placeholder='Search...'
					value={filterText}
					onChange={this.handleFilterTextChange}
				/>
				<p>
					<input
						type='checkbox'
						checked={inStockOnly}
						onChange={this.handleInStockChange}
					/>{' '}
					Only show products in stock
				</p>
			</form>
		);
	}
}

export default SearchBar;
