import XazzWeb from "../utils/dom.mjs";

class State{
    constructor(){
        this.states = {};0
    }
    addState(key,value){
        this.states[key] = value;
    }
    setState(key,value){
        this.states[key] = value;
    }
    getValue(key){
        return this.states[key];
    }

}

export default State;