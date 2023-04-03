class InputTag{
    static create(attr={}){
        const ele = document.createElement("input");
        for(let[att,value] of Object.entries(attr)){
            if(att==="className"){
                ele.classList.add(value)
                continue;
            }
            ele.setAttribute(att,value);
        }
        return ele;
    }
}

export default InputTag