import React from 'react';
var ReactBootstrap = require('react-bootstrap');
var Modal = ReactBootstrap.Modal;
var Nav = ReactBootstrap.Nav;
var NavItem = ReactBootstrap.NavItem;

import FetchReviews from './Reviews.jsx';

var RoofPopUp = React.createClass({
    
    
    
    render: function() {
        return (
            <Modal
              show={this.props.show}
              onHide={this.props.handleHide}
              dialogClassName="custom-modal"
            >
                <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-lg">{this.props.roof.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{this.props.roof.description}</p>
                    <h3>Ranks</h3>
                    <div id="roof-stats">
                        <div id="roof-stat-box">
                            <p className="roof-stat">{this.props.roof.fun_rank}</p>
                            <p className="roof-stat-name">Fun rank</p>
                        </div>
                        <div id="roof-stat-box">
                            <p className="roof-stat">{this.props.roof.price_rank}</p>
                            <p className="roof-stat-name">Price rank</p>
                        </div>
                        <div id="roof-stat-box">
                            <p className="roof-stat">{this.props.roof.location_rank}</p>
                            <p className="roof-stat-name">Location rank</p>
                        </div>
                        <div id="roof-stat-box">
                            <p className="roof-stat">{this.props.roof.crowd_rank}</p>
                            <p className="roof-stat-name">Crowd rank</p>
                        </div>
                    </div>
                    <h3>Reviews</h3>
                    <FetchReviews roof={this.props.roof}/>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        )
    }
});

module.exports = RoofPopUp