import ButtonTag from "../core/component/button.mjs";
import FormTag from "../core/component/form.mjs";
import InputTag from "../core/component/input.mjs";
import Util from "../core/component/utility.mjs";

const form = FormTag.create({preventSubmit:true, className:"form"})
const inp = InputTag.create({id:"news", label:"Enter Email", className:"news"})
const sub = ButtonTag.create({content:"Submit"})
Util.CreateChildren(form,[inp,sub]);

export default form;