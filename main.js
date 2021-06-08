function inso() {
    let numBer = +document.getElementById("number").value;
    let NT = 2;
    let so ="";
    for(let dem = 1;dem <= numBer;NT++) {
        let check = true;
        for( let i=2;i<(NT-1);i++){
            if(NT % i == 0){
                check = false;
                break;
            }
        }
        if(check){
            so += NT + " ";
            document.getElementById("ketqua").innerHTML = so;
             dem++;
            }
    }

}