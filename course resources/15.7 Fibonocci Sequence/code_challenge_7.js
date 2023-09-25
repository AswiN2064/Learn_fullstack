function fibonocci(n){
    var list = []
    for (i = 0; i <= n - 1; i++){
        if (i > 1){
            f = list[i - 1] + list[i - 2];
            list.push(f);
        } else {
            f = i;
            list.push(f);
        }
    }
    console.log(list);
}

fibonocci(2);