import { UI } from "./ui.model";
import { Property } from "./property.model";
import { Store } from "../core";

export class App {
    constructor(public store: Store<any>) {
        store.subscribe(this.storeOnChange);
    }

    storeOnChange = state => {

    }

    properties: Array<Property> = [];
    uis: Array<UI> = [];
    getProperty = <T>(name: string): T => {
        let result;
        for (let i = 0; i < this.properties.length; i++) {
            if (this.properties[i].name === name)
                result = this.properties[i].value;
        }
        return result as T;
    }
}