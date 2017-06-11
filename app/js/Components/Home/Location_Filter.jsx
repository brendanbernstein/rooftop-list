import React from 'react';

import Search from './Search_Filter.jsx';
import FilterBox from './Type_Filter.jsx';

export default class LocationFilter extends React.Component{
    render() {
        return (
            <div>
                <Search searchText={this.props.searchText} handleSearchTextInput={this.props.onSearchTextInput}/>
                <div className="filter-type-box">
                    {
                        this.props.roofTypes.map(function(filter, index) {
                            return (
                                <FilterBox handleLocationTypeInput={this.props.handleLocationTypeInput} index={index} filter={filter} />
                            )
                        }, this)
                    }
                </div>
                <div className="filter-location-box">
                    <p>Location </p>
                    {
                        this.props.locationFilters.map(function(filter, index) {
                            return (
                                <FilterBox handleLocationTypeInput={this.props.handleLocationTypeInput} index={index} filter={filter} />
                            )
                        }, this)
                    }
                </div>
            </div>
        )
    }

};
