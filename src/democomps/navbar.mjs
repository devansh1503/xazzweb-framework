import DivTag from "../core/component/div.mjs";
import ListTag from "../core/component/list.mjs";
import TextTag from "../core/component/text.mjs";
import Util from "../core/component/utility.mjs";

const navbar = DivTag.create({className:"nav"})
const logo = TextTag.create("h1",({className:"logo", content:"XAZZWEB", linkTo:"/"}))

const doc = TextTag.create("p",{content:"Documentation",linkTo:'/doc'})
const home = TextTag.create("p",{content:'Home', linkTo:'/'})
const about = TextTag.create("p",{content:'About', linkTo:'/about'})
const con = TextTag.create("p",{content:"Contacts",linkTo:'/contact'})
const cnt = TextTag.create("p",{content:"Counter",linkTo:'/counter'})

const tabs = ListTag.create([home, about,doc,con], {className:"tabs"})

Util.CreateChildren(navbar,[logo,tabs])

const navstl = {
    display:'flex',
    justifyContent:'space-around',
    alignItems:'center',
    padding:'20px',
    color:'white',
    width:'100vw'
}
const logostl = {
    fontSize:'50px',
    cursor:'pointer'
}
const tabstl = {
    listStyleType:'none',
    display:'flex',
    justifyContent:'space-around'
}
Util.AddStyle(navbar,navstl)
Util.AddStyle(logo,logostl)
Util.AddStyle(tabs,tabstl)

export default navbar


