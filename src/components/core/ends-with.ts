export const endsWith = (value1:string,value2:string) =>
    value1.toLowerCase().indexOf(value2.toLowerCase()) === value1.length - value2.length;
    