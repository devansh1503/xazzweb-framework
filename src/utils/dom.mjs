import Router from "../core/router.mjs";

class XazzWeb{
    static elements = []
    static renderDom(){
        const appele = document.getElementById("app");
        this.elements.map((item)=>{
            appele.appendChild(item)
        })
    }
    static AddToDom(ele){
        this.elements.push(ele)
    }
    static AddToDomRoute(route,ele){
        this.elements.push(ele)
        Router.createRoute(route,ele)
    }
    
}

export default XazzWeb;