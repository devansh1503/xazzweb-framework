import ButtonTag from "../core/component/button.mjs";
import DivTag from "../core/component/div.mjs";
import TextTag from "../core/component/text.mjs";
import Util from "../core/component/utility.mjs";

const headtext = TextTag.create("h1",{content:"Hi! Hope Your Are Doing Great!"})
const midtext = TextTag.create("p",{content:"This is the official website for Xazzweb framework"})
const button = ButtonTag.create({content:"Get Started",linkTo:'/doc'})

const mainbody = DivTag.create({className:"middle"})
Util.CreateChildren(mainbody,[headtext,midtext,button])

const headStl = {
    color:'white',
    fontSize:'70px',
    width:'50vw',
    margin:'15px'
}
const midstl = {
    color:'white',
    fontSize:'30px',
    margin:'15px'
}
const butstl = {
    backgroundColor:'blueviolet',
    color:'white',
    fontSize:'25px',
    padding:'10px',
    border:'none',
    borderRadius:'25px',
    margin:'25px'
}
const mainstl = {
    marginLeft:'13%',
    marginTop:'5%'
}
Util.AddStyle(button,butstl)
Util.AddStyle(headtext,headStl)
Util.AddStyle(midtext,midstl)
Util.AddStyle(mainbody,mainstl)

export default mainbody