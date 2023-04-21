class Router{
    static routes={}
    static current = "/";
    static todisplay;
    static createRoute(lnk,ele){
        Router.routes[lnk] = ele
        if(lnk === "/"){
            // ele.style["display"] = "none"
            Router.todisplay = ele
        }

    }
    static openRoute(lnk){
        const appele = document.getElementById("app");
        appele.removeChild(this.todisplay);
        Router.todisplay = Router.routes[lnk];
        appele.appendChild(this.todisplay);
        // Router.routes[Router.current].style["display"] = "none";
        // Router.routes[lnk].style["display"] = "block";
        Router.current = lnk
        history.pushState(null, null,lnk);
    }
}

export default Router