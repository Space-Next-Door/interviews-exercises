import React, { useContext} from 'react';
import {HomeLayout} from "../MainLayout";
import SquareGuides from "../modules/home/components/SquareGuides";
import SearchHeader from "../modules/home/components/SearchHeader";
import MobileSearch from "../modules/search/mobile";
import { AppContext } from "../context/app.context"


const Home = () => {
    const state = useContext(AppContext);
    state.isMobileSearchActive
    
    return (
        state.isMobileSearchActive ? 
        <HomeLayout>
            <SearchHeader />
             <SquareGuides />
        </HomeLayout>
        : <MobileSearch />
    )
}

export default Home

