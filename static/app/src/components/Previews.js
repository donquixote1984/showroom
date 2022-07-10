import React, {useContext} from 'react';
import {RenderContext} from '../utils/context';
import {preview, render} from '../api/api'

export default function Previews() {
	const {renderContext, setRenderContext} = useContext(RenderContext);
	const onPreview = () => {
		preview(renderContext);
	}

	const onRender = () => {
		render(renderContext);
	}
	return (<div id='previews' className='d-flex flex-fill flex-column'>
			<div className='preview-window flex-fill'>
				<div className='preview-window-inner'>{JSON.stringify(renderContext)}</div>
			</div>
			<div className='render-btns d-flex align-items-center justify-content-center'>
				<button onClick={e => onPreview()}>Preview</button>
				<button onClick={e => onRender()}>Render</button>
			</div>
		</div>);
}