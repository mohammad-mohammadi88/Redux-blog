// A tiny wrapper around fetch(), borrowed from
// https://kentcdodds.com/blog/replace-axios-with-a-simple-custom-fetch-wrapper
interface secondArg{
    body:string;
    method:string;
    [key:string] : string
}
async function client(endpoint:string, { body,method='GET', ...customConfig }:secondArg | any = {}) {
    const headers = { 'Content-Type': 'application/json' }

    const config = {
        method,
        ...customConfig,
        headers: {
            ...headers,
            ...customConfig?.headers,
        },
    }

    if (body) {
        config.body = JSON.stringify(body)
    }

    let data
    try {
        const response = await fetch(import.meta.env.VITE_JSON_SERVER + endpoint, config)
        if(config.method === "GET") data = await response.json()
        else data = response
        if (response.ok) {
            return data
        }
        throw new Error(response.statusText)
    } catch (err:any) {
        return Promise.reject(err.message ?? data)
    }
}

client.get = (endpoint:string, customConfig = {}) => client(endpoint, { ...customConfig, method: 'GET' })


client.post = (endpoint:string, body?: string, customConfig = {}) => client(endpoint, { body,method:"POST", ...customConfig })
export default client