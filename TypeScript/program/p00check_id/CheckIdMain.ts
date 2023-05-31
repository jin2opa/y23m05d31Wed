import { CheckId00 } from "./CheckId00";

let id:string = process.argv[2];
let pw:string = process.argv[3];
let ckd = new CheckId00(id, pw);
ckd.checkId();

console.log(Math.ceil(Math.random()*10));


