import React from 'react';

var Review_Box = React.createClass({
   render: function() {
       return (
           <div id="review">
                <p>{this.props.review.text} - {this.props.review.reviewee}</p>
            </div>
        )
   } 
});

module.exports = Review_Box;