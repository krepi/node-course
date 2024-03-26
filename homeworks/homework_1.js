//25.03.2024 Monday

class MathString {
    constructor(value) {

        if (typeof value !== 'string') {
            throw new Error('Value must be a string.');
        }

        if (!/^\d+$/.test(value)) {
            throw new Error('Value must contain only digits.');
        }
        if (value.length === 0) {
            throw new Error('Value cannot be an empty string.');
        }
        this.value = value;
    }


    isAGreaterThanB(a, b) {
        if (a.length < b.length) {
            return false;
        } else if (a.length > b.length) {
            return true;
        }
        for (let k = 0; k < a.length; k++) {
            if (parseInt(a[k], 10) < parseInt(b[k], 10)) {
                return false;
            } else if (parseInt(a[k], 10) > parseInt(b[k], 10)) {
                return true;
            }

        }


        return false;
    }


    plus(string) {

        let i = this.value.length - 1,
            j = string.length - 1,
            memo = 0,
            result = '';
        while (i >= 0 || j >= 0 || memo > 0) {
            let sum = memo;
            if (i >= 0) {
                sum += parseInt(this.value[i], 10);
                i--;
            }
            if (j >= 0) {
                sum += parseInt(string[j], 10);
                j--;
            }
            result = String(sum % 10) + result;
            memo = Math.floor(sum / 10);

        }


        return result;
    }


    minus(string) {
        if (!this.isAGreaterThanB(this.value, string)) {
            return "Error: number given is smaller or equal to main"
        }

        let i = this.value.length - 1,
            j = string.length - 1,
            borrow = 0,
            result = '';
        while (i >= 0) {
            let diff = parseInt(this.value[i], 10) - (j >= 0 ? parseInt(string[j], 10) : 0) - borrow;
            if (diff < 0) {
                diff += 10;
                borrow = 1;
            } else {
                borrow = 0;
            }
            result = String(diff) + result;
            i--;
            j--;
        }
        return result.replace(/^0+/, ''); // Usuwa wiodące zera
    }


    multiply(string) {
        if (this.value === '0' || string === '0') return '0';
        let result = Array(this.value.length + string.length).fill(0);
        for (let i = this.value.length - 1; i >= 0; i--) {
            for (let j = string.length - 1; j >= 0; j--) {
                const multiply = parseInt(this.value[i], 10) * parseInt(string[j], 10);
                const sum = result[i + j + 1] + multiply;
                result[i + j + 1] = sum % 10;
                result[i + j] += Math.floor(sum / 10);
            }
        }
        return result.join('').replace(/^0+/, '');
    }


    divide(string) {

        if (string === '0') {
            return "Error: Division by zero.";
        }
        if (!this.isAGreaterThanB(this.value, string)) {
            return "Error: number given is smaller or equal to main"
        }

        let dividend = 0, result = '';
        for (let i = 0; i < this.value.length; i++) {
            dividend = dividend * 10 + parseInt(this.value[i], 10);
            let quotient = Math.floor(dividend / parseInt(string, 10));
            result += String(quotient);
            dividend -= quotient * parseInt(string, 10);
        }
        return result.replace(/^0+/, '') || '0'; // Remove leading zeros or return '0'
    }
}

let mathString = new MathString("120");
console.log(mathString.plus("2333"));
console.log(mathString.minus("11"));
console.log(mathString.multiply("111111111"));
console.log(mathString.divide("20"));

