import React, {useContext} from 'react';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import {ParamContext} from '../utils/context';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFF',
    },
    secondary: {
      main: '#FFF',
    },
  },
});

export default function Controls() {

	const {paramContext, setParamContext} = useContext(ParamContext);

	return (
		<ThemeProvider theme={theme}>
		<div id='ctrls' className='flex-fill'>
		<ul>
			{
				paramContext.map(segment=> (
					<li className='segment' key={segment.name}>
						<div className='d-flex align-items-center'>
							<h4 className='flex-fill'>
								<span className='me-4'>{segment.icon}</span>
								<span>{segment.name}</span>
							</h4>
						</div>

						<div className={`segment-ctrls ${segment.horizontal ? 'horizontal': ''}`}>
							{segment.params.map(param => (
								<div key={param.id} className='segment-ctrl align-items-center mb-4 me-5'>
									{param.name && <h6 className='me-5'>{param.name} </h6>}
									<div>
										{param.component && <param.component/>}
									</div>
								</div>
							))}
						</div>
					</li>
					))
			}
			</ul>
		</div></ThemeProvider>)
}