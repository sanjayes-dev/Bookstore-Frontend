import axios from 'axios'

export const commonAPI =async(httpMethod,url,reqBody,reqHeader)=>{ //creates an common api that have parameters as httpmethod ( like get and post) , url and content.
    const reqConfig={
        method:httpMethod,
        url, // if both key and value have same name just use one in object
        data:reqBody,
        headers:reqHeader?reqHeader:{"Content-Type":"application/json"}
    }
    return await axios(reqConfig).then((res)=>{return res}).catch((err)=>{throw err})
        
}
export default commonAPI