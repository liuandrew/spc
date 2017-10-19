import React from 'react'
import './HomeView.scss'
import { Link } from 'react-router'

export const HomeView = () => (
  <div>
    <h4>Welcome!</h4>
    <div className="login-container">
    	<div className="login-button btn btn-primary">Login</div>
    	<Link to="/spc">Or continue without logging in ></Link>
    </div>
  </div>
)

export default HomeView
