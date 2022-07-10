


export function rgb2Vector(rgb) {
	return {
		r: rgb.r / 255,
		g: rgb.g / 255,
		b: rgb.b / 255
	}
}

export function vector2Rgb(v) {
	return {
		r: v.r * 255,
		g: v.g * 255,
		b: v.b * 255
	}
}