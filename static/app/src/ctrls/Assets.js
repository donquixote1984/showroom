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
							<AssetSelection asset={m.selections} shader={m.shader}/>
						</div>
					</li>
					))}
			</ul>
		</div>
	)
}

export function AssetSelection({asset, shader}) {
	const {renderContext, setRenderContext } = useContext(RenderContext);
	const [selectedId, setSelectedId] = useState();
	const selectMaterial = (id) => {
		setSelectedId(id)
		setRenderContext({...renderContext, 
			materials: {
				...renderContext.materials,
				[shader]: id
			}
		})
	}
	return (
		<ul className='material-images'>
		{selections.map(s => (
			<li key={s.id}>
				<a href={null} className={s.id == selectedId ? 'active': ''} onClick={e=>selectMaterial(s.id)}><img className='shader-sample' src={s.image} /></a>
			</li>
		))
		}
		</ul>
	)
}
