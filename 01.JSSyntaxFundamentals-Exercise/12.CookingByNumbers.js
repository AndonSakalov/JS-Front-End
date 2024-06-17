function solve(numStr, ...args) {
    let num = Number(numStr);
    for (let i = 0; i < args.length; i++) {
        switch (args[i]) {
            case 'chop':
                num /= 2;
                console.log(num);
                break;
            case 'dice':
                num = Math.sqrt(num);
                console.log(num);
                break;
            case 'spice':
                num += 1;
                console.log(num);
                break;
            case 'bake':
                num *= 3;
                console.log(num);
                break;
            case 'fillet':
                num *= 0.8;
                console.log(num);
                break;

            default:
                break;
        }
    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
console.log(`over`);