import http.server
import socketserver
import webbrowser
import os

PORT = 8000
DIRECTORY = os.path.dirname(__file__)

Handler = http.server.SimpleHTTPRequestHandler
Handler.directory = os.path.join(os.getcwd(), DIRECTORY)

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    url = "http://localhost:{}".format(PORT)
    webbrowser.open(url)
    print("Servidor HTTP iniciado en el puerto", PORT)
    httpd.serve_forever()
