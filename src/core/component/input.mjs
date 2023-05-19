import XazzWeb from "../../utils/dom.mjs";
import DivTag from "./div.mjs";
import Util from "./utility.mjs";

class InputTag{
    static create(attr={}){
        const div = DivTag.create()
        const label = document.createElement("label")
        const ele = document.createElement("input");
        for(let[att,value] of Object.entries(attr)){
            if(att==="className"){
                ele.classList.add(value)
                continue;
            }
            if(att === "label"){
                if(!attr.hasOwnProperty('id')){
                    console.log("Please specify an id for input tag, if you are using label")
                    continue;
                }
                label.htmlFor = attr["id"];
                label.innerHTML = value;
                continue;
            }
            ele.setAttribute(att,value);
        }
        Util.CreateChildren(div,[label,ele])
        return div;
    }
    static value(ele){
        const res = ele.getElementsByTagName('input')[0].value;
        return res
    }
}

export default InputTag