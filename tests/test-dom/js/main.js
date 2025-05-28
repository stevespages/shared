import { dom } from "../../../js/dom.js";
import { home_d } from "./d/home_d.js";
import { menu_d } from "./d/menu_d.js";
import { one_d } from "./d/one_d.js";
import { three_d } from "./d/three_d.js";
import { two_d } from "./d/two_d.js";

dom.createElVars();
dom.consoleLogEls();

dom.showDiv("home_d");

home_d(dom);
menu_d(dom);
one_d(dom);
three_d(dom);
two_d(dom);
