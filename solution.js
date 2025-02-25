/**
 * Mengembalikan hasil penjumlahan dua angka.
 * Contoh: tambah(3, 2) -> 5
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function tambah(a, b) {
    return a + b;
}

/**
 * Mengembalikan hasil pengurangan dua angka.
 * Contoh: kurang(5, 3) -> 2
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function kurang(a, b) {
    return a - b;
}

/**
 * Mengembalikan hasil perkalian dua angka.
 * Contoh: kali(4, 3) -> 12
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function kali(a, b) {
    return a * b;
}

/**
 * Mengembalikan hasil pembagian dua angka.
 * Contoh: bagi(10, 2) -> 5
 * @param {number} a 
 * @param {number} b
 * @throws {Error} Jika b adalah 0.
 * @returns {number} 
 */
function bagi(a, b) {
    if (b === 0) throw new Error('Tidak bisa membagi dengan 0');
    return a / b;
}

/**
 * Mengembalikan hasil pangkat dari dua angka.
 * Contoh: pangkat(2, 3) -> 8
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function pangkat(a, b) {
    return Math.pow(a, b);
}

/**
 * Mengembalikan faktorial dari sebuah angka.
 * Contoh: faktorial(5) -> 120
 * @param {number} n 
 * @returns {number}
 */
function faktorial(n) {
    if (n < 0) throw new Error('Tidak bisa menghitung faktorial dari angka negatif');
    if (n === 0 || n === 1) return 1;
    return n * faktorial(n - 1);
}

/**
 * Mengembalikan true jika angka adalah bilangan prima, false jika tidak.
 * Contoh: isPrima(7) -> true
 * @param {number} n 
 * @returns {boolean}
 */
function isPrima(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

/**
 * Mengembalikan hasil a modulus b.
 * Contoh: modulus(10, 3) -> 1
 * @param {number} a 
 * @param {number} b 
 * @throws {Error} Jika b adalah 0.
 * @returns {number}
 */
function modulus(a, b) {
    if (b === 0) throw new Error('Tidak bisa modulus dengan 0');
    return a % b;
}

/**
 * Mengembalikan nilai absolut dari sebuah angka.
 * Contoh: absolut(-7) -> 7
 * @param {number} a 
 * @returns {number}
 */
function absolut(a) {
    return Math.abs(a);
}

/**
 * Mengembalikan nilai terbesar dari dua angka.
 * Contoh: maksimum(4, 9) -> 9
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function maksimum(a, b) {
    return Math.max(a, b);
}

/**
 * Mengembalikan nilai terkecil dari dua angka.
 * Contoh: minimum(4, 9) -> 4
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function minimum(a, b) {
    return Math.min(a, b);
}

/**
 * Mengembalikan hasil dari a dibulatkan ke bilangan bulat terdekat.
 * Contoh: bulatkan(4.6) -> 5
 * @param {number} a 
 * @returns {number}
 */
function bulatkan(a) {
    return Math.round(a);
}

// ===========================
//       EKSPORT MODUL
// ===========================

/**
 * Mengekspor semua fungsi yang tersedia agar bisa digunakan di file lain.
 */
module.exports = {
    tambah,
    kurang,
    kali,
    bagi,
    pangkat,
    faktorial,
    isPrima,
    modulus,
    absolut,
    maksimum,
    minimum,
    bulatkan
};
