import React, { Component } from 'react';

class GoogleMap extends Component {
    // Life cycle method called called after thsi component has been rendered to the screen
    // mainly for 3rd party library that dont understand react ecosystem
    componentDidMount() {
        new GoogleMap.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
               lat: this.props.lat,
               lng: this.props.lon 
            }
        });
    }
    render(){
        // with ref we can reference this element using this.ref.map
        return (
            <div ref="map"></div>
        );
        
    }
}

export default GoogleMap;