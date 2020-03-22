
import React from 'react';
import { getPostById } from '../selectors/posts';
import moment from 'moment';

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
            return (
               <div>
                  <h3> No post found </h3>
               </div>
            )            
         }
         else {
            const adjustedHTMLstring = this.state.externalData.body.replace("<p></p>", "</br>");
            return (
               <div className="content-container">
                  <h1 className="headline-container">{this.state.externalData.title}</h1>
                  <div className="read-page-container" dangerouslySetInnerHTML={{ __html: adjustedHTMLstring }}></div>
                  <div className="list-item__sub read-page-container"> 
                     <p className="list-item__sub-text"> Last Edited: </p>
                     <p>
                        {moment(this.state.externalData.postTime).format('MMMM Do YYYY, h:mm a')}
                     </p>
                  </div>                    
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
