==ORIGINAL==
namespace A {
    let x = 1;
    export function foo() {
    }
    namespace B {
        function a() {
            let a = 1;
        
            let y = 5;
            let z = x;
            a = y;
            return foo();
        }
    }
}
==SCOPE::function 'a'==
namespace A {
    let x = 1;
    export function foo() {
    }
    namespace B {
        function a() {
            let a = 1;
        
            return /*RENAME*/newFunction();

            function newFunction() {
                let y = 5;
                let z = x;
                a = y;
                return foo();
            }
        }
    }
}
==SCOPE::namespace 'B'==
namespace A {
    let x = 1;
    export function foo() {
    }
    namespace B {
        function a() {
            let a = 1;
        
            var __return: any;
            ({ __return, a } = /*RENAME*/newFunction(a));
            return __return;
        }

        function newFunction(a: number) {
            let y = 5;
            let z = x;
            a = y;
            return { __return: foo(), a };
        }
    }
}
==SCOPE::namespace 'A'==
namespace A {
    let x = 1;
    export function foo() {
    }
    namespace B {
        function a() {
            let a = 1;
        
            var __return: any;
            ({ __return, a } = /*RENAME*/newFunction(a));
            return __return;
        }
    }

    function newFunction(a: number) {
        let y = 5;
        let z = x;
        a = y;
        return { __return: foo(), a };
    }
}
==SCOPE::global scope==
namespace A {
    let x = 1;
    export function foo() {
    }
    namespace B {
        function a() {
            let a = 1;
        
            var __return: any;
            ({ __return, a } = /*RENAME*/newFunction(x, a));
            return __return;
        }
    }
}
function newFunction(x: number, a: number) {
    let y = 5;
    let z = x;
    a = y;
    return { __return: A.foo(), a };
}
