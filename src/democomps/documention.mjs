import DivTag from "../core/component/div.mjs";
import TextTag from "../core/component/text.mjs";
import Util from "../core/component/utility.mjs";
import docbody from "./document-content.mjs";

const head = TextTag.create("h1", {content:'Documentation', className:'head-doc'})
const docDiv = DivTag.create({className:"doc-div"})
Util.CreateChildren(docDiv,[head,docbody])

export default docDiv;