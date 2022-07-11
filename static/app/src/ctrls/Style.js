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

