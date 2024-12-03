function buyitem(i){
    const items = document.querySelectorAll(".items");
    const vals = document.querySelectorAll(".itemVal");
    const inputCoins = parseInt(document.querySelector("#inputCoin").value,10);
    let val = parseInt(vals[i].innerText,10);
    if(inputCoins>=val){
        let retCoin = inputCoins-val;
        document.querySelector("#returns").value = retCoin;
        document.querySelector("#returnItem").value = items[i].innerText;
        document.querySelector("#inputCoin").value = "";
        for(item of items){
            item.style.backgroundColor = "transparent";
        }
    }
}

document.querySelector("#inputCoin").addEventListener("change", function(){
    const items = document.querySelectorAll(".items");
    const vals = document.querySelectorAll(".itemVal");
    const inputCoins = parseInt(document.querySelector("#inputCoin").value,10);
    console.log(`valChange: ${inputCoins}`)
    console.log(`type: ${typeof(inputCoins)}`)
    for(let i = 0; i<items.length; i++){
        let val = parseInt(vals[i].innerText,10);
        if(val<=inputCoins){
            items[i].style.backgroundColor = "yellow";
        }else{
            items[i].style.backgroundColor = "transparent";
        }
    }
})