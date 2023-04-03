import Util from "./utility.mjs";

class ImageTag{
    static create(src,attr={}){
        const ele = document.createElement("img")
        ele.src = src;
        for(let[att,value] of Object.entries(attr)){
            if(att==="className"){
                ele.classList.add(value)
                continue;
            }
            if(att==="content"){
                ele.textContent = value;
                continue;
            }
            if(att === "linkTo"){
                Util.LinkTo(ele,value);
                continue;
            }
            ele.setAttribute(att,value);
        }
        return ele;
    }
}

export default ImageTag