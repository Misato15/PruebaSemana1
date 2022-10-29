const http = require('http')
HOST = 'localhost'
const router = require('./router.js')
PORT = 8081
const [,,parametro1]=process.argvs
//const [,formato] = parametro1.split('=')
const [,limite] = parametro1.split('=')

const server = http.createServer(function(peticion, respuesta){


    switch(peticion.url){

        case '/1':
        router.tablaprimera(peticion,respuesta,limite)
    
        
        break

        case '/2':
        break

        case '/3':
        break

        
        case '/4':
        break
        
        case '/5':
        break
        
        case '/6':
        break
        
        case '/7':
        break

        
        case '/8':
        break

        
        case '/9':
        break

        
        case '/10':
        break

        default:
            break
    }

    respuesta.end()

})

server.listen(PORT, HOST,function(){

    console.log(`Servidor Disponible http://${HOST}:${PORT}`)
})