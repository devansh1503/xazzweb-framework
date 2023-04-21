// For API requests
class xazzAPI{
    static async get(url){
        var result;
        await fetch(url).then((res)=>{
            return res.json();
        }).then((data)=>{
            result = data;
        })
        return result;
        // const response = await fetch(url)
        // const data = await response.json()
        // return data;                       
    }

    static async post(url,data,headers={}, timeout={}){
        const controller = new AbortController()
        var result;
        var headr = !('headers' in headers)? {'Content-Type':'application/json'}:headers['headers']
        await fetch(url,{
            method:'POST',
            headers:headr,
            body: JSON.stringify(data),
            signal:controller
        }).then((res)=>{
            return res.json()
        }).then((data)=>{
            result = data;
        }).then().catch((err)=>{
            console.log(err)
        })
        if(JSON.stringify(timeout)!=="{}"){
            setTimeout(()=>controller.abort(), timeout['timeout'])
        }
        return result;
    }
    
    static async update(url,data,headers={},timeout={}){
        var result;
        const controller = new AbortController()
        var headr = !('headers' in headers)? {'Content-Type':'application/json'}:headers['headers']
        await fetch(url,{
            method:'PATCH',
            headers:headr,
            body: JSON.stringify(data),
            signal:controller
        }).then((res)=>{
            return res.json()
        }).then((data)=>{
            result =  data;
        }).catch((err)=>{
            console.log(err)
        })
        if(JSON.stringify(timeout)!=="{}"){
            setTimeout(()=>controller.abort(), timeout['timeout'])
        }
        return result;
    }

    static async put(url,data,headers={},timeout={}){
        var result;
        const controller = new AbortController()
        var headr = !('headers' in headers)? {'Content-Type':'application/json'}:headers['headers']
        await fetch(url,{
            method:'PUT',
            headers:headr,
            body: JSON.stringify(data),
            signal:controller
        }).then((res)=>{
            return res.json()
        }).then((data)=>{
            result = data;
        }).catch((err)=>{
            console.log(err)
        })
        if(JSON.stringify(timeout)!=="{}"){
            setTimeout(()=>controller.abort(), timeout['timeout'])
        }
        return result;
    }

    static async all(urls=[]){
        Promise.all(urls).then(([...responses])=>{
            const res = []
            for(var rss of responses){
                res.push(rss.json())
            }
            return res;
        }).then(([...data])=>{
            return data;
        }).catch((err)=>{
            console.log(err)
        })
    }
}

export default xazzAPI