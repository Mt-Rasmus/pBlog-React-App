
import React from 'react';
import moment from 'moment';

export default class PostForm extends React.Component {
   // local component state:
   constructor(props) {
      super(props);
      this.state = {
         title: props.post ? props.post.title : '',
         body: props.post ? props.post.body : '',
         postTime: props.post ? moment(props.post.postTime) : moment(),
         error: ''   
      }
   }

   setTitle = (e) => {
      e.preventDefault();
      const title = e.target.value;
      this.setState(() => ({ title }));
   }

   setBody = (e) => {
      e.preventDefault();
      const body = e.target.value;
      this.setState(() => ({ body }));    
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

   render() {
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
               <textarea 
                  type="text" 
                  onChange={this.setBody} 
                  value={this.state.body}
                  className="textarea input-group__item"
                  placeholder="Post Body"
                  />
               <div>
                  <button className="button button--standard">Submit</button>              
               </div>
            </form>
         </div>   
      )
   }
}
