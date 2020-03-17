import React from 'react';
import { Link } from 'react-router-dom';

const Packages = ({ packages }) => {
    return(
        <div>
            <p>hello 패키지 굿 good</p>
            <Link 
                to={`/react/packages`}>
                아무튼어디론가가버리기
            </Link>
        </div>
    )
}

export default Packages;