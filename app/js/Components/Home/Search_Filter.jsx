import React from 'react';

export default class Search extends React.Component {
    render() {
        return (
            <div>
                <input type="text" value={this.props.searchText} onChange={this.props.handleSearchTextInput} />
            </div>
        )
    }
};
