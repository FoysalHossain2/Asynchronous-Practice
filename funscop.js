let a = 300;

if (true) {
    let a = 10;
    const b = 20;
    // var c = 30;
    // console.log('inner:', a);
}

// console.log(a);
// console.log(b);
// console.log(c);



function one(){
    const userName = 'Foysal'

    function two() {
        const webSite = 'youtube'
        console.log(userName);
    }
    // console.log(webSite);

    // two()
}

// one()  


if (true) {
    const userName = 'Foysal'
    if (userName === 'Foysla') {
        const webSite = "Youtube"
        console.log(userName + webSite);
    }
    // console.log(webSite);
}
// console.log(userName);

var x ;
x = 4;
console.log(x);