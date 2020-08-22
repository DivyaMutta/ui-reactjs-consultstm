import React from 'react';
import './SearchResults.css';

export default function SearchResults({
    searchText,
    searchResults,
    onClick
}) {
    const cn = 'Global-search-results';
    return (
        searchResults && searchResults.length > 0 && <div className={cn}>
            <h3 className={`${cn}-header`}>Search Results for "{searchText}"...</h3>
            <div className={`${cn}-container`}>
                <ul className={`${cn}-list`}>
                    {searchResults.map(result => (
                        <li className={`${cn}-item`} key={result.id} onClick={() => onClick(result.id)}>
                            <h4 className={`${cn}-company_name`}>{result.name}</h4>
                            <label className={`${cn}-company_address`}>{result.address}</label>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
