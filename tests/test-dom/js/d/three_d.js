export function three_d(dom) {

    document.addEventListener("changeDiv", () => {
        if (dom.els.three_d.dataset.toFrom === "three_d menu_d") {
            dom.els.three_d.dataset.toFrom = "";
            dom.showDiv("three_d");
            console.log("we now have changed from menu_d to three_d");
        }
    })

    dom.els.three_d.addEventListener("click", (ev) => {
        if (ev.target.id === "three_dHome_btn") {
            dom.showDiv("home_d")
        }
    })

}
