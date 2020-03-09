import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => ( // destructuring startLogin from props
   <div className="box-layout">
      <div className="box-layout__box">
         <h1 className="box-layout__title">pBlog</h1>
         <p>Write what you want. <br/>Easy, simple.</p>
         <button className="button" onClick={startLogin}>Login with Google</button>
      </div>   
   </div>
);

// Used to make testing more accessible.
// Will make it possible to trigger dispatch throught the test
// Passing props down into Header. Here props only contain startlogout
const mapDispatchToProps = (dispatch) => ({
   startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);