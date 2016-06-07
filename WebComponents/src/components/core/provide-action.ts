export var provideAction
    = (app: any, value: any) => {
        app.value((value as any).type, value);
    }