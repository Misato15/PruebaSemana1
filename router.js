
function tablaprimera(req, res,limite){
    res.writeHead(200,{'Content-Type':'application/JSON'})
    if (limite===1){
        let objeto={
            "Multiplicando":5,
            "Multiplicador":1,
            "Producto":5
        }
    res.write(JSON.stringify(objeto))
}



module.exports={
    tabla1
    
}