import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    Marker,
} from 'react-google-maps';

import s from './Google.scss';

const BasicMap = withScriptjs(withGoogleMap(() =>
    <GoogleMap
        defaultZoom={12}
        defaultCenter={{lat : parseFloat(40.177574), lng : parseFloat(44.512560)}}
    >
        <Marker position={{lat : 40.177574, lng : 44.512560}}/>
    </GoogleMap>,
));

class Maps extends React.Component {

    render() {
        return (
            <div>
                <div className={s.MapContainer}>
                    <BasicMap
                        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyB7OXmzfQYua_1LEhRdqsoYzyJOPh9hGLg"
                        loadingElement={<div style={{height : 'inherit', width : 'inherit'}}/>}
                        containerElement={<div style={{height : 'inherit'}}/>}
                        mapElement={<div style={{height : 'inherit'}}/>}
                    />
                </div>
            </div>
        );
    }
}

export default withStyles(s)(Maps);
