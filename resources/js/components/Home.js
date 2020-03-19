import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import useSSREffect from '../hooks/useSSREffect'
import { useSelector } from 'react-redux'
const Home = ({ packages }) => {
    const [abc, setAbc] = useState('laravelTest');
    const store = useSelector(state => state);
    
    useSSREffect(()=>{
        setAbc('useEffect는 적용어케됨?')
    },[])
    return(
        <div>
            <p>hello home good</p>
            <p>store에서 가져온 값 {store.packages.test}</p>
            <h1>{abc}</h1>
            <Link 
                to={`/react/packages`}>
                아무튼어디론가가버리기
            </Link>
        </div>
    )
}

export default Home;