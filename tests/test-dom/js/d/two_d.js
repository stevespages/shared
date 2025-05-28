export function two_d(dom) {

    document.addEventListener("changeDiv", () => {
        if (dom.els.two_d.dataset.toFrom === "two_d menu_d") {
            dom.els.two_d.dataset.toFrom = "";
            dom.showDiv("two_d");
            console.log("we now have changed from menu_d to two_d");
        } 
    })

    dom.els.two_d.addEventListener("click", (ev) => {
        if (ev.target.id === "two_dHome_btn") {
            dom.showDiv("home_d")
        }
    })

}
