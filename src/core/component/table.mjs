import Util from "./utility.mjs";

class TableDiv {
    constructor() {
        this.table = document.createElement("table")
    }
    createRow(data = [], attr = {}) {
        const tr = document.createElement("tr");
        const arr = []
        for (var d of data) {
            var td = document.createElement("td")
            if (attr['heading']) {
                td = document.createElement("th");
            }
            td.innerHTML = d;
            arr.push(td);
        }
        Util.CreateChildren(tr,arr);
        this.table.appendChild(tr);
        return tr
    }
}

export default TableDiv