

function tabla1 (limite){
    let i = 0;
    for(i = 0; i < limite;i++ ){
        let tabla  = [{
            "Multiplicador": 1,
            "Multiplicando": i,
            "Producto": tabla.Multiplicador*tabla.Multiplicando
        }]
    }

}

module.exports={
    tabla1
}