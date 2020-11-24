class Lingkaran{
    contruktor(p, r){
        this.phi = p
        this.jari = r
    }

    luas = () => {
        return this.phi * this.jari * this.jari
    }

    keliling = () => {
        return this.phi * this.jari * 2
    }

}

class Tabung extends Lingkaran{
    constructor(p,r,t){
        super(p,l)
        this.tinggi = t
    }
    luas = () => {
        return 2*2*this.jari(this.jari*this.tinggi)
    }
    volume = () => {
        return this.phi * this.jari * this.jari * this.tinggi
    }
    selimut = () => {
        return this.phi * this.jari * 2 * this.tinggi
    }
}

class Kerucut extends Lingkaran{
    constructor(p,r,t){
        super(p,l)
        this.tinggi = t
    }
    luas = () => {
        return 2*2*this.jari(this.jari*this.tinggi)
    }
    volume = () => {
        return this.phi * this.jari * this.jari * this.tinggi
    }
    selimut = () => {
        return this.phi * this.jari * 2 * this.tinggi
    }
}

class Bola extends Lingkaran{
    constructor(p,r,t){
    }
    luas = () => {
        return 4 * this.jari * this.jari
    }
    volume = () => {
        return 4 /3 * this.phi * this.jari * this.jari * this.jari
    }

}

let gelas = new Tabung(3.14,7.5,50)
console.log("Volume gelas = " + gelas.volume())
console.log("Luas gelas = " + gelas.luas())
console.log("Selimut gelas = " + gelas.gelas())

let alat = new Kerucut(3.14,10,40)
console.log("Volume alat = " + alat.volume())
console.log("Luas alat = " + alat.luas())
console.log("Selimut alat = " + alat.gelas())

let sepak = new Bola(3.14,15)
console.log("Volume sepak = " + sepak.volume())
console.log("Luas sepak = " + sepak.luas())