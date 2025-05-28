export function one_d(dom) {

    document.addEventListener("changeDiv", () => {
        if (dom.els.one_d.dataset.toFrom === "one_d menu_d") {
            dom.els.one_d.dataset.toFrom = "";
            dom.showDiv("one_d");
            console.log("we now have changed from menu_d to one_d");
        }
    })

    dom.els.one_d.addEventListener("click", (ev) => {
        if (ev.target.id === "one_dHome_btn") {
            dom.showDiv("home_d")
        }
    })

}
