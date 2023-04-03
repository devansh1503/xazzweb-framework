import ButtonTag from "../core/component/button.mjs";
import DivTag from "../core/component/div.mjs";
import LinkTag from "../core/component/link.mjs";
import TextTag from "../core/component/text.mjs";
import Util from "../core/component/utility.mjs";
import form from "./newsletter.mjs";

const headtext = TextTag.create("h1",{content:"Hi! Hope Your Are Doing Great!"})
const midtext = TextTag.create("p",{content:"This is the official website for Xazzweb framework, and, This website is also built with the same framework!"})
const button = ButtonTag.create({content:"Get Started",linkTo:'/doc'})
const github = LinkTag.create("https://github.com/devansh1503/xazzweb-framework",{content:"Source Code"})

const mainbody = DivTag.create({className:"middle"})
Util.CreateChildren(mainbody,[headtext,midtext,button,github])

const headStl = {
    color:'white',
    fontSize:'70px',
    width:'50vw',
    margin:'15px'
}
const midstl = {
    color:'white',
    fontSize:'30px',
    margin:'15px',
    width:'50vw',
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
const gitstl = {
    textDecoration:'none',
    backgroundColor:'orange',
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
Util.AddStyle(github,gitstl)

export default mainbody