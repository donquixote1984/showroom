import React, {useContext, useEffect} from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Switch from '@mui/material/Switch';
import Slider from '@mui/material/Slider';

import {RenderContext} from '../utils/context';

export function Capture() {
	const {renderContext, setRenderContext} = useContext(RenderContext);
	const handleChange = (e) => {
		setRenderContext({...renderContext, capture: e.target.value});
	}

	return (
		<RadioGroup
		    defaultValue="360"
		    name="radio-buttons-group"
		    row
		    onChange={handleChange}
		    value={renderContext.capture}
		  >
		    <FormControlLabel value="360" control={<Radio />} label="360 degree" />
		    <FormControlLabel value="6s" control={<Radio />} label="6 Sides" />
		</RadioGroup>
	)
}

export function FocalLengthRange() {
	const {renderContext, setRenderContext} = useContext(RenderContext);
	const marks = [-2,-1,0,1,2].map(v => ({value: v, label: `${v}cm`}));
	const onChange = (e, newValue) => {
		setRenderContext({...renderContext, focalLength: newValue});
	}
	
	return (
		<div className='slider'>
			<Slider value={renderContext.focalLength} onChangeCommitted={onChange} size="small" defaultValue={0} step={1} min={-2} max={2} marks={marks} />
		</div>
	)
}
export function LookDownRatioRange() {
	const {renderContext, setRenderContext} = useContext(RenderContext);
	const marks = [0, 5, 10, 15, 20, 25, 30].map(t => ({value: t, label: `${t} deg`}));
	const onChange = (e, newValue) => {
		setRenderContext({...renderContext, lookDownRatio: newValue});
	}

	

	return (
		<div className='slider'>
			<Slider value={renderContext.lookDownRatio} onChangeCommitted={onChange} size="small" defaultValue={0} step={5} min={0} max={30} marks  marks={marks}/>
		</div>
	)
}
export function HD() {
	const {renderContext, setRenderContext} = useContext(RenderContext);
	const handleChange = (e) => {
		setRenderContext({...renderContext, HD: e.target.checked});
	}
	return (
		<div className=''>
			<Switch checked={renderContext.HD}onChange={handleChange}/>
		</div>
	)
}