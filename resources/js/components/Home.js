import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ packages }) => {
    
    return(
        <div>
            hello home good
            <Link 
                to={`/react/packages`}>
                아무튼어디론가가버리기
            </Link>
        </div>
    )
}

export default Home;