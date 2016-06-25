export var provide
    = (app: any, service: any) => {
        if ((service as any).$inject) {
            app.service((service as any).serviceName, [...service.$inject, service]);
        } else {
            app.service((service as any).serviceName, [service]);
        }
    }