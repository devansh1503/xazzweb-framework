import ButtonTag from "../core/component/button.mjs";
import DivTag from "../core/component/div.mjs";
import TextTag from "../core/component/text.mjs";
import Util from "../core/component/utility.mjs";
import { incval } from "../store/states.mjs";

const inc = () =>{
    incval.set(incval.get()+1);
}
const dec = ()=>{
    incval.set(incval.get()-1);
}
const wrap = DivTag.create();
const val = TextTag.create("h1",{content:incval.get()})
const but = ButtonTag.create({content:"increment", onClick:inc})
const decbut = ButtonTag.create({content:'decrement', onClick:dec})
Util.CreateChildren(wrap,[val,but,decbut])
Util.AddStyle(wrap,{color:'white'})
incval.subscribe(val);

export default wrap;