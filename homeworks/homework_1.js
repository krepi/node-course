//25.03.2024 Monday
console.log("hello lets make some maths");

const myString = function (value) {
    if (Number(value) > 0) {
        this.value = Number(value);
    } else {
        throw new Error("value have to be larger than zero")
    }

}
myString.prototype.plus = function (string) {
    return this.value + Number(string);
}
myString.prototype.minus = function (string) {
    if (this.value > Number(string)) {

        return this.value - Number(string);
    } else {
        throw new Error("value have to be smaller than base value");
    }
}

myString.prototype.multiply = function (string) {
    return this.value * Number(string);
}
myString.prototype.divide = function (string) {
    if (Number(string) !== 0) {
    return Math.round(this.value / Number(string))
    }
}
// I can use 'let String'  name, but it could override String object and it can be dangerous
// and create some kind of confusion for other programmers


let MathString = new myString("100");
console.log(MathString.plus("30"));
console.log(MathString.minus("30"));
console.log(MathString.multiply("30"));
console.log(MathString.divide("3"));