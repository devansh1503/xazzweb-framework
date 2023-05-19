import ButtonTag from "../core/component/button.mjs";
import DivTag from "../core/component/div.mjs";
import IFrame from "../core/component/iframe.mjs";
import InputTag from "../core/component/input.mjs";
import TextTag from "../core/component/text.mjs";
import Util from "../core/component/utility.mjs";
import xazzAPI from "../utils/http.mjs";

const cli = () =>{
    xazzAPI.get("https://catfact.ninja/fact").then((res)=>{
        resdiv.innerHTML=res.fact
    })
}
const pos = () =>{
    xazzAPI.post("http://localhost:4000/",{
        name:InputTag.value(inputname),
        password:InputTag.value(inputpass),
    }).then((res)=>{
        iframe.src = iframe.src
    })
}
const patch = ()=>{
    xazzAPI.patch("http://localhost:4000/",{
        name:InputTag.value(newname),
        id:InputTag.value(inputid)
    }).then((res)=>{
        iframepatch.src = iframepatch.src
    })
}


// COMPONENTS
const apidiv = DivTag.create();
const heading = TextTag.create("h1",{content:"Let's Try XAZZAPI"})

const getdiv = DivTag.create({className:'altapidiv'})
const getBut = ButtonTag.create({content:"GET API", onClick:cli})
const resdiv = TextTag.create("p",{content:"Click on the button to fetch a random fact about cats"})
Util.CreateChildren(getdiv,[getBut,resdiv])

const posthead = DivTag.create()
const inputname = InputTag.create({id:'name',label:'Name:'})
const inputpass = InputTag.create({id:'pass',label:'Password:', type:'password'})
const postbut = ButtonTag.create({content:"POST DATA", onClick:pos})
const iframe = IFrame.create("http://localhost:4000/",{width:"500px",height:"300px"})
Util.CreateChildren(posthead,[inputname,inputpass,postbut,iframe])

const patchhead = DivTag.create({className:'altapidiv'})
const newname = InputTag.create({id:'namepatch',label:'Name:'})
const inputid = InputTag.create({id:'id',label:'ID:'})
const patchbut = ButtonTag.create({content:"PATCH DATA", onClick:patch})
const iframepatch = IFrame.create("http://localhost:4000/",{width:"500px",height:"300px"})
Util.CreateChildren(patchhead,[newname,inputid,patchbut,iframepatch])

// STYLING
const headingstl = {
    color:'EB006C',
}
const datastl = {
    color:'white',
    margin:'20px',
    fontSize:'25px'
}
const buttonstl = {
    border:'none',
    backgroundColor:'EB006C',
    color:'white',
    padding:'10px',
    fontSize:'25px',
    borderRadius:'25px',
    margin:'20px'
}
const apidivstl = {
    padding:'30px'
}


Util.AddStyle(apidiv,apidivstl)
Util.AddStyle(heading,headingstl)
Util.AddStyle(getBut,buttonstl)
Util.AddStyle(resdiv,datastl)
Util.AddStyle(inputname,{color:"white", padding:'20px',fontSize:'25px'})
Util.AddStyle(inputpass,{color:"white", padding:'20px', fontSize:'25px'})
Util.AddStyle(postbut,buttonstl)
Util.AddStyle(patchbut,buttonstl)
Util.AddStyle(newname,{color:"white", padding:'20px',fontSize:'25px'})
Util.AddStyle(inputid,{color:"white", padding:'20px', fontSize:'25px'})


Util.CreateChildren(apidiv,[heading,getdiv,posthead,patchhead])

export default apidiv;