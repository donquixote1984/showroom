import React,{useState,useRef, useEffect} from 'react';
import _ from 'lodash';
const images = 

	[
		'demo1/render/watch/360_0_30_25500_1_255255255_1_1_0_00',
		'demo2/render/dinner_set/360_0_0_255255255_1_255255255_1_1___table2_lamp1_chair3',
		'demo1/render/coffeemachine/360_0_0_255255255_1_255255255_1_1__',
		'demo1/render/headset/6s_0_0_255255255_1_255255255_1_1__',
		'demo1/render/notebook/360_0_0_255255255_1_255255255_1_1__',
		'demo1/render/phone/360_0_0_255255255_1_255255255_1_1__',
		'demo1/render/watch/360_0_0_255255255_1_255255255_1_1_0_11',
		'demo1/render/ps5/360_0_0_255255255_1_255255255_1_1__',
		'demo1/render/steam/360_0_0_255255255_1_255255255_1_1__',
		'demo1/render/switch/360_0_0_255255255_1_255255255_1_1__',
		'demo1/render/tv/360_0_0_255255255_1_255255255_1_1__',
		'demo1/render/watch/6s_0_0_255255255_1_255255255_1_1_3_11',
		
		'demo2/render/dinner_set/360_0_0_255255255_1_255255255_1_1___table2_lamp0_chair3',
		'demo2/render/dinner_set/360_0_0_255255255_1_255255255_1_1___table1_lamp1_chair1',
		'demo2/render/single_cabinet/360_0_0_255255255_1_255255255_1_1___s16_s26_maccab2',
		'demo2/render/single_cabinet/360_0_0_255255255_1_255255255_1_1___s11_s21_maccab2',
		'demo2/render/single_cabinet/360_0_0_255255255_1_255255255_1_1___s12_s22_maccab5',
		'demo2/render/single_cabinet/360_0_0_255255255_1_255255255_1_1___s11_s21_maccab1',
		'demo2/render/single_sofa/360_0_0_255255255_1_255255255_1_1___sn4_ss0_mawwood2_massofa2',
		'demo2/render/single_sofa/360_0_0_255255255_1_255255255_1_1___sn4_ss0_mawwood3_massofa3',
		'demo2/render/single_sofa/360_0_0_255255255_1_255255255_1_1___sn2_ss0_mawwood2_massofa2',
		'demo2/render/single_sofa/360_0_0_255255255_1_255255255_1_1___sn2_ss1_mawwood2_massofa2',
		'demo2/render/single_sofa/360_0_0_255255255_1_255255255_1_1___sn3_ss1_mawwood1_massofa1',
		'demo2/render/single_sofa/360_0_0_255255255_1_255255255_1_1___sn3_ss2_mawwood2_massofa2',
		'demo2/render/single_sofa/360_0_0_255255255_1_255255255_1_1___sn3_ss2_mawwood3_massofa3',
		'demo2/render/single_sofa/360_0_0_255255255_1_255255255_1_1___sn4_ss2_mawwood1_massofa1',
		'demo2/render/dinner_set/360_0_0_255255255_1_255255255_1_1___table0_lamp0_chair0',
		'demo2/render/dinner_set/360_0_0_255255255_1_255255255_1_1___table1_lamp1_chair1',
		'demo2/render/dinner_set/360_0_0_255255255_1_255255255_1_1___table2_lamp0_chair3',
		'demo2/render/dinner_set/360_0_0_255255255_1_255255255_1_1___table2_lamp0_chair3',
		'demo1/render/watch/360_0_0_255255255_1_255255255_1_1_10_10',
		'demo1/render/watch/360_0_15_255255255_1_255255255_1_1_27_00',
		'demo1/render/watch/360_0_30_255255255_1_255255255_1_1_0_00',
		'demo1/render/watch/360_0_15_255255255_1_255255255_1_1_3_11',
		'demo1/render/coffeemachine/360_0_0_255255255_1_255255255_1_1__',
		'demo2/render/single_sofa/360_0_0_255255255_1_255255255_1_1___sn3_ss2_mawwood3_massofa3',
		'demo1/render/switch/360_0_30_2008383_1_255255255_1_1__',
		'demo1/render/switch/360_0_30_023193_5_255255255_1_1__',
		'demo1/render/watch/6s_0_0_255255255_1_255255255_1_1_0_10',
		'demo1/render/watch/360_0_15_255255255_1_255255255_1_1_3_11',
		'demo1/render/watch/360_0_0_255255255_1_255255255_1_1_4_10',
		'demo2/render/dinner_set/360_0_0_255255255_1_255255255_1_1___table2_lamp1_chair2',
		'demo2/render/single_sofa/360_0_0_255255255_1_255255255_1_1___sn3_ss2_mawwood3_massofa3',
		'demo2/render/single_cabinet/360_0_0_255255255_1_255255255_1_1___s11_s21_maccab1',
		'demo1/render/watch/360_0_15_255255255_1_255255255_1_1_27_00',
	]

export default function VideoWall() {
	return (
		<div className='videowall'>
			<ul>{
				_.shuffle(images).map(i => <SnipItem path={i}/>)
			}</ul>
		</div>
	)
}

function SnipItem({path}) {
	const [index, setIndex] = useState(0);
	const [imagePaths, setImagePaths] = useState([])

	const [size, setSize] = useState(0);
	const id = path.split('/')[2]
	
	/*

	*/

	useEffect(() => {
		let length = 0;
		let proj = ''
		if (path.indexOf('demo2')>=0) {
			length = 10;
			proj = 'demo2';
		} else {
			proj = 'demo1'
			if (path.indexOf('360') >=0) {
				length = 21;
			} else {
				length =6
			}
		}
		const imgs = _.range(length).map(i => `${proj}.${id}.${_.padStart(`${i+1}`, 4, '0')}.png`).map(img => `content/${path}/${img}`)
		setImagePaths(imgs)
		setSize(length)
		
	}, []) 

	useEffect(() => {
		setInterval(() => {
			setIndex(i => i + 1)
		}, 200)
	}, [])
	
	return (
		<li>
			<img src={imagePaths[index%size]} />
			}
		</li>
	)
}
