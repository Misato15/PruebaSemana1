const http = require('http')

let objeto1=[
    {
    "Multiplicando":1,
    "Multiplicador":1,
    "Producto":1,
    }
    ,{
    "Multiplicando":1,
    "Multiplicador":2,
    "Producto":2,
    } 
]

let objeto2=[{
    "Multiplicando":2,
    "Multiplicador":1,
    "Producto":2,
    }
    ,{
    "Multiplicando":2,
    "Multiplicador":2,
    "Producto":4,
    } 
]

let objeto3=[{
    "Multiplicando":3,
    "Multiplicador":1,
    "Producto":3,
    }
    ,{
    "Multiplicando":3,
    "Multiplicador":2,
    "Producto":6,
    } 
]
let objeto4=[{
    "Multiplicando":4,
    "Multiplicador":1,
    "Producto":4,
    }
    ,{
    "Multiplicando":4,
    "Multiplicador":2,
    "Producto":8,
    } 
]

let objeto5=[{
    "Multiplicando":5,
    "Multiplicador":1,
    "Producto":5,
    }
    ,{
    "Multiplicando":5,
    "Multiplicador":2,
    "Producto":10,
    } 
]
let objeto6=[{
    "Multiplicando":6,
    "Multiplicador":1,
    "Producto":6,
    }
    ,{
    "Multiplicando":6,
    "Multiplicador":2,
    "Producto":12,
    } 
]
let objeto7=[{
    "Multiplicando":7,
    "Multiplicador":1,
    "Producto":7,
    }
    ,{
    "Multiplicando":7,
    "Multiplicador":2,
    "Producto":14,
    } 
]
let objeto8=[{
    "Multiplicando":8,
    "Multiplicador":1,
    "Producto":8,
    }
    ,{
    "Multiplicando":8,
    "Multiplicador":2,
    "Producto":16,
    } 
]
let objeto9=[{
    "Multiplicando":9,
    "Multiplicador":1,
    "Producto":9,
    }
    ,{
    "Multiplicando":9,
    "Multiplicador":2,
    "Producto":18,
    } 
]
let objeto10=[{
    "Multiplicando":10,
    "Multiplicador":1,
    "Producto":10,
    }
    ,{
    "Multiplicando":10,
    "Multiplicador":2,
    "Producto":20,
    } 
]
  
function tabla1(req, res){
    res.writeHead(200,{'Content-Type':'application/plain'})            
    res.write(JSON.stringify(objeto1))
}

function tabla2(req, res){
    res.writeHead(200,{'Content-Type':'application/plain'})            
    res.write(JSON.stringify(objeto2))
}
function tabla3(req, res){
    res.writeHead(200,{'Content-Type':'application/plain'})            
    res.write(JSON.stringify(objeto3))
}
function tabla4(req, res){
    res.writeHead(200,{'Content-Type':'application/plain'})            
    res.write(JSON.stringify(objeto4))
}
function tabla5(req, res){
    res.writeHead(200,{'Content-Type':'application/plain'})            
    res.write(JSON.stringify(objeto5))
}
function tabla6(req, res){
    res.writeHead(200,{'Content-Type':'application/plain'})            
    res.write(JSON.stringify(objeto6))
}
function tabla7(req, res){
    res.writeHead(200,{'Content-Type':'application/plain'})            
    res.write(JSON.stringify(objeto7))
}
function tabla8(req, res){
    res.writeHead(200,{'Content-Type':'application/plain'})            
    res.write(JSON.stringify(objeto8))
}
function tabla9(req, res){
    res.writeHead(200,{'Content-Type':'application/plain'})            
    res.write(JSON.stringify(objeto9))
}
function tabla10(req, res){
    res.writeHead(200,{'Content-Type':'application/plain'})            
    res.write(JSON.stringify(objeto10))
}

function noEncontrado(req, res){
    res.writeHead(404,{'Content-Type':'text/plain'})            
    res.write('Pagina no enontrada')
}
module.exports={
    tabla1,
    tabla2,
    tabla3,
    tabla4,
    tabla5,
    tabla6,
    tabla7,
    tabla8,
    tabla9,
    tabla10,
    noEncontrado
}