function tradeCommissions(input) {
    let city = input[0];
    let cash = Number(input[1])

    if (city === "Sofia") {
        if (cash >= 0 && cash <= 500) {
            let result = cash * 0.05
            console.log(result.toFixed(2));
        } else if (cash > 500 && cash <= 1000) {
            let result = cash * 0.07
            console.log(result.toFixed(2));
        } else if (cash > 1000 && cash <= 10000) {
            let result = cash * 0.08;
            console.log(result.toFixed(2));
        } else if (cash > 10000) {
            let result = cash * 0.12;
            console.log(result.toFixed(2));
        } else {
            console.log('error');
        }

    } else if (city === 'Varna') {
        if (cash >= 0 && cash <= 500) {
            let result = cash * 0.045
            console.log(result.toFixed(2));
        } else if (cash > 500 && cash <= 1000) {
            let result = cash * 0.075
            console.log(result.toFixed(2));
        } else if (cash > 1000 && cash <= 10000) {
            let result = cash * 0.1;
            console.log(result.toFixed(2));
        } else if (cash > 10000) {
            let result = cash * 0.13;
            console.log(result.toFixed(2));
        } else {
            console.log('error');
        }
    } else if (city === 'Plovdiv') {
        if (cash >= 0 && cash <= 500) {
            let result = cash * 0.055
            console.log(result.toFixed(2));
        } else if (cash > 500 && cash <= 1000) {
            let result = cash * 0.08
            console.log(result.toFixed(2));
        } else if (cash > 1000 && cash <= 10000) {
            let result = cash * 0.12;
            console.log(result.toFixed(2));
        } else if (cash > 10000) {
            let result = cash * 0.145;
            console.log(result.toFixed(2));
        } else {
            console.log('error');
        }
    } else {
        console.log('error');
    }
}
tradeCommissions(["Kaspichan", "-50"])