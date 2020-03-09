import React from 'react';
import { Link } from 'react-router-dom';
import { startLogout } from '../actions/auth';
import { connect } from 'react-redux';

export const Header = ({ startLogout }) => ( // props gets passed in, so just destructuring it
   <header className="header">
      <div className="content-container">
         <div className="header__content">
            <Link className="header__title" to="/dashboard">
               <h1>pBlog</h1>
            </Link>
            <button className="button button--link" onClick={startLogout}>Logout</button>
         </div>      
      </div>
   </header>
);

// Used to make testing more accessible.a1
// Will make it possible to trigger dispatch throught the test
// Passing props down into Header. Here props only contain startlogout
const mapDispatchToProps = (dispatch) => ({
   startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);