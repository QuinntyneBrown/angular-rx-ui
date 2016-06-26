declare module ngRxUI.core {

    export function provideAction(app: any, value: any);

    export interface IDispatcher {
        dispatch(action): any;
        subscribe(onNext): void;
    }

    export class BaseActionCreator {
        constructor($location: angular.ILocationService,
            service,
            dispatcher: IDispatcher,
            guid,
            addOrUpdateAction,
            allAction,
            removeAction,
            setCurrentAction
        );

        public $location: angular.ILocationService;
        public service;
        public dispatcher: IDispatcher;
        public guid;

        getById(options);
        all();
        addOrUpdate(options);
        remove(options);
        edit(options);        
        create();
    }

    export function CanActivate(fnDefinition: Array<any>);

    export function Service(config: IServiceConfigurationOptions);

    export interface IServiceConfigurationOptions {
        service?: any;
        serviceName?: string,
        selector?: string,
        viewProviders?: Array<string>;
        moduleId?: string,
    }

    export interface IPluckOptions {
        items: Array<any>;
        value: number;
        key?: string;
    }

    export function addOrUpdate(options);

    export function Component(config: IComponentConfigurationOptions);

    export function pluck(options: IPluckOptions);

    export function pluckOut(options:any);

    export interface IComponentConfigurationOptions {
        componentName?: string,
        component?: any,
        routes?: Array<string>,
        route?: string,
        templateUrl?: string,
        template?: string,
        selector?: string,
        viewProviders?: Array<string>;
        inputs?: Array<string>;
        transclude?: any,
        scope?: any,
        require?: string | Array<string>,
        styleUrls?: Array<string>,
        styles?: Array<string>,
        changeDetection?: ChangeDetectionStrategy,
        moduleId?: string,
        encapsulation?: ViewEncapsulation,
        restrict?: string
    }

    /**
     * Describes within the change detector which strategy will be used the next time change
     * detection is triggered.
     */
    export enum ChangeDetectionStrategy {
        /**
         * `CheckedOnce` means that after calling detectChanges the mode of the change detector
         * will become `Checked`.
         */
        CheckOnce,

        /**
         * `Checked` means that the change detector should be skipped until its mode changes to
         * `CheckOnce`.
         */
        Checked,

        /**
         * `CheckAlways` means that after calling detectChanges the mode of the change detector
         * will remain `CheckAlways`.
         */
        CheckAlways,

        /**
         * `Detached` means that the change detector sub tree is not a part of the main tree and
         * should be skipped.
         */
        Detached,

        /**
         * `OnPush` means that the change detector's mode will be set to `CheckOnce` during hydration.
         */
        OnPush,

        /**
         * `Default` means that the change detector's mode will be set to `CheckAlways` during hydration.
         */
        Default,
    }
        /**
     * Defines template and style encapsulation options available for Component's {@link View}.
     *
     * See {@link ViewMetadata#encapsulation}.
     */
    export enum ViewEncapsulation {
        /**
         * Emulate `Native` scoping of styles by adding an attribute containing surrogate id to the Host
         * Element and pre-processing the style rules provided via
         * {@link ViewMetadata#styles} or {@link ViewMetadata#stylesUrls}, and adding the new Host Element
         * attribute to all selectors.
         *
         * This is the default option.
         */
        Emulated,
        /**
         * Use the native encapsulation mechanism of the renderer.
         *
         * For the DOM this means using [Shadow DOM](https://w3c.github.io/webcomponents/spec/shadow/) and
         * creating a ShadowRoot for Component's Host Element.
         */
        Native,
        /**
         * Don't provide any template or style encapsulation.
         */
        None
    }
}