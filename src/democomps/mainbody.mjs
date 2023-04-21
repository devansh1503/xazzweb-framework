import ButtonTag from "../core/component/button.mjs";
import DivTag from "../core/component/div.mjs";
import ImageTag from "../core/component/image.mjs";
import LinkTag from "../core/component/link.mjs";
import TextTag from "../core/component/text.mjs";
import Util from "../core/component/utility.mjs";
import XazzWeb from "../utils/dom.mjs";


const headtext = TextTag.create("h1",{content:"Hi! Hope Your Are Doing Great!"})
const midtext = TextTag.create("p",{content:"This is the official website for Xazzweb framework, and, This website is also built with the same framework!"})
const wellimg = ImageTag.create("https://media.baamboozle.com/uploads/images/123844/1655515629_1061284_gif-url.gif",{class:'roboimg'})
const button = ButtonTag.create({content:"Get Started",linkTo:'/doc'})
const github = LinkTag.create("https://github.com/devansh1503/xazzweb-framework",{content:"Source Code"})
const leftdiv = DivTag.create()
const mainbody = DivTag.create({className:"middle"})
Util.CreateChildren(leftdiv,[headtext,midtext,button,github])
Util.CreateChildren(mainbody,[leftdiv,wellimg])

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
    marginTop:'5%',
    display:'flex',
}
Util.AddStyle(button,butstl)
Util.AddStyle(headtext,headStl)
Util.AddStyle(midtext,midstl)
Util.AddStyle(mainbody,mainstl)
Util.AddStyle(github,gitstl)

export default mainbody