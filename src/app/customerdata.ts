export class Customerdata {
    name:string;
    dob:Date;
    mobileNumber:number;
    doj:Date;
    plan:string;
    constructor(values: Object = {}) {

        Object.assign(this, values);
        
        }
}
