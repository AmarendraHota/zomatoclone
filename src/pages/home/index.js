import React, { useState } from 'react';
import Header from '../../commponents/common/header';
import TabOption from '../../commponents/common/tabOption';
import Footer from '../../commponents/common/footer';
// import { tab } from '@testing-library/user-event/dist/tab';
import Delivery from '../../commponents/delivery';
import DiningOut from '../../commponents/diningOut';
import NightLife from '../../commponents/nightLife';

const HomePage = () => {
    const [activeTab, setActiveTab] = useState("Delivery");

    return (
        <div>
            <Header />
            <TabOption activeTab={activeTab} setActiveTab={setActiveTab} />
            {getCorrectScreen(activeTab)}
            <Footer />
        </div>
    )
};

const getCorrectScreen = (tab) => {
    switch (tab) {
        case "Delivery":
            return <Delivery />;
        case "DiningOut":
            return <DiningOut />;
        case "NightLife":
            return <NightLife />;
        default:
            return <Delivery />;
    }
};

export default HomePage; 