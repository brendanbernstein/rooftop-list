import React, {Component} from 'react';

import Location_Box from './Location_Box.jsx';

var LocationFilterExecute = React.createClass({
    
    render: function() {
        let filteredLocations = this.props.data.filter(
            (location) => {
                return location.name.toLowerCase().indexOf(this.props.searchText.toLowerCase()) !== -1;
            }
        );
        return (
            <div id="bigbox">
                {
                    filteredLocations.map(function(roof, index) {
                        return (
                            <Location_Box handleNameClick={this.props.handleNameClick} roof={roof} key={index} />
                        )
                    }, this)
                }
            </div>
        )
        
    }
});

module.exports = LocationFilterExecute;