import { UI } from "./ui.model";
import { Property } from "./property.model";
import { Store, Service } from "../core";

@Service({
    serviceName: "appService",
    viewProviders:["store"]
})
export class AppService {
    constructor(public store: Store<any>) { store.subscribe(this.storeOnChange); }

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