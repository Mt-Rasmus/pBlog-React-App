
import React from 'react';
import DraftEditorButton from './DraftEditorButton';

const INLINE_STYLES = [
	{label: 'Bold', style: 'BOLD'},
	{label: 'Italic', style: 'ITALIC'},
	{label: 'Underline', style: 'UNDERLINE'},
   {label: 'Monospace', style: 'CODE'},
];

const InlineStyleControls = (props) => {
	var currentStyle = props.editorState.getCurrentInlineStyle();
	return (
		<div className="RichEditor-controls">
			{INLINE_STYLES.map(type =>
               <DraftEditorButton
                  key={type.label}
                  active={currentStyle.has(type.style)}
                  label={type.label}
                  onToggle={props.onToggle}
                  style={type.style}
               />
            )}
		</div>
	);
};

export { InlineStyleControls as default }
