/// <reference path='fourslash.ts' />

////module M {
////  export class C { public pub = 0; private priv = 1; }
////  export var V = 0;
////}
////
////
////var c = new M.C();
////
////c./**/ // test on c.

goTo.marker();
verify.memberListCount(1);
verify.memberListContains('pub', '(property) M.C.pub: number');