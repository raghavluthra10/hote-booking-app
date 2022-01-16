import React from 'react';
import ButtonComp from '../../components/button/ButtonComp';

const Home: React.FC = () => {

    const onClick = () => {
        console.log('ButtonComp')
    }

    return (
        <div >
            Home
        </div>
    );
};

export default Home;