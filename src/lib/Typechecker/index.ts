export const enum TypeCheckerMode {
    BASIC = 0,
    STRICT = 1
}
export class RuntimeTypeChecker{
    private mode:TypeCheckerMode;
    constructor(mode:TypeCheckerMode){
        this.mode=mode;
    };
    literalCheck<T extends readonly any[]>(obj:any,proposed:T, message:string = ""){
        for (const value of proposed){
            if (obj === value){
                return true;
            };
        };
        if (this.mode === TypeCheckerMode.STRICT){
            throw TypeError(message);
        };
        return false;
    };
    typeCheck<T extends readonly CallableFunction[/** Class */]>(obj:object,proposed:T, message:string = ""){
        for (const value of proposed){
            if (obj instanceof value){
                return true;
            };
        };
        if (this.mode === TypeCheckerMode.STRICT){
            throw TypeError(message);
        };
        return false;
    };
    isPrimitive(o:object,message = ""){
        if (typeof o === "object" || typeof o === "function"){
            if (this.mode === TypeCheckerMode.STRICT){
                throw new TypeError(message)
            }
            return false;
        };
        return true;
    };
}