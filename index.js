const http = require('http')
HOST = 'localhost'
const router = require('./router.js')
PORT = 8081
//const [,,parametro1]=process.argvs
//const [,formato] = parametro1.split('=')
//const [,limite] = parametro1.split('=')

const server = http.createServer(function(peticion, respuesta){


    switch(peticion.url){

        case '/1':
        router.tabla1(peticion,respuesta)

        break

        case '/2':
        router.tabla2(peticion,respuesta)
        break

        case '/3':
        router.tabla3(peticion,respuesta)
        break

        
        case '/4':
        router.tabla4(peticion,respuesta)
        break
        
        case '/5':
        router.tabla5(peticion,respuesta)
        break
        
        case '/6':
         router.tabla6(peticion,respuesta)
        break
        
        case '/7':
        router.tabla7(peticion,respuesta)
        break

        
        case '/8':
            router.tabla8(peticion,respuesta)
        break

        
        case '/9':
            router.tabla9(peticion,respuesta)
        break

        
        case '/10':
            router.tabla10(peticion,respuesta)
        break

        default:
            router.noEncontrado(peticion,respuesta)
            break
    }

    respuesta.end()

})

server.listen(PORT, HOST,function(){

    console.log(`Servidor Disponible http://${HOST}:${PORT}`)
})