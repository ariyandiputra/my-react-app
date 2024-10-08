import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import * as Icon from 'react-bootstrap-icons';

const Widemenu = () => {
    const [buttonState, setButtonState] = useState({
        homeActive:false,
        feedActive:false,
        newsActive:false,
        youActive:false
    });

    const handleButtonState = (buttonName) => {
        setButtonState({
            homeActive: buttonName === 'home',
            feedActive: buttonName === 'feed',
            newsActive: buttonName === 'news',
            youActive: buttonName === 'foryou'
        });
    };
    
    return (
        <div className="Widemenu-stick position-fixed">
            <ul class="list-group"> 
                <li class="list-group-item active" aria-current="true">
                    <Link type="button" class="btn btn-secondary border-0 btn-dark rounded" to="/" onClick={() => handleButtonState('home')}>
                        {buttonState.homeActive.toString() === 'true' ? (<Icon.HouseDoorFill size={20}/>) : (<Icon.HouseDoor size={20}/>)}
                        <br/><span>Beranda</span>
                    </Link>
                </li>
                <li class="list-group-item">
                    <Link type="button" class="btn btn-secondary border-0 btn-dark rounded" to="/feeds" onClick={() => handleButtonState('feed')}>
                        {buttonState.feedActive.toString() === 'true' ? (<Icon.FileEarmarkPlayFill size={20}/>) : (<Icon.FileEarmarkPlay size={20}/>)}
                        <br/><span>Kabar</span>
                    </Link>
                </li>
                <li class="list-group-item">
                    <Link type="button" class="btn btn-secondary border-0 btn-dark rounded" to="/news" onClick={() => handleButtonState('news')}>
                        {buttonState.newsActive.toString() === 'true' ? (<Icon.GridFill size={20}/>) : (<Icon.Grid size={20}/>)}
                        <br/><span>Berita</span>
                    </Link>
                </li>
                <li class="list-group-item">
                    <Link type="button" class="btn btn-secondary border-0 btn-dark rounded" to="/foryou"  onClick={() => handleButtonState('foryou')}>
                        {buttonState.youActive.toString() === 'true' ? (<Icon.PersonFill size={20}/>) : (<Icon.Person size={20}/>)}
                        <br/><span>Anda</span>
                    </Link>
                </li>
            </ul>
        
        </div>
    );
};

export default Widemenu