import "./components/config";

import React from 'react';
import ReactDOM from 'react-dom';
import RiodMap from './components/RiodMap';

//"744c380c - 7b55 - 45cf - a7b9 - 0ca599df1de4" 

ReactDOM.render(
    <div style={{ height: '100%' }}>
        <RiodMap id="d3fd6eda561447fd87aa3b536adb6443"
            onMarkerClick={id => console.log(id)}
            layerDefs={[{
                title: "Flooding",
                where:"OBJECTID in (1,2)"
            }]}
            proxyUrl="https://localhost:44310/proxy.ashx"
            userIdentity="d1a35479-0443-4db2-bca7-b84f2b59d680"
        >
        </RiodMap>
    </div>
    ,
    document.getElementById('root')
       
);