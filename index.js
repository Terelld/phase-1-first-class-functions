function receivesAFunction(callBack) {
    callBack();
}
callBack(); 




function returnsANamedFunction() {
    return function namedFunction(){
    };
}

function returnsAnAnonymousFunction() {
    return function(){       
    }
}