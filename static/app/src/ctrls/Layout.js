import React, {useEffect, useContext} from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Slider from '@mui/material/Slider';
import ScatterPlotIcon from '@mui/icons-material/ScatterPlot';
import {RenderContext} from '../utils/context';

export function Layout() {
	const [alignment, setAlignment] = React.useState(-1);
	const {renderContext, setRenderContext} = useContext(RenderContext);

	const changeSeed = (e, newValue) => {
		setRenderContext({...renderContext, colorSeed: newValue});
	}
	useEffect(() => {
		setRenderContext({...renderContext, multiple: 0, colorSeed: 0, layout: 0});
	}, []);
	const handleChange = (
	    event,
	    newAlignment
	  ) => {
	    setAlignment(newAlignment);
	    if (newAlignment !== -1) {
	    	setRenderContext({...renderContext, multiple: 1, layout: newAlignment});
	    } else {
	    	setRenderContext({...renderContext, multiple: 0, layout: newAlignment});
	    }
	};
	return (
		<div>
			<div>
			<ToggleButtonGroup
			  color="primary"
			  value={alignment}
			  exclusive
			  onChange={handleChange}
			>
			  <ToggleButton value={-1}>1 x 1</ToggleButton>
			  <ToggleButton value={0}>1 x 3</ToggleButton>
			  <ToggleButton value={1}>2 x 2</ToggleButton>
			  <ToggleButton value={2}>3 x 3</ToggleButton>
			  <ToggleButton value={3}><ScatterPlotIcon/></ToggleButton>

			</ToggleButtonGroup>
			</div>

			<h6 className='mt-5'>Seed</h6>
			<div>
				<Slider valueLabelDisplay="auto" size="small" defaultValue={1} marks step={1} min={1} max={100} onChangeCommitted={changeSeed}/>
			</div>

		</div>
	)
}