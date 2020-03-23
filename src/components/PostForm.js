
import React from 'react';
import moment from 'moment';
import BlockStyleControls from './BlockStyleControls';
import InlineStyleControls from './InlineStyleControls';
import MessageModal from './MessageModal';
import {Editor, EditorState, ContentState, RichUtils} from 'draft-js';
import { convertToHTML } from 'draft-convert';
import htmlToDraft from 'html-to-draftjs';

export default class PostForm extends React.Component {
   // local component state:
   constructor(props) {
      super(props);
      this.focus = () => this.refs.editor.focus();
      this.state = {
         title: props.post ? props.post.title : '',
         body: props.post ? props.post.body : '',
         postTime: props.post ? moment(props.post.postTime) : moment(),
         error: '',
         editorState: EditorState.createEmpty(),
         showMessageModal: false,
         origContent: {
            title: props.post ? props.post.title : '',
            body: props.post ? props.post.body : ''            
         }
      }
   }

   setTitle = (e) => {
      e.preventDefault();
      const title = e.target.value;
      this.setState(() => ({ title }));
   }

   setBody = editorState => {
      this.setState({editorState});
      const html = convertToHTML(this.state.editorState.getCurrentContent());
      this.setState(() => ({ body: html })); 
   }

   componentDidMount = () => {
      const blocksFromHtml = htmlToDraft(this.state.body);
      const { contentBlocks, entityMap } = blocksFromHtml;
      const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
      const editorState = EditorState.createWithContent(contentState);
      this.setState({ editorState, origContent: {title: this.state.title, body: this.state.body} });
   }

   onSubmit = (e) => {
      e.preventDefault();
      
      if(!this.state.title) {
         this.setState(() => ({ error: 'Please provide a title' }))
      }
      else { 
         this.props.onSubmit({ // calling the function passed in as prop
            title: this.state.title,
            body: this.state.body,
            postTime: moment().valueOf()
         });
      }
   }

   toggleBlockType = (blockType) => {
		this.setBody(
			RichUtils.toggleBlockType(
				this.state.editorState,
				blockType
			));
     }

	toggleInlineStyle = (inlineStyle) => {
		this.setBody(
			RichUtils.toggleInlineStyle(
				this.state.editorState,
				inlineStyle
			)
		);
	}

   getBlockStyle = (block) => {
      switch (block.getType()) {
         case 'blockquote': return 'RichEditor-blockquote';
         case 'new-block-type-name':
            return {
               component: CustomComponent,
               editable: false,
            }
         default: return null;
      }
   }

   handleShowMessageModal = () => {
      window.location.pathname.split('/')[1] == 'edit' &&
      (this.state.origContent.title !== this.state.title ||
      this.state.origContent.body !== this.state.body) &&
      this.setState({ showMessageModal: true });
      this.setState({ origContent: {title: this.state.title, body: this.state.body} });
   }  

   handleCloseMessageModal = () => {
      this.setState({ showMessageModal: false });
   }

   render() {
      const {editorState} = this.state;
      return (
         <div>
            {this.state.error}
            <form onSubmit={this.onSubmit} className="input-group-add-page">
               <input 
                  type="text" 
                  onChange={this.setTitle} 
                  value={this.state.title}
                  className="text-input input-group__item"
                  placeholder="Post Title"
               />
               <BlockStyleControls
                  editorState={editorState}
                  onToggle={this.toggleBlockType}
               />
               <InlineStyleControls
                  editorState={editorState}
                  onToggle={this.toggleInlineStyle}
               />
               <div onClick={this.focus}>
                  <Editor
                     blockStyleFn={this.getBlockStyle}
                     editorState={this.state.editorState}
                     onChange={this.setBody}
                     handleReturn={this.handleReturn}
                     ref="editor"
               />               
               </div>
               <div>
                  <button onClick={this.handleShowMessageModal} className="button button--standard">Submit</button>              
               </div>
               <MessageModal 
                  showModal={this.state.showMessageModal} 
                  handleCloseMessageModal={this.handleCloseMessageModal} 
               />               
            </form>
         </div>   
      )
   }
}
