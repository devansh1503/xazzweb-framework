class IFrame{
    static create(src,attr={}){
        var ele = document.createElement("iframe");
        ele.src = src;
        for(let[att,val] of Object.entries(attr)){
            ele.setAttribute(att,val)
        }
        return ele
    }
}

export default IFrame;