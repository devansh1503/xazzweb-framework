import ButtonTag from "../core/component/button.mjs";
import DivTag from "../core/component/div.mjs";
import TextTag from "../core/component/text.mjs";
import Util from "../core/component/utility.mjs";
import State from "../core/state-management.js";

var stobj = new State();
stobj.addState("num",1);

function inc(){
    var prev = stobj.getValue("num")
    stobj.setState("num",prev+1);
    console.log(stobj.getValue("num"));
}

const val = TextTag.create("h1",{content:stobj.getValue("num")})
const button = ButtonTag.create({content:"Increment by 1", onClick:inc})

const maindiv = DivTag.create();
Util.CreateChildren(maindiv,[val,button]);

export default maindiv;