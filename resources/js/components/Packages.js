import React from 'react';
import { Link } from 'react-router-dom';

const Packages = ({ packages }) => {
    console.log('패키지 굿굿',packages);
    return(
        <div>
            hello 패키지 굿 good
            <Link 
                to={`/react/packages`}>
                아무튼어디론가가버리기
            </Link>
        </div>
    )
}

export default Packages;