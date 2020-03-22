
import React from 'react';

class DraftEditorButton extends React.Component {
	constructor() {
		super();
		this.onToggle = (e) => {
			e.preventDefault();
			this.props.onToggle(this.props.style);
		};
	}

	render() {

		let className = 'style-button';
		if (this.props.active) {
			className += ' style-button-activated';
      }
            
		return (
         <span className={className} onMouseDown={this.onToggle}>
				{this.props.label}
			</span>
		);
	}
}

export { DraftEditorButton as default }