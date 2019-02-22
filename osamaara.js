function osamaara(a, b) {
    if (a == undefined || a == null) {
        throw new Error('ei parametreja');
    }
    if (b == undefined || b == null) {
        throw new Error('ei parametreja');
    }
    if (a == 0 || a == null) {
        throw new Error('nollalla ei voi jakaa');
    }
    const result = Number(a) / Number(b);
    console.log(result);
    if (Number.isNaN(result)) {
        throw new Error('ei lukuja');
    }
    return result;
}

module.exports = osamaara;