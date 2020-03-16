
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Provider allows you to provide the store to all components
import AppRouter, {history} from './routers/AppRouter';
import configureStore from './store/configureStore';
import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css'; // module to set browser styling to a universal default
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'; 
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';
import { initSetPosts } from './actions/posts';

const store = configureStore();

const jsx = (
   <Provider store={store}> {/* Setting up the store we want to provide to all components */}
      <AppRouter />   
   </Provider>
);

let hasRendered = false;
const renderApp = () => {
   if(!hasRendered) {
      ReactDOM.render(jsx, document.getElementById("app"));
      hasRendered = true;
   }
}

ReactDOM.render(<LoadingPage />, document.getElementById("app"));

firebase.auth().onAuthStateChanged((user) => {
   const postId = window.location.pathname.split('/')[1];
   if (user) {
      // we do the dispatch here instead of in startLogin
      // so that after a refresh and the user is implicitly logged in already
      // the posts will appear
      store.dispatch(login(user.uid));
      store.dispatch(initSetPosts()).then(() => {
         renderApp();
         if (history.location.pathname === '/') {
            history.push('/dashboard');
         }
      });
   } else {
      store.dispatch(logout());
      renderApp();
      if(postId !== 'read')
         history.push('/');
   }
});

