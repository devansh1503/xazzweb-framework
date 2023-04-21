class store{
    constructor(){
        this.states = {}
    }
    addState(key, value){
        this.states[key] = value;
    }
}
export default store;