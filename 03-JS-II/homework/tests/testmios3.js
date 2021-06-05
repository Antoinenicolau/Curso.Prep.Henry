function imprime1aN(n){
    for(var i = 1; i <= n; i++) {
        if(i % 2 === 0) {
            console.log(i)
        }
        if (i > 200) {
            for(var j = 0; j < 10; j++)
            {
                console.log(j);
            }
            return;
        }
    }
}