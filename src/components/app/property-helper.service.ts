import { pluck, Store } from "../core";
import { Section } from "./section.model";
import { Property } from "./property.model";
import { UI } from "./ui.model";
import { App } from "./app.model";

interface IAppState {
    uis: Array<UI>;
    app: App
}

export class PropertyHelper {
    constructor(private store: Store<IAppState>) { }

    get state(): IAppState { return this.store.getValue(); }

    public getAppPropertyValue<T>(propertyName: string): T {

        let property = pluck({ value: propertyName, items: this.state.app.properties, key: "name" }) as Property;

        if (property.htmlBody)
            return property.htmlBody as any;

        if (property.isDynamic)
            return JSON.parse(property.value) as T;

        return property.value as any;
    }

    public getUIPropertyValue<T>(uiName: string, propertyName: string): T {

        let ui = pluck({ value: uiName, items: this.state.uis, key: "name" }) as UI;

        if (!ui)
            return null;
        
        let property = pluck({ value: propertyName, items: ui.properties, key: "name" }) as Property;

        if (property.htmlBody)
            return property.htmlBody as any;

        if (property.isDynamic)
            return JSON.parse(property.value) as T;

        return property.value as any;
    }

    public getSectionPropertyValue<T>(ui: UI, sectionName: string, propertyName: string): T {
        if (!ui)
            return null;

        let section = pluck({ value: sectionName, items: ui.sections, key: "name" }) as Section;

        if (!section || !section.properties) {
            return null;
        }

        let property = pluck({ value: propertyName, items: section.properties, key: "name" }) as Property;

        if (property.htmlBody)
            return property.htmlBody as any;

        if (property.isDynamic)
            return JSON.parse(property.value) as T;

        return property.value as any;
    }
}