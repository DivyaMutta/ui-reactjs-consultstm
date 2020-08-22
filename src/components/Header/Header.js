import React from 'react';
import './Header.css';
import AppIcon from './app-icon.svg';

export default function Header() {
    return (
        <div className="App-header">
            <img className="App-logo" src={AppIcon} alt="logo" />
            <div className="App-title">Tradeshift Search</div>
        </div>
    );
}
