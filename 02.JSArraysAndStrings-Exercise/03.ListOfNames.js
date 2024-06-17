function solve(names){
    names.sort((a, b) => {
        if (a.toLowerCase() > b.toLowerCase()) {
            return 1;
        }else if(b.toLowerCase() > a.toLowerCase()){
            return -1;
        }else{
            return 0
        }
    })

    for (let i = 0; i < names.length; i++) {
        console.log(`${i+1}.${names[i]}`);
    }
}