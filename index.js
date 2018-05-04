var to = document.getElementById("to"),
    from = document.getElementById("from"),
    message = document.getElementById("message"),
    toInp = document.getElementById("toMSG"),
    fromInp = document.getElementById("fromMSG"),
    myMsgInp = document.getElementById("myMSG"),
    bgURL = document.getElementById("bgIMG"),
    pCard = document.getElementById("postcard"),
    addToG = document.getElementById("addToG"),
    prev = document.getElementById("preview")
    allPC = [],
    saveArr = document.getElementById("saveArr"),
    loadArr = document.getElementById("loadArr"),
    dNum = 1;

toInp.addEventListener("keyup", function(){
    to.innerText = toInp.value;
});
fromInp.addEventListener("keyup", function(){
    from.innerText = fromInp.value;
});
myMsgInp.addEventListener("keyup", function(){
    message.innerText = myMsgInp.value;
});

bgURL.addEventListener("keyup", function(e){
    
    if(e.keyCode == 13){
        if(bgURL.value == "auto"){
            pCard.style.backgroundImage = "url(imgs/auto"+dNum+".jpg)";
            //bgURL.value = "imgs/auto"+dNum+".jpg";
            dNum++;
            if(dNum >= 4){
                dNum = 1;
            }
        }
        else if(bgURL.value == "" || bgURL.value == null || bgURL.value == undefined){
            pCard.style.backgroundImage = "url(imgs/default.png)"
            //bgURL.value = "imgs/default.png";
        }
        else {
        pCard.style.backgroundImage= "url("+bgURL.value+")";
        }
    }
    
});

addToG.addEventListener("click", function(){
    var newBG = pCard.style.backgroundImage;
    
    console.log(newBG);
    
    var dInfo = {
        bgimg: newBG,
        to: toInp.value,
        message: myMsgInp.value,
        from: fromInp.value
    }
    
    allPC.push(dInfo);
    
   console.log(allPC);
    
   createPostcard(toInp.value, newBG, fromInp.value, myMsgInp.value);
    
});

function createPostcard(dTo, bgImg, dFrom, msg){
    console.log(dTo, dFrom);
   nDiv = document.createElement("div");
   nDiv.className = "topFormat";
   nDiv.style.backgroundImage = bgImg;
    nDiv.onclick = function getPreviewInfo(){
        pCard.style.backgroundImage = bgImg;
        to.innerHTML = dTo;
        from.innerHTML = dFrom;
        message.innerHTML = msg;
    };
    
   //nImg = document.createElement("img");
   
   
   toDiv = document.createElement("div");
   toDiv.className = "textBox";
   toDiv.innerHTML = dTo;
    
   nDiv.appendChild(toDiv)
    
   prev.appendChild(nDiv)
}

saveArr.addEventListener("click", function(){
   localStorage.setItem('storedPostcard', JSON.stringify(allPC));
});

loadArr.addEventListener("click", function(){
   var getItem = JSON.parse(localStorage.getItem('storedPostcard'))
   
   for(var i = 0; i<getItem.length; i++){
       createPostcard(getItem[i].to, getItem[i].bgimg, getItem[i].from, getItem[i].message);
   }
});

/*
function getPreviewInfo(t, b, f, m) {
    pCard.style.backgroundImage = b;
    to.innerHTML = t;
    from.innerHTML = f;
    message.innerHTML = m;
}
*/