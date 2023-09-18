import React from 'react';
import '../zyroStories/ZyroStories.css'
import { Box, Grid } from '@mui/material';
import { Tabs, Tab, Paper } from '@mui/material';
import { TabContent1, TabContent2 } from '../zyroStories/TabContent1';

const ZyroStories = () => {

    const [activeTab, setActiveTab] = React.useState(0);

    const handleTabChange = (event, newTabIndex) => {
        setActiveTab(newTabIndex);
    };

    


    return (
        <div className="zyroStories">
            <h2> Zyro success stories </h2>
            <p> Join over 250,000 small business owners. Find out what you can do with a Zyro website </p>
            <div className="testimonials">
                <Paper>
                    <Tabs
                        value={activeTab}
                        onChange={handleTabChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        <Tab label="Clients" className="custom-tab"/>
                        <Tab label="Tech expersts" className="custom-tab"/>
                    </Tabs>
                    {/* Content for each tab */}
                    {activeTab === 0 && <TabContent1 />}
                    {activeTab === 1 && <TabContent2 />}
                </Paper>
            </div>
        </div>
    );
}

export default ZyroStories;