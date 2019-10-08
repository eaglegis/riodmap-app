import "./components/config";

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
            proxyUrl="https://localhost:44310/proxy.ashx"
               
        >
        </RiodMap>
    </div>
    ,
    document.getElementById('root')
       
);