import React, {useState, useContext, useEffect} from 'react';
import {RenderContext} from '../utils/context';
export function Material({materials}) {
	return (
		<div className='material-selection'>
			<ul className='material-shaders'>
				{materials.map(m => (
					<li key={m.shader}>
						<span className='shader-title'>{m.shader}</span>
						<div>
							<MaterialSelection selections={m.selections} shader={m.shader}/>
						</div>
					</li>
					))}
			</ul>
		</div>
	)
}

function MaterialSelection({shader, selections}) {
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