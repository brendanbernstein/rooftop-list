import React from 'react';
var $ = require('jquery');

import Review_Box from './Review_Box.jsx';

var FetchReviews = React.createClass({
    getInitialState: function() {
        return {
            reviews: []
        }
    },
    
     componentDidMount: function () {
        var base_url = "//rooftop-list-brendanbernstein.c9users.io/api/reviews/";
        var id = this.props.roof.id;
        var url = base_url + id;
        this.loadClassesFromServer(url);
    },

    loadClassesFromServer: function (url) {
        $.ajax({
            url: url,
            dataType: 'json',
            success: function (data) {
                this.setState({reviews: data})
            }.bind(this),
        });
    },
    
   render: function() {
       let reviewList = this.state.reviews;
       return (
            <div id="review_box">
                {
                    reviewList.map((review, index) =>{
                        return (
                            <Review_Box review={review} key={index} />
                        )
                    })
                }
            </div>
        )
   } 
});

module.exports = FetchReviews