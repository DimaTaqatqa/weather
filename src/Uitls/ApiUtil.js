export function FetchData(url , method , body ={} , options ={ }){
    // we make an api utils to make changes and edit the method
    let _options ={
        ...options
    }

    if (method.toUpperCase() === 'POST'){ // since get don't have body
        _options.body= JSON.stringify(body) // i added a key in options // it must be a string in fetch
    }

    return fetch(url,{
        method,
        ..._options // options for header requests
    }).then(async(resp) =>{
        const status = resp.status
        return {
            data : await resp.json(),
            status
        }// this fuction to return all the data from backend as json but it's promise too so we use then again
    })
}