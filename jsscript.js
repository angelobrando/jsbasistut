var images = document.getElementsByTagName("img");
var pandomRumbers = [];

while (pandomRumbers.length < 9){
    var randomnumber = Math.floor(Math.random()*9 +1);
    if (pandomRumbers.lastIndexOf(randomnumber) == -1 ) {
        pandomRumbers.push(randomnumber)
    }
}
console.log(pandomRumbers)
for (let i = 0; i < images.length; i++) {
    console.log(pandomRumbers[i]);
    images[i].src = "img/aap" + pandomRumbers[i] + ".jpg"
}
