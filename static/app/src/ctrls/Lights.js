import React, {useState, useContext, useEffect} from 'react';
import { RgbColorPicker } from "react-colorful";
import Slider from '@mui/material/Slider';
import {RenderContext} from '../utils/context';
import {rgb2Vector, vector2Rgb} from '../utils/utils';

export function ColorPicker({type}) {
	 //const [color, setColor] = useState("#FFFFFF");
	 const marks = [1,2,3,4,5].map(t => ({label:t, value: t}));

	 const {renderContext, setRenderContext } = useContext(RenderContext);

	 const changeColor = (v) => {
	 	setRenderContext({...renderContext, [`${type}Color`]: v})
	 //	setColor(v);
	 }
	 const changeIntensity = (e, newValue) => {
	 	setRenderContext({...renderContext, [`${type}Intensity`]: newValue})
	 }

  	return (
  		<div>
  			<RgbColorPicker color={renderContext[`${type}Color`]} onChange={changeColor} />
  			<Slider value={renderContext[`${type}Intensity`]} size="small" defaultValue={1} step={1} min={1} max={5} marks={marks} onChangeCommitted={changeIntensity}/>
  		</div>
  	);
}

export function EnvironmentIntensity() {
	const {renderContext, setRenderContext } = useContext(RenderContext);
	const onChange = (e, newValue) => {
		setRenderContext({...renderContext, environmentLightIntensity: newValue});
	}
	const marks = [1,2,3,4,5].map(t => ({label:t, value: t}));

	return (
		<Slider value={renderContext.environmentLightIntensity}
			disableSwap
			onChangeCommitted={onChange}
			size="small" defaultValue={1} step={1} min={1} max={5} marks={marks} />
	);
}