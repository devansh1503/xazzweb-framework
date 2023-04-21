import DivTag from "../core/component/div.mjs";
import ImageTag from "../core/component/image.mjs";
import TextTag from "../core/component/text.mjs";
import Util from "../core/component/utility.mjs";

const contact = DivTag.create({className:"contact"});

const avatar = ImageTag.create("https://res.cloudinary.com/dklbu3ywu/image/upload/v1681478270/fuhx64hs68ipr43bv5tg.jpg",{className:"avatar"});
const myname = TextTag.create("h2",{content:"Devansh Abrol"})
const des = TextTag.create("p",{content:"Hi! I am a passionate problem solver and a programmer"})
const links = DivTag.create({className:"links"});

const instagram = TextTag.create("p",{content:"Instagram",linkTo:"https://www.instagram.com/", className:"lnk"});
const twitter = TextTag.create("p",{content:"Twitter",linkTo:"", className:"lnk"});
const github = TextTag.create("p",{content:"GitHub",linkTo:"", className:"lnk"});
const linkedin = TextTag.create("p",{content:"LinkedIn",linkTo:"", className:"lnk"});

Util.CreateChildren(links,[instagram,twitter,github,linkedin])
Util.CreateChildren(contact,[avatar,myname,des,links])
Util.AddStyle(des,{fontSize:"31px"})

export default contact;
