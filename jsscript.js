var mijnAuto = {
    kleur : "blauw",
    merk : "Ford",
    snelheid: 0,

    gasgeven: function(){
        this.snelheid += 5;
        console.log(this.snelheid)
    },
    toeteren: function () {
        console.log("toet!")
    }
}

console.log(mijnAuto.kleur);
mijnAuto.gasgeven();
mijnAuto.gasgeven();
mijnAuto.gasgeven();
mijnAuto.gasgeven();
mijnAuto.gasgeven();
mijnAuto.toeteren();

