import { Map } from '@esri/react-arcgis';
import React from 'react';
import ReactDOM from 'react-dom';
import RiodMap from './components/RiodMap';


ReactDOM.render(
    <div style={{ height: '100%' }}>
        <RiodMap id="d3fd6eda561447fd87aa3b536adb6443"
            onMarkerClick={id => console.log(id)}
            layerDefs={[{
                title: "Flooding",
                where:"OBJECTID in (1,2)"
            }]}
        >
        </RiodMap>
    </div>
    ,
    document.getElementById('root')
       
);