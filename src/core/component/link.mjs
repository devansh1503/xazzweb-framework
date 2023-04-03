class LinkTag{
    static create(src, attr={}){
        const ele = document.createElement("a");
        ele.href = src;
        for (let [att, value] of Object.entries(attr)) {
            if (att === "className") {
                ele.classList.add(value)
                continue;
            }
            if (att === "content") {
                ele.textContent = value;
                continue;
            }
            ele.setAttribute(att, value);
        }
        return ele;
    }
}
export default LinkTag;