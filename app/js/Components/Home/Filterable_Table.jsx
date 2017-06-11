import React from 'react';
var $ = require('jquery');
var ReactBootstrap = require('react-bootstrap');
var Modal = ReactBootstrap.Modal;
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

import LocationFilter from './Location_Filter.jsx';
import LocationFilterExecute from './Filter_Execute.jsx';
import RoofPopUp from '../RoofPage/RoofPopUp.jsx'

var FilterClassTable = React.createClass({
     getInitialState: function () {
        return {
            searchText: '',
            roofFilters: ['good_view', 'pool', 'live_music', 'short_wait'], //checked list
            locationFilters: ['TriBeCa', 'West_Village', 'East_Village','SoHo','Uptown'],
            roofs: [],
            clickedFilters: {},
            clickedRoofName: '',
            clickedRoof: {},
            show: false,
            touristy: null,
            good_view: null,
            live_music: null,
            short_wait: null,
            pool: null
        }
    },

    showModal() {
        this.setState({show: true});
    },

    hideModal() {
        this.setState({show: false});
    },

    handleSearchTextInput: function (event) {
        this.setState({
            searchText: event.target.value
        })
    },

    handleLocationTypeInput: function (event) {
        var url = "//rooftop-list-brendanbernstein.c9users.io/api/roofs/";
        var key = event.target.value
        if (event.target.checked == true) {
            var val = event.target.checked
            this.state.clickedFilters[key] = val
        } else if (event.target.checked == false) {
            var val = null
            delete this.state.clickedFilters[key]
        }
        var obj2 = this.filterParameters(key, val)
        this.setState(obj2, this.loadClassesFromServer(obj2))
    },
    
    filterParameters: function(key, value) {
        let obj = {
            // touristy: this.state.touristy,
            // good_view: this.state.touristy,
            // live_music: this.state.touristy,
            // short_wait: this.state.touristy,
            // pool: this.state.touristy
        }
        console.log(obj)
        obj[key] = value
        return obj
    },
    
    handleNameClick: function(event) {
        this.setState({
            clickedRoofName: event.name,
            clickedRoof: event,
            show: true
        })
    },

    componentDidMount: function () {
        let obj = {
            // touristy: this.state.touristy,
            // good_view: this.state.touristy,
            // live_music: this.state.touristy,
            // short_wait: this.state.touristy,
            // pool: this.state.touristy
        }
        this.loadClassesFromServer(obj);
    },
    
    componentDidUpdate: function () {
    },

    loadClassesFromServer: function (obj2) {
        let url = "//rooftop-list-brendanbernstein.c9users.io/api/roofs/";
        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'json',
            data: obj2,
            success: function (data) {
                this.setState({roofs: data})
            }.bind(this),
        })
    },

    render: function () {
         return (
            <div>
                <div className="location-type-filter-container">
                    <LocationFilter
                        searchText = {this.state.searchText}
                        roofTypes = {this.state.roofFilters}
                        locationFilters = {this.state.locationFilters}
                        onSearchTextInput = {this.handleSearchTextInput}
                        handleLocationTypeInput = {this.handleLocationTypeInput}
                    />
                </div>
                <div className="locations">
                    <LocationFilterExecute
                        searchText = {this.state.searchText}
                        classTypes = {this.state.classTypes}
                        data={this.state.roofs}
                        handleNameClick = {this.handleNameClick}
                    />
                </div>
                <div className="roofpopup">
                    <RoofPopUp show={this.state.show} roof={this.state.clickedRoof} handleHide={this.hideModal} handleShow={this.showModal}/>
                </div>
            </div>
         );
    }
});

module.exports = FilterClassTable;
