export function calcBalance(balance, price) {
        const calc = parseFloat(balance*price).toFixed(2);
        return calc
}

export function calcAssets(ethPrice, ethBalance, daiPrice, daiBalance, batPrice, batBalance) {

        const ethTotal = calcBalance(ethPrice, ethBalance);
        const daiTotal = calcBalance(daiPrice, daiBalance);
        const batTotal = calcBalance(batPrice, batBalance);
        console.log('ethAssets', ethTotal)
        console.log('daiAssets', daiTotal)
        console.log('batAssets', batTotal)

        const totalAssets = (parseFloat(batTotal,2) + parseFloat(daiTotal,2) + parseFloat(ethTotal,2)).toFixed(2); 
        console.log('totalAssets', totalAssets)

        return totalAssets;
}

export function netWorth(Assets, Debt) {
        const calc = parseFloat(Assets-Debt).toFixed(2);
        return calc
}
