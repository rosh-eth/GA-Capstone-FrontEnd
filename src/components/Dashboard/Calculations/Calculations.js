export function calcBalance(balance, price) {
        const calc = parseFloat(balance*price).toFixed(2);
        return calc
}

export function calcAssets(ethPrice, ethBalance, daiPrice, daiBalance, batPrice, batBalance) {

        const ethTotal = calcBalance(ethPrice, ethBalance);
        const daiTotal = calcBalance(daiPrice, daiBalance);
        const batTotal = calcBalance(batPrice, batBalance);

        const totalAssets = parseFloat(batTotal) + parseFloat(daiTotal) + parseFloat(ethTotal);

        return totalAssets;
}


