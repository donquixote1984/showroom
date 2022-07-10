import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import {Capture, FocalLengthRange, LookDownRatioRange, HD} from '../ctrls/Camera';
import {Layout} from '../ctrls/Layout';
import {ColorPicker, EnvironmentIntensity} from '../ctrls/Lights';
import Grid3x3Icon from '@mui/icons-material/Grid3x3';

export const commonParams = [
	{
		name: 'Camera',
		icon: <PhotoCameraIcon />,
		params: [
		{
			id: 'capture',
			name: 'Capture',
			component: Capture 
		}, {
			id: 'hd',
			name: 'HD',
			component: HD
		}, {
			id: 'focal',
			name: 'Focal Length',
			component: FocalLengthRange
		}, {
			id: 'lookdown',
			name: 'Look Down Ratio',
			component: LookDownRatioRange
		}]
	},
	{
		name: 'Lights',
		icon: <LightbulbOutlinedIcon />,
		horizontal: true,
		params: [
			{
				id: 'frontLight',
				name: 'Front Light',
				component: () => <ColorPicker type={'frontLight'}/>,
			},
			{
				id: 'backLight',
				name: 'Back Light',
				component: () => <ColorPicker type={'backLight'}/>
			},
			{
				id: 'environmentIntensity',
				name: 'Environment Intensity',
				component: EnvironmentIntensity
			},
		]
	}
];

export const layoutParams = {
	name: 'Layout',
	icon: <Grid3x3Icon />,
	params: [
		{
			id: 'layout',
			name: 'Layout',
			component: Layout
		}
	]
};