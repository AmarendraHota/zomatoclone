import React from 'react'
import './header.css';

const Header = () => {
    return (
        <div className='max-width header'>

            <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="Zomato-logo" className='header-logo' />
            <div className="header-right">
                <div className="header-location-search-container">
                    <div className="location-wrapper">
                        <div className="location-icon-name">
                            <i className="fa fa-map-marker absolute-center location-icon"></i>
                            <div>Bangalore</div>
                        </div>
                        <i className="fa fa-caret-down absolute-center"></i>
                    </div>
                    <div className='location-search-separator'></div>
                    <div className='header-searchbar'>
                        <i className="fa fa-search absolute-center search-icon"></i>
                        <input placeholder='Search for restaurant,cuisine or a dish' className='search-input' />
                    </div>
                </div>
                <div className='profile-wrapper'>
                    <img src='https://b.zmtcdn.com/images/logo/zomato_logo_2017.png' alt='profile' className='header-profile-image' />
                    <span className='header-username'>Amarendra</span>
                    <i className='fa fa-caret-down absolute-center profile-option-icon'></i>
                </div>
            </div>
        </div>
    );
};

export default Header;
