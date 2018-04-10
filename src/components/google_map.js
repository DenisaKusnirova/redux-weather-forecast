import React, { Component } from 'react'

class GoogleMap extends Component {
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        })
    }
    render() {
        return (
            // ref allows us to give us a direct reference to a html
            // element that has been rendered 
            <div ref="map"/>
        )
    }
}

export default GoogleMap