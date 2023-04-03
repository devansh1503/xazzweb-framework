import DivTag from "../core/component/div.mjs";
import ImageTag from "../core/component/image.mjs";
import TextTag from "../core/component/text.mjs";
import Util from "../core/component/utility.mjs";

const contact = DivTag.create({className:"contact"});

const avatar = ImageTag.create("https://media.licdn.com/dms/image/D4D03AQG1si_jA7IudA/profile-displayphoto-shrink_800_800/0/1679070608364?e=1686182400&v=beta&t=n964kL6Ko798rvsSJ80FAxiUSdlm8Ms09KKrYLn4xro",{className:"avatar"});
const myname = TextTag.create("h2",{content:"Devansh Abrol"})
const des = TextTag.create("p",{content:"Hi! I am a passionate problem solver and a programmer"})
const links = DivTag.create({className:"links"});

const instagram = TextTag.create("p",{content:"Instagram",linkTo:"https://www.instagram.com/", className:"lnk"});
const twitter = TextTag.create("p",{content:"Twitter",linkTo:"", className:"lnk"});
const github = TextTag.create("p",{content:"GitHub",linkTo:"", className:"lnk"});
const linkedin = TextTag.create("p",{content:"LinkedIn",linkTo:"", className:"lnk"});

Util.CreateChildren(links,[instagram,twitter,github,linkedin])
Util.CreateChildren(contact,[avatar,myname,des,links])
Util.AddStyle(des,{fontSize:"31px",transform:"translateX(-20%)"})

export default contact;
