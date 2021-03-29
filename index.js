function writeCards(nameArr) {
    let retArr = [];
    for (let i = 0; i < nameArr.length; i++) {
        retArr[i] = `Thank you, ${nameArr[i]}, for the wonderful surprise gift!`
        
    }
    return retArr;
}

function countDown(num) {
    for (num; num >= 0; num--) {
        console.log(num);
        
    }
}

countDown(5)