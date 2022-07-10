import web
import model
import json

urls = (
    '/', 'index',
    '/api/render', 'api',
    '/api/path', 'path'
)


render = web.template.render("templates/")

class index:
    def GET(self):
       web.header('Access-Control-Allow-Origin',      '*')
       web.header('Access-Control-Allow-Credentials', 'true')
       return render.index()

class api:
    def POST(self):
        request = json.loads(web.data())
        (realRender, path) = model.render(request);
        web.header('Content-Type', 'application/json')
        return json.dumps({"success": True, "path": path, "realRender":realRender})
    def OPTIONS(self):
        pass

class path:
    def GET(self):
        data = web.input()
        s = model.walk(data.p);
        return json.dumps({"paths": s})
    def OPTIONS(self):
        pass

def commonHook():
    web.header('Access-Control-Allow-Origin',      '*')
    web.header('Access-Control-Allow-Credentials', 'true')
    web.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST')
    web.header('Access-Control-Allow-Headers', 'Content-Type')

if __name__ == "__main__":
    app = web.application(urls, globals())
    app.add_processor(web.loadhook(commonHook));
    app.run()
