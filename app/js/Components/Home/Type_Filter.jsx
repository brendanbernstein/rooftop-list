import React from 'react';

export default class filterBox extends React.Component{
    render() {
        return (
            <div>
                <label className="filter"><input key={this.props.index} onChange={this.props.handleLocationTypeInput} className="filter-check" type="checkbox" name="checkbox" value={this.props.filter} />{this.props.filter}</label>
            </div>
            )
    }
};