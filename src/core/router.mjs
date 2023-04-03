class Router{
    static routes={}
    static current = "/";
    static createRoute(lnk,ele){
        if(lnk !== "/"){
            ele.style["display"] = "none"
        }
        Router.routes[lnk] = ele

    }
    static openRoute(lnk){
        Router.routes[Router.current].style["display"] = "none";
        Router.routes[lnk].style["display"] = "block";
        Router.current = lnk
        history.pushState(null, null,lnk);
    }
}

export default Router