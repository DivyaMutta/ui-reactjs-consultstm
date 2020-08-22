import React, { useState } from 'react';
import './Search.css';

export default function Search({
    name,
    onChange,
    onSearch,
    errors
}) {
    const [value, setValue] = useState('');
    const handleChange = (event) => {
        setValue(event.target.value);
        onChange(event.target.value);
    };
    
    return (
        <div className="Search-input-wrapper">
            <input className="Search-input" type="text"
                name={name}
                value={value}
                onChange={handleChange}
                onKeyDown={onSearch}
                placeholder="Search..." />
            { errors && errors[name] && errors[name].length > 0 ? <span className="error">{errors[name]}</span> : null }
        </div>
    );
}
