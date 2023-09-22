import React from 'react';
import "../websiteTemplates/WebsiteTemplates.css"
import { Tabs, Tab, Paper } from '@mui/material';
import { TabContent1, TabContent2, TabContent3, TabContent4, TabContent5, TabContent6, TabContent7 } from '../websiteTemplates/Templates';


const WebsiteTemplates = () => {

    const [activeTab, setActiveTab] = React.useState(0);

    const handleTabChange = (event, newTabIndex) => {
        setActiveTab(newTabIndex);
    };

    return (
        <div className="WebsiteTemplates">
            <h2>Fully customizable website templates</h2>
            <p>Designer-made templates built to meet your needs. Choose a template and edit anything – change colors, fonts, images, and more. No coding skills needed.</p>
            <div className="webTemplates">
                <Paper>
                    <Tabs
                        value={activeTab}
                        onChange={handleTabChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        <Tab label="Popular templates" className="custom-tab" />
                        <Tab label="Portfolio" className="custom-tab" />
                        <Tab label="eCommerce" className="custom-tab" />
                        <Tab label="Blog" className="custom-tab" />
                        <Tab label="Business" className="custom-tab" />
                        <Tab label="Resume" className="custom-tab" />
                        <Tab label="Events" className="custom-tab" />
                    </Tabs>
                    {/* Content for each tab */}
                    {activeTab === 0 && <TabContent1 />}
                    {activeTab === 1 && <TabContent2 />}
                    {activeTab === 2 && <TabContent3 />}
                    {activeTab === 3 && <TabContent4 />}
                    {activeTab === 4 && <TabContent5 />}
                    {activeTab === 5 && <TabContent6 />}
                    {activeTab === 6 && <TabContent7 />}
                </Paper>
            </div>
            <div className="webBtn">
                <button className='webButton'>Explore Templates</button>
            </div>
        </div>
    );
}

export default WebsiteTemplates;