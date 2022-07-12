import hou
import time
import os
from threading import Thread
proj = os.environ['PROJ']
hou.hipFile.load('./static/app/public/content/'+proj+'/'+proj+'.hip')

def threaded_render(context, path):
	print(context)
	print(path)
	rnode = hou.node("/out/" + context['id']);
	if (context['preview']):
		rnode.parm('trange').set('off');
	param_node = hou.node('/obj/params/params')
	if path:
		param_node.parm("targetFolder").set(path)
	
	if (context['capture'] == '360'):
		param_node.parm("capture").set(360)
	else:
		param_node.parm("capture").set(4)

	param_node.parm("focalLength").set(context["focalLength"])
	param_node.parm("lookDownRatio").set(context["lookDownRatio"])

	param_node.parm("frontLightIntensity").set(context["frontLightIntensity"])
	param_node.parm("backLightIntensity").set(context["backLightIntensity"])

	rgb = rgb2Vector(context['frontLightColor']);

	param_node.parm("frontLightColorr").set(rgb['r'])
	param_node.parm("frontLightColorg").set(rgb['g'])
	param_node.parm("frontLightColorb").set(rgb['b'])

	rgb = rgb2Vector(context['backLightColor'])
	param_node.parm("backLightColorr").set(rgb['r'])
	param_node.parm("backLightColorg").set(rgb['g'])
	param_node.parm("backLightColorb").set(rgb['b'])

	if (context["HD"]):
		rnode.parm("take").set("HD")

	if "colorSeed" in context:
		param_node.parm("colorSeed").set(context["colorSeed"])
	if "multiple" in context:
		param_node.parm("multiple").set(context["multiple"])
	if "layout" in context:
		param_node.parm("layout").set(context["layout"])
	
	if (context['id']=='single_sofa'):
		_shadeSofa(param_node, context);
	if (context['id']=='single_cabinet'):
		_shadeCabinet(param_node, context);
	if (context['id'] == 'dinner_set'):
		_shadeDinnerSet(param_node, context);
	print('start render')
	rnode.render();
	print('render done');


def _shadeSofa(param_node, context):
	if "sofanum" in context:
		param_node.parm("sofanum").set(context["sofanum"])
	if "sofastyle"	in context:
		param_node.parm("sofastyle").set(context["sofastyle"])
	if "materials" in context:
		materials = context['materials']
		if "sofa" in materials:
			param_node.parm("sofa").set(materials['sofa'])
		if "wood" in materials:
			param_node.parm("wood").set(materials['wood'])

def _shadeCabinet(param_node, context):
	if "cabSeed1" in context:
		param_node.parm('cabSeed1').set(context["cabSeed1"])
	if "cabSeed2" in context:
		param_node.parm('cabSeed2').set(context['cabSeed2'])
	if "materials" in context:
		materials = context['materials']
		if "cabinet" in materials:
			param_node.parm("cabinet").set(materials['cabinet'])

def _shadeDinnerSet(param_node, context):
	if ('dinnerSet' in context):
		if "table" in context['dinnerSet']: 
			param_node.parm('table').set(context['dinnerSet']['table']);
		if "chair" in context['dinnerSet']:
			param_node.parm('chair').set(context['dinnerSet']['chair']);
		if "lamp" in context['dinnerSet']:
			param_node.parm('lamp').set(context['dinnerSet']['lamp']);

def rgb2Vector(rgb):
	return {"r": round(rgb['r']/255, 2), "g": round(rgb['g']/255, 2), "b": round(rgb['b']/255, 2)}
	
def findRenderPath(context):
	txt="{capture}_{focalLength}_{lookDownRatio}_{fcr}{fcg}{fcb}_{fci}_{bcr}{bcg}{bcb}_{bci}_{environmentLightIntensity}_{colorSeed}_{multiple}{layout}";
	txt1= txt.format(
		id=context['id'],
		capture=context['capture'],
		focalLength=context['focalLength'],
		lookDownRatio=context['lookDownRatio'],
		fcr=context["frontLightColor"]["r"],
		fcg=context["frontLightColor"]["g"],
		fcb=context["frontLightColor"]["b"],
		fci=context["frontLightIntensity"],
		bcr=context["backLightColor"]["r"],
		bcg=context["backLightColor"]["g"],
		bcb=context["backLightColor"]["b"],
		bci=context["backLightIntensity"],
		environmentLightIntensity=context["environmentLightIntensity"],
		colorSeed=context["colorSeed"] if "colorSeed" in context else '',
		multiple=context["multiple"] if "multiple" in context else '',
		layout=context["layout"] if 'layout' in context else '',
		)
	return txt1 + _renderPathSuffix(context)

def _renderPathSuffix(context):
	if(proj == 'demo1'):
		return ''
	else:
		if (context['id'] == 'single_sofa'):
			return _resolveSofaProj(context);
		if (context['id'] == 'single_cabinet'):
			return _resolveCabinetProj(context)
		if (context['id'] == 'dinner_set'):
			print('dinnerset')
			return _resolveDinnerSetProj(context);
	return '';

def _resolveSofaProj(context):
	s = ''
	if ("sofanum" in context):
		s+=('_sn{sofanum}').format(sofanum=context['sofanum']);
	if ("sofastyle" in context):
		s+=('_ss{sofastyle}').format(sofastyle=context['sofastyle'])
	if ("materials" in context):
		if ("wood" in context['materials']):
			s+=('_maw'+context['materials']['wood'])
		if ("sofa" in context['materials']):
			s+=('_mas'+context['materials']['sofa'])
	return s;

def _resolveCabinetProj(context):
	s = '';
	if ("cabSeed1" in context):
		s+=('_s1{ca_seed1}').format(ca_seed1=context['cabSeed1']);
	if ("cabSeed2" in context):
		s+=('_s2{ca_seed2}').format(ca_seed2=context['cabSeed2']);
	if ("materials" in context):
		if ("cabinet" in context['materials']):
			s+=('_mac'+context['materials']['cabinet'])
	return s

def _resolveDinnerSetProj(context):
	s=''
	if ('dinnerSet' in context):
		if ('table' in context['dinnerSet']):
			s+=('_table{table}').format(table=context['dinnerSet']['table']);
		if ('lamp' in context['dinnerSet']):
			s+=('_lamp{lamp}').format(lamp=context['dinnerSet']['lamp']);
		if ('chair' in context['dinnerSet']):
			s+=('_chair{chair}').format(chair=context['dinnerSet']['chair']);
	return s

def _render(context, path=None):
	thread = Thread(target = threaded_render, args = (context, path,))
	thread.start();

def render(context):
	path = findRenderPath(context)
	realPath = './static/app/public/content/'+proj+'/render/' +context["id"] +"/"+ path
	realRender = False
	if not os.path.isdir(realPath):
		realRender = True
		_render(context, path);
	if not context['mock']:
		realRender = True
		_render(context, path);
	return (realRender, context['id'] + '/'+path);


def walk(path):
	realPath = './static/app/public/content/' + proj + '/render/'+path;
	pngs = []
	for png in os.listdir(realPath):
		if (isTargetFile(realPath + "/" + png)):
			pngs.append(png)
	return list(map(lambda s: "/content/"+proj+"/render/"+path+"/"+s, pngs ))

def isTargetFile(pngpath):
	filesize = os.path.getsize(pngpath);
	if (filesize > 0 and pngpath.endswith('.png')):
		return True
	else:
		return False