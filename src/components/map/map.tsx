import React from 'react';

export class Map extends React.Component {

    // @ts-ignore
    componentDidUpdate(prevProps, prevState) {
        // @ts-ignore
        if (prevProps.google !== this.props.google) {
            this.loadMap();
        }
    }

    loadMap() {
        // @ts-ignore
        if (this.props && this.props.google) {
            // google is available
            // @ts-ignore
            const { google } = this.props;
            const maps = google.maps;
            // @ts-ignore
            const mapRef = this.refs.map;
            // @ts-ignore
            const node = ReactDOM.findDOMNode(mapRef);

            let zoom = 14;
            let lat = 37.774929;
            let lng = -122.419416;
            const center = new maps.LatLng(lat, lng);
            const mapConfig = Object.assign({}, {
                center: center,
                zoom: zoom
            })
            // @ts-ignore
            this.map = new maps.Map(node, mapConfig);
        }
    }

    render() {
        return (
            <div ref='map'>
                Loading map...
        </div>
        )
    }
}