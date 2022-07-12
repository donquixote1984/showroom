import React, {useState, useContext, useEffect} from 'react';
import {RenderContext} from '../utils/context';

export function Assets({assets}) {
	return (
		<div className='material-selection'>
			<ul className='material-shaders'>
				{assets.map(m => (
					<li key={m.shader}>
						<span className='shader-title'>{m.shader}</span>
						<div>
							<AssetSelection selections={m.selections} shader={m.shader}/>
						</div>
					</li>
					))}
			</ul>
		</div>
	)
}

export function AssetSelection({selections, shader}) {
	const {renderContext, setRenderContext } = useContext(RenderContext);
	const [selectedId, setSelectedId] = useState(renderContext.dinnerSet);
	const dinnerSet = renderContext.dinnerSet;

	const selectAsset = (id) => {
		setSelectedId(id)
		setRenderContext({...renderContext, 
			dinnerSet: {
				...dinnerSet,
				[shader]: id
			}
		})
	}
	return (
		<ul className='material-images'>
		{selections.map(s => (
			<li key={s.id}>
				<a href={null} className={s.id == dinnerSet[shader]? 'active': ''} onClick={e=>selectAsset(s.id)}>
					<img className='shader-sample' src={s.image} />
				</a>
			</li>
		))
		}
		</ul>
	)
}
