import XazzWeb from "../utils/dom.mjs";
import storestate from "../utils/storage.mjs";

class State{
    constructor(val){
        this.val = val;
        this.idx = storestate.length;
        this.subscribers = []
        storestate.push(val);
    }
    get(){
        console.log(storestate[this.idx])
        return storestate[this.idx]
    }
    set(val){
        storestate[this.idx] = val;
        this.subscribers.map((ele)=>{
            ele.innerHTML = this.get()
            // ele.contentWindow.location.reload()
            //Here we will refresh the subscribers
        })
    }   
    subscribe(ele){
        this.subscribers.push(ele)
    }

}

export default State;