import mainabout from "./democomps/about.mjs";
import contact from "./democomps/contacts.mjs";
import docDiv from "./democomps/documention.mjs";
import mainbody from "./democomps/mainbody.mjs";
import navbar from "./democomps/navbar.mjs";
import XazzWeb from "./utils/dom.mjs";


// Write your code here - XazzWeb.AddToDom(element_name)
// IMPORTANT: Order Matters!

XazzWeb.AddToDom(navbar)
XazzWeb.AddToDomRoute('/',mainbody)
XazzWeb.AddToDomRoute('/doc',docDiv)
XazzWeb.AddToDomRoute('/about',mainabout)
XazzWeb.AddToDomRoute('/contact',contact)

XazzWeb.renderDom();


