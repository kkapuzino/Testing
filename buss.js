function buss(a) {
    if (a === undefined || a === null) {
        throw new Error('ei parametreja');
    }
    if (a <= 7) {
        return 'ilmainen';
    }
    if (a < 16) {
        return '1€';
    } 
    if (a >= 16 && a < 25) {
        return '1.50€';
    }
    if (a >= 25 && a <= 65) {
        return '3€';
    }  else {
        return '1.50€';
    }
}

module.exports = buss;