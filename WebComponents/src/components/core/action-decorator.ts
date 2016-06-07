export function Action(config: IActionConfigurationOptions = {}) {
    return function (cls) {
        cls.type = config.type;
    };
}

export interface IActionConfigurationOptions {
    type?: string,
    moduleId?: string,
}