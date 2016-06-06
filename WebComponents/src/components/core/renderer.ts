abstract class ParentRenderer {
    abstract setElementStyle(element: HTMLElement, propertyName: string, propertyValue: string): void;
}

class Renderer extends ParentRenderer {
    setElementStyle (element: HTMLElement, propertyName: string, propertyValue: string) {
        element.style[propertyName] = propertyValue;
    }
}

class JQueryRenderer extends ParentRenderer {
    setElementStyle(element: HTMLElement, propertyName: string, propertyValue: string) {
        $(element).css(propertyName, propertyValue);        
    }
}

angular.module("renderer", []).service("renderer", $ ? JQueryRenderer : Renderer);


export default $ ? JQueryRenderer : Renderer;

