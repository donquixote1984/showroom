import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import {Capture, FocalLengthRange, LookDownRatioRange, HD} from '../ctrls/Camera';
import {Layout} from '../ctrls/Layout';
import {SofaStyle, CabStyle} from '../ctrls/Style'
import {ColorPicker, EnvironmentIntensity} from '../ctrls/Lights';
import Grid3x3Icon from '@mui/icons-material/Grid3x3';
import {Material} from '../ctrls/Material';
import {Assets} from '../ctrls/Assets';

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

export const materialParams = (mats) => ({
	name: 'Materials',
	icon: <Grid3x3Icon />,
	params: [
	{
		id: 'Material',
		name: 'Material',
		component: ()=> (<Material materials={mats}/>)
	}
	]
})
export const dinnerParams = (assets) => ({
	name: 'Set',
	icon: <Grid3x3Icon />,
	params: [
		{
			id: 'composition',
			name: 'Assets',
			component: () => <Assets assets={assets}/>
		}
	]
})
export const SofaParams = {
	name: 'Styles',
	icon: <Grid3x3Icon />,
	params: [
		{
			id: 'style',
			component:  SofaStyle
		}
	]
}

export const CabParams = {
	name: 'Styles',
	icon: <Grid3x3Icon />,
	params: [
		{
			id: 'style',
			component: CabStyle
		}
	]
}

