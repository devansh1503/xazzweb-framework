class FormTag {
    static create(attr = {}) {
        const ele = document.createElement("form")
        for (let [att, val] of Object.entries(attr)) {
            if(att === "className"){
                ele.classList.add(val);
                continue;
            }
            if (att === "preventSubmit") {
                if (val) {
                    ele.addEventListener('submit',(e)=>{
                        e.preventDefault();
                    })
                }
                continue
            }
            ele.setAttribute(att) = val;
        }
        return ele;
    }
}
export default FormTag;