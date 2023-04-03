class DivTag{
    static create(attr={}){
        const ele = document.createElement("div");
        for(let[att,value] of Object.entries(attr)){
            if(att==="className"){
                ele.classList.add(value)
                continue;
            }
            if(att==="content"){
                ele.textContent = value;
                continue;
            }
            ele.setAttribute(att,value);
        }
        return ele;
    }
}
export default DivTag