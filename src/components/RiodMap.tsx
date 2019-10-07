
import React, { Component, ComponentState } from 'react';
import * as ReactDOM from 'react-dom';
import { WebMap, Map } from '@esri/react-arcgis';
import { MapProps } from '@esri/react-arcgis/dist/esm/components/MapComposites';
import esriConfig from "esri/config";


export interface RiodMapProps extends MapProps {
    layerDefs?: any;
    userIdentity?: string;
    onMarkerClick: (id: number) => void;
    proxyUrl?: string;
}

class RiodMap extends Component<RiodMapProps, ComponentState>  {
    constructor(props: RiodMapProps) {
        super(props);

        this.state = {
            id: props.id,
            userIdentity: props.userIdentity,
            map: null,
            view: null,
            layerDefs: props.layerDefs
        };

        esriConfig.request.proxyUrl = "";

    }

    //Handler for when the map is loaded. We attach the click handler event here.
    handleMapLoad = (map: any, view: any) => {
        this.setState({ map, view });
        view.on('click', (evt: any) => {
            view.hitTest(evt.screenPoint).then((response: { results: any[]; }) => {
                if (response.results.length) {
                    for (var i = 0; i < response.results.length; i++) {
                        let result = response.results[i];
                        let idField = result.graphic.layer.objectIdField;
                        this.props.onMarkerClick(result.graphic.attributes[idField]);
                    }
                }
            });
        });
        this.filterMap();
    }

    //function to filter the map, based on the passed in properties
    filterMap = () => {
        //iterate over the layers definitions
        for (var i = 0; i < this.state.layerDefs.length; i++) {
            let definition = this.state.layerDefs[i];
            //find the layer by title
            var layer = this.state.view.map.allLayers.find(function (layer: any) {
                return layer.title === definition.title;
            });
            //apply the definitions
            layer.definitionExpression = definition.where;          
        }
    }

    componentDidUpdate = () => {
        this.filterMap();
    }

    render() {
        return (            
            <WebMap id={this.state.id}  onLoad={this.handleMapLoad} />
        );
    }
}

export default RiodMap;