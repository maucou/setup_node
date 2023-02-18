exports.middlewareGlobal = (req, res, next) => {

    
    if(req.body.cliente){
        req.body.cliente = req.body.cliente.replace('leo', 'Não use essa palavra')
        console.log(`Vi que você postou ${req.body.cliente}`)
    }
    next()
}

exports.outroMiddleware = (req, res, next) => {
    console.log('Outro middleware')
    next()
}