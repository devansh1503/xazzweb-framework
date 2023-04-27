import ButtonTag from "../core/component/button.mjs";
import DivTag from "../core/component/div.mjs";
import TextTag from "../core/component/text.mjs";
import Util from "../core/component/utility.mjs";
import State from "../core/state-management.js";

const stateobj = new State(1);

const inc = () =>{
    stateobj.set(stateobj.get()+1);
}
const wrap = DivTag.create();
const val = TextTag.create("h1",{content:stateobj.get()})
const but = ButtonTag.create({content:"increment", onClick:inc})
Util.CreateChildren(wrap,[val,but])
Util.AddStyle(wrap,{color:'white'})
stateobj.subscribe(val);

export default wrap;