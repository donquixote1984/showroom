import React, {useContext, useState, useEffect} from 'react';
import {RenderContext} from '../utils/context';
import {preview, render, listfile} from '../api/api'
import {start, stop} from '../utils/timer';
import LinearProgress from '@mui/material/LinearProgress';
import CircularProgress from '@mui/material/CircularProgress';
import IconButton from '@mui/material/IconButton';
import FindReplaceIcon from '@mui/icons-material/FindReplace';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import event from '../utils/events';
export default function Previews() {
	const {renderContext, setRenderContext} = useContext(RenderContext);
	const [loading, setLoading] = useState(false);
	const [images, setImages] = useState([]);
	const [mode360, setMode360] = useState(false);
	const [index360, setIndex360] = useState(0);
	useEffect(() => {
		event.on('load', ()=> {
			setImages([]);
			setIndex360(0);
			setLoading(false);
			setMode360(false);
			stop();
		})
	}, []);
	const onRender = async (type) => {
		startLoading();
		if (type === 'preview') {
			renderContext.preview = true;
		} else {
			renderContext.preview = false;
		}
		const {path, realRender} = await render(renderContext);
		if (realRender) {
			start(async ()=> {
				const paths = await listfile(path)
				setImages(paths);
			}, 5000);
		} else {
			const paths = await listfile(path);
			let index = 1;
			start(() => {
				setImages(paths.slice(0, index));
				index = Math.min((index + 1), paths.length)
				if (renderContext.capture === '360') {
					if(index > 20) {
						stop();
						endLoading();
					}
				} else {
					if (index > 6) {
						stop();
						endLoading();
					}
				}
			}, 2000);
		}

	}

	const startLoading = () => {
		setLoading(true)
	}

	const endLoading = () => {
		setLoading(false)
	}
	const nextImg = () => {
		setIndex360( (index360 + 1) % images.length )
	}

	return (<div id='previews' className='d-flex flex-fill flex-column'>
				<div className='preview-window flex-fill'>
					<div className='image360preview'>
					<IconButton onClick={(e) => {setMode360(!mode360); setIndex360(0)}}>
						<FindReplaceIcon/>
					</IconButton>
					</div>
					<div className='preview-window-inner'>
						{!mode360 ? <div className='preview-images'>
							<ul>
							{
								images.map(i => <li key={i}><img src={i}/></li>)
							}
							{loading && <li><div><CircularProgress /></div></li>}
							</ul>
						</div> : <div className='preview-images-360'>
							<img src={images[index360]} />
							<IconButton onClick={e => nextImg()}>
								<ArrowForwardIosIcon />
							</IconButton>
						</div>}
				</div>
				{loading && <LinearProgress/>}
			</div>
			<div className='render-btns d-flex align-items-center justify-content-center'>
				<button type="button" disabled={loading} onClick={e => onRender("preview")}>Preview</button>
				<button type="button" disabled={loading} onClick={e => onRender("render")}>Render</button>
			</div>
		</div>);
}