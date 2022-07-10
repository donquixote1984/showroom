import React, {useState} from 'react';
import logo from './logo.svg';

import MeshViewer from './components/MeshViewer';
import AssetStore from './components/AssetStore'
import Controls from './components/Controls';
import Previews from './components/Previews';

import {RenderContext, ParamContext, initRenderContext} from './utils/context';
import {commonParams} from './data/params';


function App() {
    const [renderContext, setRenderContext] = useState(initRenderContext);

    const [paramContext, setParamContext] = useState(
        commonParams
    )

  return (
    <RenderContext.Provider value={{renderContext, setRenderContext}}>
    <ParamContext.Provider value={{paramContext, setParamContext}}>
    <div className="App">
       <div className='d-flex h-100'>
        <div id='asset-viewer' className="d-flex h-100 flex-column">
           <MeshViewer />
           <AssetStore />
        </div>
        
        <div className="flex-fill d-flex flex-column" id='ctrl-panel'>
            <Previews />
            <Controls />
        </div>
    </div>
    </div>
    </ParamContext.Provider>
    </RenderContext.Provider>
  );
}

export default App;
