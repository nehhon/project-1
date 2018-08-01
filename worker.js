const isPrime = num => {
    for (let i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num !== 1;
}

function test(ini) {
    var i2=0
    const repetition = 120000+ini
    var D1 = performance.now();
    for (var i = ini; i < repetition; i++) {
        if (isPrime(i)) {
            i2++
            var last=i
        }
    }
    D1 = performance.now() - D1;
    self.postMessage({arr:i2,time:D1, last:last});
}


self.addEventListener('message', function (e) {
    test(e.data)
}, false);