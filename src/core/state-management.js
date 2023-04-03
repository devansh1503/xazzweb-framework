import wrapdiv from "../components/counter.mjs";
import XazzWeb from "../utils/dom.mjs";

class State{
    constructor(attr={}){
        this.data = attr;
    }
    setState(key,value){
        this.data[key] = value;
        XazzWeb.renderDom()
    }
    get(key){
        return this.data[key];
    }
}
export default State