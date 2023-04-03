// For API requests
class xazzAPI{
    static async get(url){
        const response = await fetch(url)
        const data = await response.json()
        return data;                       
    }
    static async post(url,data){
        await fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        }).then((res)=>{
            return res.json()
        }).then().catch((err)=>{
            console.log(err)
        })
    }
    static async update(url,data){
        await fetch(url,{
            method:'PATCH',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        }).then((res)=>{
            return res.json()
        }).catch((err)=>{
            console.log(err)
        })
    }
}

export default xazzAPI