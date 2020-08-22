import React, { Component } from 'react';
import './GlobalSearch.css'
import { Dropdown, Search, SearchResults, CompanyInfo } from '../index';
import { getCountries, getSearchResults } from '../../api';
import { Modal, Form } from 'react-tradeshift-ui';

export default class GlobalSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            country: null,
            searchText: null,
            searchResults: [],
            isLoadingResults: false,
            shouldModalOpen: false,
            selectedSearchResult: {},
            errors: {
                country: '',
                searchText: ''
            }
        };

        [
            'onDropdownChange',
            'onSearchTextChange',
            'onSearch',
            'onSearchResultClick',
            'onModalClose',
            'validateFormFields'
        ].forEach(fn => this[fn] = this[fn].bind(this));
    }

    componentDidMount() {
        getCountries().then(countries => {
            this.setState({ countries });
        });
    }

    onDropdownChange(country) {
        this.validateFormFields('country');
        this.setState({ country, searchResults: [] },
            () => this.validateFormFields('country'));
    }

    onSearchTextChange(searchText) {
        this.setState({ searchText, searchResults: [] },
            () => this.validateFormFields('searchText'));
    }

    validateFormFields(validateField) {
        const { country, searchText } = this.state;
        let errors = {}, isValid = true;
        
        if (!validateField || validateField === 'country') {
            if (!country) {
                errors['country'] = 'Please select country';
                isValid = false;
            } else
                errors['country'] = '';
        }
        if (!validateField || validateField === 'searchText') {
            if (!searchText) {
                errors['searchText'] = 'Please select search text';
                isValid = false;
            } else
                errors['searchText'] = '';
        }
        this.setState({ errors: {...this.state.errors, ...errors } });
        return isValid;
    }

    onSearch(event) {
        if (event.key === 'Enter') {
            if (this.validateFormFields()) {
                this.setState({ isLoadingResults: true });
                getSearchResults().then(searchResults => {
                    setTimeout(() => {
                        this.setState({ searchResults, isLoadingResults: false });
                    }, 1500);
                })
            }
        }
    }

    onSearchResultClick(id) {
        let selectedSearchResult = {};
        if (id) {
            const { searchResults } = this.state;
            selectedSearchResult = searchResults.find(result => result.id === id);
        }
        this.setState({ shouldModalOpen: true, selectedSearchResult });
    }

    onModalClose() {
        this.setState({ shouldModalOpen: false, selectedSearchResult: {} });
    }

    render() {
        const {
            countries,
            searchText,
            searchResults,
            isLoadingResults,
            shouldModalOpen,
            selectedSearchResult,
            errors
        } = {...this.state};
        const cn = 'Global-search';

        return (
            <div className={cn}>
                <div className={`${cn}-header`}>
                    <h2>Tradeshift Global Search</h2>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua.
                    </div>
                </div>
                
                <Form>
                    <div className={`${cn}-form`}>
                        <div className={`${cn}-dropdown`}>
                            <Dropdown
                                name="country"
                                options={countries}
                                onChange={this.onDropdownChange}
                                errors={errors}
                            />
                        </div>
                        <div className={`${cn}-searchbar`}>
                            <Search
                                name="searchText"
                                onChange={this.onSearchTextChange}
                                onSearch={this.onSearch}
                                errors={errors}
                            />
                        </div>
                    </div>
                </Form>
                
                {isLoadingResults
                    ? <label>Loading search results...</label>
                    : <SearchResults
                        searchText={searchText}
                        searchResults={searchResults}
                        onClick={this.onSearchResultClick}
                    />}
                
                <Modal
                    title="Company Information"
                    isOpen={shouldModalOpen}
                    onClose={this.onModalClose}
                >
                    <main data-ts="Box">
                        <CompanyInfo companyInfo={selectedSearchResult} />
                    </main>
                </Modal>
            </div>
        );
    }
}
