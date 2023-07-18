export default function services ({paramenter,client,auth,config}){ 

    if (!paramenter ) {
        return {error: 'paramenter is required'}
    }
    if (!client ) {
        return {error: 'client is required'}
    }
    if (!auth ) {   
        return {error: 'auth is required'}
    }

    const service = {
        paramenter,
        client,
        auth,
        config
    }

    return service
}