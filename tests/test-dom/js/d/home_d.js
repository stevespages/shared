export function home_d(dom) {
    dom.els.home_d.addEventListener("click", (ev) => {
        if (ev.target.id === "home_dMenu_btn") {
            dom.els.menu_d.dataset.toFrom = "menu_d home_d";
            document.dispatchEvent(dom.changeDiv);
        }
    })
}
