import hou
import time
import os
from threading import Thread
hou.hipFile.load('./static/app/public/content/demo1/demo1.hip')

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
	
	print('start render')
	rnode.render();
	print('render done');

def render1(): 
	hou.hipFile.load('./static/pigen/pigen.hipnc')
	rnode = hou.node('/out/mantra1')
	print("start render")
	rnode.render()

def render2():
	hou.hipFile.load('./static/pigen2/pigen2.hipnc')
	param = hou.node("/obj/geo1/param");
	param.parm("seed").set(500)
	rnode = hou.node("/out/mantra1")
	print("start render")
	rnode.render()

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
	return txt1

def _render(context, path=None):
	thread = Thread(target = threaded_render, args = (context, path,))
	thread.start();

def render(context):
	path = findRenderPath(context)
	realPath = './static/app/public/content/demo1/render/' +context["id"] +"/"+ path
	if not os.path.isdir(realPath):
		_render(context, path);
	if not context['mock']:
		_render(context, path);
	return path


