import React, {useContext, useState} from 'react';
import {asset1, asset2} from '../data/assetData';
import event from '../utils/events';
import {commonParams} from '../data/params';
import {RenderContext, ParamContext, initRenderContext} from '../utils/context';
import {stop} from '../utils/timer';

export default function AssetStore() {

	const {renderContext, setRenderContext} = useContext(RenderContext);
	const {paramContext, setParamContext} = useContext(ParamContext);
	const [currentAsset, setCurrentAsset] = useState("asset1");
	const [currentId, setCurrentId] = useState();
	const onAssetClick = (asset) => {
		setCurrentId(asset.id)
		event.emit('load', asset.path);
		stop();
		if (Array.isArray(asset.params)) {
			setParamContext([...commonParams, ...asset.params])
		} else {
			setParamContext([...commonParams])
		}

		setRenderContext({...initRenderContext, id: asset.id, mock: asset.mock, proj: asset.proj});
	};

	const switchAsset = (asset) => {
		setCurrentAsset(asset);
	}
	return (
		<div id='asset-store'>
			<div className='asset-types'>
				<ul>
					<li>
						<a className={currentAsset==='asset1'? 'active': ''} href="#" onClick={e => switchAsset('asset1')}>CE</a>
					</li>
					<li>
						<a className={currentAsset==='asset2'? 'active': ''} href='#' onClick={e => switchAsset('asset2')}>Furniture</a></li>
				</ul>
			</div>
			<div className='asset-details'>
			{
				currentAsset == 'asset1' &&
			<ul>
				{
					asset1.map(asset => (
						<li className="asset" key={asset.path}>
							<a className={currentId == asset.id ? 'active' : ''} href={null} onClick={e => onAssetClick(asset)}>
								<img src={'thumbnails/' + asset.thumbnail} className='asset-image'/>
								<div className='asset-name'>{asset.name}</div>
							</a>
						</li>
					))
				}
			</ul>
			}
			{
				currentAsset == 'asset2' &&
			<ul>
				{
					asset2.map(asset => (
						<li className="asset" key={asset.path}>
							<a href={null} onClick={e => onAssetClick(asset)}>
								<img src={'thumbnails/' + asset.thumbnail} className='asset-image'/>
								<div className='asset-name'>{asset.name}</div>
							</a>
						</li>
					))
				}
			</ul>
			}
			</div>
		</div>
	);
}