import React,{ useState, useEffect } from 'react';
import Home from './components/Home';
import Packages from './components/Packages';
import { withRouter, Route, Link } from 'react-router-dom';

const App = ({ packages, location }) => {
    return(
        <div>
            <Link
                to='/react'>
                    <span>
                        아무튼 돌아가기
                        {location.pathname}
                    </span>
            </Link>
            <Route exact path='/react' render={props => <Home packages={packages}{...props} />} />
            <Route 
                path="/react/packages/:type"
                render={props => <Packages packages={packages}{...props}/>}
            />
        </div>
    )
}
export default withRouter(App);