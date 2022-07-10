import React, {useContext} from 'react';
import assets from '../data/assetData';
import event from '../utils/events';
import {commonParams} from '../data/params';
import {RenderContext, ParamContext, initRenderContext} from '../utils/context';

export default function AssetStore() {

	const {renderContext, setRenderContext} = useContext(RenderContext);
	const {paramContext, setParamContext} = useContext(ParamContext);

	const onAssetClick = (asset) => {
		event.emit('load', asset.path);

		if (Array.isArray(asset.params)) {
			setParamContext([...commonParams, ...asset.params])
		} else {
			setParamContext([...commonParams])
		}

		setRenderContext({...initRenderContext, id: asset.id, mock: asset.mock, proj: asset.proj});
	};
	return (
		<div id='asset-store'>
			<ul>
				{
					assets.map(asset => (
						<li className="asset" key={asset.path}>
							<a href={null} onClick={e => onAssetClick(asset)}>
								<img src={'thumbnails/' + asset.thumbnail} className='asset-image'/>
								<div className='asset-name'>{asset.name}</div>
							</a>
						</li>
					))
				}
			</ul>
		</div>
	);
}