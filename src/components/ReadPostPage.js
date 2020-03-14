
import React from 'react';
import { getPostById } from '../selectors/posts';

class ReadPostPage extends React.Component {
   _isMounted = false;
   state = {
      externalData: null
   }

   componentDidMount() {
      this._isMounted = true;
      const postId = window.location.pathname.split('/read/')[1];
      this._asyncRequest = getPostById(postId).then(
         externalData => {
            this._asyncRequest = null;
            if(this._isMounted) {
               this.setState({externalData});
            }
         }
      )
   }

   componentWillUnmount() {
      this._isMounted = false;
   }

   render() {
      if(this._isMounted) {
         if(!this.state.externalData) {
            console.log('No such post exists');
            return (
               <div>
                  <h3> No post found </h3>
               </div>
            )            
         }
         else {
            return (
               <div>
                  <h1>{this.state.externalData.title}</h1>
               </div>
            )
         }
      }
      else {
         return (
            <div/>
         )
      }
   }
}

export { ReadPostPage as default }
