class ListTag{
    static create(ele=[],attr={}){
        const ul = document.createElement("ul")
        ele.map((item)=>{
            const li = document.createElement("li");
            if(typeof item === "object"){
                li.appendChild(item)
            }
            else li.innerHTML = item
            for(let[att,val] of Object.entries(attr)){
                if(att==="className"){
                    li.classList.add(val)
                    continue
                }
                li.setAttribute(att) = val;
            }
            ul.appendChild(li)
        })
        return ul;
    }
    static createSingle(text, attr={}){
        const li = document.createElement("li");
        li.textContent = text;
        for(let[att,val] of Object.entries(attr)){
            if(att==="className"){
                li.classList.add(val)
                continue
            }
            li.setAttribute(att) = val;
        }
        return li;
    }
}
export default ListTag