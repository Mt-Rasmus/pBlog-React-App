
import React from 'react';
import moment from 'moment';

export default class PostForm extends React.Component {
   // local component state:
   constructor(props) {
      super(props);
      this.state = {
         title: props.post ? props.post.title: '',
         body: props.post ? props.post.body: '',
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
            <form onSubmit={this.onSubmit}>
               <input type="text" onChange={this.setTitle} value={this.state.title}/>
               <textarea type="text" onChange={this.setBody} value={this.state.body}/>
               <button>Submit post</button>
            </form>
         </div>   
      )
   }
}
