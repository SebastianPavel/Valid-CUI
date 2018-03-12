        let validCui = cui => {
            let reverseCui = cui.toString().split('').reverse();
            let control = reverseCui[0];
            reverseCui.shift();
            let sum = 0;
            let keyTest = ['2', '3', '5', '7', '1', '2', '3', '5', '7'];
            if (reverseCui.length > 10 || reverseCui.length < 4) {
                return false;
            }
            for (let i = 0; i < reverseCui.length; i++) {
                sum += reverseCui[i] * keyTest[i];
            }
            sum = sum * 10 % 11;
            if (sum == 10) {
                sum = 0;
            }
            if (control != sum) {
                return false;
            }
            return true;
        }
