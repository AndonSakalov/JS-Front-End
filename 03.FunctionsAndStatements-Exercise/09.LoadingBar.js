function solve(percentage) {

    function formatLoadingBar(percentage) {
        let notLoadedBarLength = 10 - percentage / 10;
        let loadingBar = `[${'%'.repeat(percentage / 10)}${'.'.repeat(notLoadedBarLength)}]`
        if (percentage < 100) {
            let result = `${percentage}% ${loadingBar}`;
            result += `\nStill loading...`;
            return result;
        } else {
            result = `${percentage}% Complete!`;
            result += `\n${loadingBar}`;
        }

        return result;
    }

    console.log(formatLoadingBar(percentage));
}

solve(30);
solve(50);
solve(100);