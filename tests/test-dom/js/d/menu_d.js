export function menu_d(dom) {

    document.addEventListener("changeDiv", () => {
        if (dom.els.menu_d.dataset.toFrom === "menu_d home_d") {
            dom.els.menu_d.dataset.toFrom = "";
            dom.showDiv("menu_d");
            console.log("we now have changed from home_d to menu_d!!");
        }
    })

    dom.els.menu_d.addEventListener("click", (ev) => {

        if (ev.target.id === "menu_dHome_btn") {
            dom.showDiv("home_d");
        }

        if (ev.target.id === "menu_dOne_btn") {
            dom.els.one_d.dataset.toFrom = "one_d menu_d";
            document.dispatchEvent(dom.changeDiv);
        }

        if (ev.target.id === "menu_dThree_btn") {
            dom.els.three_d.dataset.toFrom = "three_d menu_d";
            document.dispatchEvent(dom.changeDiv);
        }

        if (ev.target.id === "menu_dTwo_btn") {
            dom.els.two_d.dataset.toFrom = "two_d menu_d";
            document.dispatchEvent(dom.changeDiv);
        }
    })

}
