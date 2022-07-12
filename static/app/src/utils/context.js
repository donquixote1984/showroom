import React from 'react';

export const RenderContext = React.createContext();
export const ParamContext = React.createContext();

export const initRenderContext = {
		mock: false,
		HD: true,
        capture: '360',
        focalLength: 0,
        lookDownRatio: 0, 
        frontLightColor: {r:255, g:255, b:255},
        frontLightIntensity: 1,
        backLightColor: {r:255, g:255, b:255},
        backLightIntensity: 1,
        environmentLightIntensity: 1,

        sofanum: 3,
        sofastyle: 0,

        cabSeed1: 1,
        cabSeed2: 1,

        dinnerSet: {
            table: 4,
            lamp: 1,
            chair: 2
        }
};