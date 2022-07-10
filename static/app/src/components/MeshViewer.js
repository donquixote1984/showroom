import React, {useEffect, useRef} from 'react';
import ViewGL from './ViewGL';

export default function MeshViewer() {
	const ref = useRef();
	const viewGL = null;
	useEffect(() => {
		const viewGL = new ViewGL(ref.current);
	}, [])

	
	return (
		<div className='canvas-container'>
			<canvas ref={ref} />
		</div>
	)
}