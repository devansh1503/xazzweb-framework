import DivTag from "../core/component/div.mjs";
import ImageTag from "../core/component/image.mjs";
import ListTag from "../core/component/list.mjs";
import TextTag from "../core/component/text.mjs";
import Util from "../core/component/utility.mjs";

const mainabout = DivTag.create({className:'about'});

const title = TextTag.create("h1", {content:"ABOUT THIS FRAMEWORK"})

const intro = "This is a Web Framework built independently as a project, you might like to read the documentation to understand it's use better. And you might also like to use it in your own projects, as it provides several features. Happy Exploring!"
const introtag = TextTag.create("p",{content:intro})
const imgintro = ImageTag.create("https://cdn-icons-png.flaticon.com/512/5167/5167580.png",{className:'img-tag'})
const introdiv = DivTag.create({className:'intro'})
Util.CreateChildren(introdiv,[imgintro,introtag])



const features = [
    "Helps shortening the syntax for many components, for example, Lists, which can be created with just one line of code",
    "Contains inbuilt Routing feature to provide dynamic routing without needing to create a new page",
    "Contains inbuilt API handling functions in the XazzAPI class, helping user to get rid of installing external libraries like axios or writing long codes in fetch function",
    "Internal styling can be implemented easily",
    "Easy to use and learn for beginners"
]
const featuresls = ListTag.create(features)
const imgfeatures = ImageTag.create("https://cdn-icons-png.flaticon.com/512/6954/6954319.png",{className:'img-tag'})
const featurediv = DivTag.create({className:'features'})
Util.CreateChildren(featurediv,[featuresls,imgfeatures])

Util.CreateChildren(mainabout,[title,introdiv,featurediv]);

export default mainabout;