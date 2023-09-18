import React from 'react';
import '../zyroStories/ZyroStories.css';
import { zyroStoriesArray } from '../../zyroStories'

const TabContent1 = () => {
    let client = zyroStoriesArray.slice(0, 3)
    
    return (
        <div className='client'>
            {
                client.map((ele) =>
                    <div className="clientBlock">
                        <p>{ele.text}</p>
                        <div className="link">
                            <div className="imgs">
                            </div>
                            <div className="link-text">
                                <h3>{ele.boldText}</h3>
                                <a href="#">{ele.link}</a>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};


const TabContent2 = () => {
    let tech =  zyroStoriesArray.slice(3, 8)

    return (
        <div className='client'>
            {
                tech.map((ele) =>
                    <div className="clientBlock">
                        <p>{ele.text}</p>
                        <div className="link">
                            <div className="imgs">

                            </div>
                            <div className="link-text">
                                <h3>{ele.boldText}</h3>
                                <a href="#">{ele.link}</a>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export { TabContent1, TabContent2 };