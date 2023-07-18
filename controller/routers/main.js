console.log('routes/main.js');

function routes ( parameter){ 
    if(!parameter){ 
        return false 
    }

    const  routes = parameter.routes
    if(!routes){
        return false
    }
    return  routes
} 