import Router from "../core/router.mjs";

class XazzWeb{
    static elements = []
    static routelements = []
    static renderDom(){
        const appele = document.getElementById("app");
        this.elements.map((item)=>{
            appele.appendChild(item)
        })
        appele.append(Router.todisplay)
    }
    static AddToDom(ele){
        this.elements.push(ele)
    }
    static AddToDomRoute(route,ele){
        this.routelements.push(ele)
        Router.createRoute(route,ele)
    }
    
}

export default XazzWeb;