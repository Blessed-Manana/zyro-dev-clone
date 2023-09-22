import React from 'react';
import "../websiteTemplates/WebsiteTemplates.css"
import { templatesArray } from '../../templates';
// import {  } from "react-icons/fa6";
import { FaRegEye } from 'react-icons/fa'
// import { AiOutlineEye } from "react-icons/fa";


const TabContent1 = () => {
    let popularTemplates = templatesArray.slice(0, 3)

    return (
        <div className='templatesTab'>
            {
                popularTemplates.map((ele, index) => (
                    <div className="webCard" key={index}>
                        <div className="cardHead">
                            <div className="cardCircle"></div>
                            <div className="cardCircle"></div>
                            <div className="cardCircle"></div>
                        </div>
                        <div className="overLayBox">
                            <div className="weblink">
                                <img src={ele.image} alt={ele.image} />
                            </div>
                            <a href={ele.link} className="overLay">
                                {/* <AiOutlineEye/> */}
                                <FaRegEye/>
                            </a>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};


const TabContent2 = () => {
    let portfolio = templatesArray.slice(3, 6)
    
    return (
        <div className='templatesTab'>
            {
                portfolio.map((ele) => (
                    <div className="webCard">
                        <div className="cardHead">
                            <div className="cardCircle"></div>
                            <div className="cardCircle"></div>
                            <div className="cardCircle"></div>
                        </div>
                        <div className="overLayBox">
                            <div className="weblink">
                                <img src={ele.image} alt={ele.image} />
                            </div>
                            <a href={ele.link} className="overLay">
                                <FaRegEye/>
                            </a>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

const TabContent3 = () => {
    let tempInfo = templatesArray.slice(6, 9)

    return (
        <div className='templatesTab'>
            {
                tempInfo.map((ele) => (
                    <div className="webCard">
                        <div className="cardHead">
                            <div className="cardCircle"></div>
                            <div className="cardCircle"></div>
                            <div className="cardCircle"></div>
                        </div>
                        <div className="overLayBox">
                            <div className="weblink">
                                <img src={ele.image} alt={ele.image} />
                            </div>
                            <a href={ele.link} className="overLay">
                                {/* <AiOutlineEye/> */}
                                <FaRegEye/>
                            </a>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};


const TabContent4 = () => {
    let tempInfo = templatesArray.slice(9, 12)

    return (
        <div className='templatesTab'>
            {
                tempInfo.map((ele) => (
                    <div className="webCard">
                        <div className="cardHead">
                            <div className="cardCircle"></div>
                            <div className="cardCircle"></div>
                            <div className="cardCircle"></div>
                        </div>
                        <div className="overLayBox">
                            <div className="weblink">
                                <img src={ele.image} alt={ele.image} />
                            </div>
                            <a href={ele.link} className="overLay">
                                {/* <AiOutlineEye/> */}
                                <FaRegEye/>
                            </a>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

const TabContent5 = () => {
    let tempInfo = templatesArray.slice(12, 15)

    return (
        <div className='templatesTab'>
            {
                tempInfo.map((ele) => (
                    <div className="webCard">
                        <div className="cardHead">
                            <div className="cardCircle"></div>
                            <div className="cardCircle"></div>
                            <div className="cardCircle"></div>
                        </div>
                        <div className="overLayBox">
                            <div className="weblink">
                                <img src={ele.image} alt={ele.image} />
                            </div>
                            <a href={ele.link} className="overLay">
                                {/* <AiOutlineEye/> */}
                                <FaRegEye/>
                            </a>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

const TabContent6 = () => {
    let tempInfo = templatesArray.slice(15, 18)

    return (
        <div className='templatesTab'>
            {
                tempInfo.map((ele) => (
                    <div className="webCard">
                        <div className="cardHead">
                            <div className="cardCircle"></div>
                            <div className="cardCircle"></div>
                            <div className="cardCircle"></div>
                        </div>
                        <div className="overLayBox">
                            <div className="weblink">
                                <img src={ele.image} alt={ele.image} />
                            </div>
                            <a href={ele.link} className="overLay">
                                {/* <AiOutlineEye/> */}
                                <FaRegEye/>
                            </a>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

const TabContent7 = () => {
    let tempInfo = templatesArray.slice(18, 21)

    return (
        <div className='templatesTab'>
            {
                tempInfo.map((ele) => (
                    <div className="webCard">
                        <div className="cardHead">
                            <div className="cardCircle"></div>
                            <div className="cardCircle"></div>
                            <div className="cardCircle"></div>
                        </div>
                        <div className="overLayBox">
                            <div className="weblink">
                                <img src={ele.image} alt={ele.image} />
                            </div>
                            <a href={ele.link} className="overLay">
                                {/* <AiOutlineEye/> */}
                                <FaRegEye/>
                            </a>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export { TabContent1, TabContent2, TabContent3, TabContent4, TabContent5, TabContent6, TabContent7 };