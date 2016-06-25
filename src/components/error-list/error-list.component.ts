import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { ErrorItem } from './error-item.model';
import { ErrorEvent } from './error-event.model';
import { ErrorConfig } from './error-config.service';

@Component({
    template: require("./error-list.component.html"),
    styles: [require("./error-list.component.scss")],
    selector: "error-list",
    changeDetection: ChangeDetectionStrategy.OnPush,
    viewProviders:["errorConfig"]
})
export class ErrorListComponent {
    public errorList: Array<ErrorItem> = [];

    constructor(public errorConfig: ErrorConfig) { }

    storeOnChange = state => {

    }

    private getGenericError(): ErrorItem {
        return {
            message: this.errorConfig.message,
            href: this.errorConfig.href,
            hrefText: this.errorConfig.hrefText,
            dateTime: new Date().toISOString()
        };
    }

    dismissError(index: number) {
        this.errorList.splice(index, 1);
    }
}
