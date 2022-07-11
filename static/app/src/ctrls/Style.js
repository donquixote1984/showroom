import React, {useState, useContext, useEffect} from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Slider from '@mui/material/Slider';
import {RenderContext} from '../utils/context';
export function SofaStyle() {

	const [alignment, setAlignment] = useState(0);
	const {renderContext, setRenderContext } = useContext(RenderContext);

	const handleChange = (e, newAlignment) => {
		setAlignment(newAlignment);
		setRenderContext({...renderContext, sofastyle: newAlignment})
	}


	const changeSeed = (e, newValue) => {
		setRenderContext({...renderContext, sofanum: newValue});
	}

	return (
		<div>

			<h6 className='mt-5'>Sofa Num</h6>
			<div>
				<Slider value={renderContext.sofaNum} valueLabelDisplay="auto" size="small" defaultValue={3} marks step={1} min={1} max={5} onChangeCommitted={changeSeed}/>
			</div>

			<div>
			<h6 className='mt-5'>Sofa Style</h6>
			<ToggleButtonGroup
			  color="primary"
			  value={alignment}
			  exclusive
			  onChange={handleChange}
			>
			  <ToggleButton value={0}>No Side</ToggleButton>
			  <ToggleButton value={1}>Left Side</ToggleButton>
			  <ToggleButton value={2}>Right Side</ToggleButton>

			</ToggleButtonGroup>
			</div>
		</div>
	)
}

export function CabStyle() {
	const {renderContext, setRenderContext } = useContext(RenderContext);
	const changeSeed1 = (e, seed1) => {
		setRenderContext({...renderContext, cabSeed1: seed1})
	}

	const changeSeed2 = (e, seed2) => {
		setRenderContext({...renderContext, cabSeed2: seed2})
	}
	return (
		<div>

			<h6 className='mt-5'>Cabinet Seed 1</h6>
			<div>
				<Slider value={renderContext.cabSeed1} valueLabelDisplay="auto" size="small" defaultValue={1} marks step={1} min={1} max={10} onChangeCommitted={changeSeed1}/>
			</div>

			<div>
			<h6 className='mt-5'>Cabinet Seed 2</h6>
			<div>
				<Slider value={renderContext.cabSeed2} valueLabelDisplay="auto" size="small" defaultValue={1} marks step={1} min={1} max={10} onChangeCommitted={changeSeed2}/>
			</div>
			</div>
		</div>
	)
}