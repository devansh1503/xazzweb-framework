import Router from "../router.mjs";

class Util{
    static CreateChildren(ele,child=[]){
        child.map((item)=>{
            ele.appendChild(item)
        })
    }
    static AddStyle(ele,attr={}){
        for(let[att,value] of Object.entries(attr)){
            ele.style[att]=value
        }
    }
    static AddStyleAll(ele=[],attr={}){
        for(let ch of ele){
            this.AddStyle(ch,attr);
        }
    }
    static LinkTo(ele,route){
        ele.onclick = function(){
            Router.openRoute(route)
        }
    }
    static onclickhandle(ele,func,event){
        ele.addEventListener((event),func);
    }
    
}
export default Util;