import DivTag from "../core/component/div.mjs";
import ListTag from "../core/component/list.mjs";
import TextTag from "../core/component/text.mjs";
import Util from "../core/component/utility.mjs";

const docbody = DivTag.create({className:'wrapperdoc'})
const tags = TextTag.create("h3",{content:"# Creating Divs and Tags-"})
const tagcontent = [
    "DivTag- Use DivTag.create({attribute:value}) to create div tag",
    "TextTag- Use TextTag.create(tag_type, {attribute:value} to create p,h1,h2 etc. tags (specify the type as first parameter)",
    "ButtonTag- Use ButtonTag.create({attribut:value}) to create a button",
    "ListTag- Use ListTag.create([array of elements],{attributes:value})",
    "InputTag- Use InputTag.create({attribute:value}), returns a block element",
    "FormTag- Use FormTag.create({attribute:value}) to create a form, and the add input tags, and buttons as children",
    "TableTag- Use new TableDiv() to create a table, and table.createRow([elements],{heading=true/false}) to create row (either a heading or not), remember to export .table from the object that you create"
]
const attrcontent = [
    "className: Specify the attribute className, to add class in the tag",
    "linkTo: To link an element to a particual route use linkTo attribute (used only in TextTag, and ButtonTag)",
    "content: To write content to a TextTag, use content attribute",
    "id: To add ID to an element add this attribute to the element",
    "preventSubmit: Prevents the default behaviour of form of submitting (mandatory) values-true/false",
    "label: Used in InputTag to specify the label, and must be used along with id attribute"
]
const domcontent = [
    "All the DOM elements must be added in app.js file",
    "XazzWeb.AddToDom(component)- Add an element to DOM and keep it fixed in all routes",
    "XazzWeb.AddToDomRoute(route,component)- Add element to DOM, with a specific route, by default '/' route will be opened " 
]
const utilcontent = [
    "Util.CreateChilder(element,[child elements])- Adds child elements to a given parent element wrapping them around",
    "Util.AddStyle(element,{style object})- Used for internal styling, by passing the element to be styled and an object of style attributes(this styling is optional, you may also style using index.css file"
]
const apicontent = [
    "xazzAPI.get(url)- Performs GET operation, returns promise which must be resolved by the developer using .then(), and converts the data to json automatically",
    "xazzAPI.post(url,data)- Performs POST operation, by passing in the url, and data",
    "xazzAPI.update(url,data)- Updates only a specified portion of data in the given API url automatically"
]
const tagbody =ListTag.create(tagcontent,{className:'tag-ls'})
const attrhead = TextTag.create("h3",{content:"# Special Attributes"});
const attrbody = ListTag.create(attrcontent)
const domhead = TextTag.create("h3",{content:"# Adding Elements To DOM"})
const domls = ListTag.create(domcontent)
const utilhead = TextTag.create("h3",{content:"# Utility Methods"})
const utills = ListTag.create(utilcontent)
const apihead = TextTag.create("h3",{content:"# XazzAPI to handle API calls"})
const apils = ListTag.create(apicontent)

Util.CreateChildren(docbody,[
    tags,
    tagbody,
    attrhead,
    attrbody,
    domhead,
    domls,
    utilhead,
    utills,
    apihead,
    apils,
])

export default docbody;