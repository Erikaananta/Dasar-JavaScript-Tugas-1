let bb = 90
let tb = 170*170

let bmi = bb/tb

let nilai = bmi
if (nilai < 18.5) {
    console.log("kurang berat badan")
} else if (18.5 < nilai < 24.9) {
    console.log("normal/ideal")
} else if (25.0 < nilai < 29.9) {
    console.log("kelebihan berat badan")
} else {
    console.log("obesitas")
}