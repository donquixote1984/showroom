export const commonParams = [
	{
		segment: 'Camera',
		icon: 'bi-camera',
		params: [
		{
			id: 'capture'
			name: 'Capture',
			type: 'select',
			values: [
				{
					name: '360',
					icon: ''
					value: '360'
				}, {
					name: '6 Sides',
					icon: '',
					value: '6s'
				}
			]
		}, {
			id: 'focal',
			name: 'Focal Length'
			type: 'range',
			values: [
				range: [0, 5],
				step: 1
			]
		}, {
			id: 'lookdown',
			name: 'Look Down Ratio',
			type: 'range',
			values: {
				range: [0, 30],
				step: 1
			}
		}]
	},
	{
		segment: 'Lights',
		icon: 'bi-lightbulb',
		params: []
	}
];

export const a = {
	camera: {
		capture: {
			name: 'Capture',
			type: 'select',
			values: [
				{
					name: '360',
					icon: '',
					value: '360'
				},
				{
					name: '6 Sides',
					icon: '',
					value: '6s'
				}
			]
		},

		focal: {
			name: 'Focal Length',
			type: 'range',
			values: {
			range: [0, 5],
			step: 1
			}
		},
		lookdown: {
			name: 'Look Down Ratio',
			type: 'range',
			values: {
				range: [0, 30],
				step:1
			}
		}
	},

	lights: {
		frontLight: {
			name: 'Front Light',
			type: 'color',
			values: {
				cd: '#000',
				intensity: 1
			}
		},
		backLight: {
			name: 'Back Light',
			type: 'color',
			values: {
				cd: '#000',
				intensity: 1
			}
		},
		EnvironmentLight: {
			name: 'Environment Light',
			type: 'range',
			values: {
				range: [0, 5],
				step: 1
			}
		}
	}
};