function one(callback, value) {
    setTimeout(() => {
        console.log('one 1');
        callback(value + 10)
    }, 1000);
}

function two(callback, value) {
    setTimeout(() => {
        console.log('two 2');
        callback(value  + 10)
    }, 2000);
}

function three(callback, value) {
    setTimeout(() => {
        console.log('three 3');
        callback(value + 10)
    }, 2000);
}

function four(callback , value) {
    setTimeout(() => {
        console.log('four 4');
        callback(value + 10)
    }, 2000);
}

function five(callback, value) {
    setTimeout(() => {
        console.log('five 5');
        callback(value)
    }, 2000);
}



function six() {
    setTimeout(() => {
        console.log('six 6');
    }, 1000);
}

function seven(callback,value) {
    setTimeout(() => {
        console.log('seven 7');
        callback(value + 10)
    }, 1000);
}

function eight(callback, value) {
    setTimeout(() => {
        console.log('eight 8');
        callback(value + 10)
    }, 1000);
}

function nine(callback,value) {
    setTimeout(() => {
        console.log('nine 9');
        callback(value + 10)
    }, 1000);
}

function ten(callback,value) {
    setTimeout(() => {
        console.log('ten 10');
        callback(value + 10)
    }, 1000);
}

function eleven(callback, value) {
    setTimeout(() => {
        console.log('eleven 11');
        callback(value + 10)
    }, 1000);
}

function twelve(callback, value) {
    setTimeout(() => {
        console.log('twelve 12');
        callback(value + 10)
    }, 1000);
}

function thirteen(callback, value) {
    setTimeout(() => {
        console.log('thirteen 13');
        callback(value + 10)
    }, 1000);
}

function fourteen(callback, value) {
    setTimeout(() => {
        console.log('fourteen 14');
        callback(value + 10)
    }, 1000);
}

function fifteen(callback,value) {
    setTimeout(() => {
        console.log('fifteen 15');
        callback(value + 10)
    }, 1000);
}



five(function (result1) {
    four(function (r2) { 
        three(function (r3) {
            one(function (r4) {
                two(function (r5) {
                    fifteen(function (r6) {
                        fourteen(function (r7) {
                            thirteen(function (r8) {
                                twelve(function (r9) {
                                    eleven(function (r10) {
                                        ten(function (r11) {
                                            nine(function (r12) {
                                                eight(function (r13) {
                                                    seven(function (r14) {
                                                        six(r14)
                                                        console.log(r14);
                                                    },r13)
                                                },r12)
                                            },r11)
                                        }, r10)
                                    },r9)
                                }, r8)
                            }, r7)
                        },r6)
                    },r5)
                },r4)
            },r3)
        }, r2)
    },result1)
},10)