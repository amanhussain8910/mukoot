import React from 'react';
import Banner from '../components/Banner';
import HomeAbout from '../components/HomeAbout';
import HomeProducts from '../components/HomeProducts';

const Home = () => {
    return (
        <>
            <Banner />
            <HomeAbout />
			<HomeProducts />
        </>
    )
}

export default Home