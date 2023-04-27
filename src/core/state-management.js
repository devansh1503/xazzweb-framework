import XazzWeb from "../utils/dom.mjs";
import storestate from "../utils/storage.js";

class State{
    constructor(val){
        this.val = val;
        this.idx = storestate.length;
        this.subscribers = []
        storestate.push(val);
    }
    get(){
        return storestate[this.idx]
    }
    set(val){
        storestate[this.idx] = val;
        this.subscribers.map((ele)=>{
            //Here we will refresh the subscribers
        })
    }
    subscribe(ele){
        this.subscribers.push(ele)
    }

}

export default State;