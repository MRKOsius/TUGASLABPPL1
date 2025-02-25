// Import modul readline untuk membaca input dari pengguna melalui CLI
const readline = require('readline');

// Import fungsi operasi matematika dari file solution.js
const { 
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
} = require('./solution.js');

// Membuat antarmuka readline untuk membaca input dari terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Fungsi untuk menampilkan menu operasi kepada pengguna
function displayMenu() {
    console.log('\n=== Kalkulator Sederhana ===');
    console.log('1. Penjumlahan');
    console.log('2. Pengurangan');
    console.log('3. Perkalian');
    console.log('4. Pembagian');
    console.log('5. Pangkat');
    console.log('6. Faktorial');
    console.log('7. Cek Bilangan Prima');
    console.log('8. Modulus');
    console.log('9. Nilai Absolut');
    console.log('10. Nilai Maksimum');
    console.log('11. Nilai Minimum');
    console.log('12. Pembulatan');
    console.log('0. Keluar');
}

// Fungsi utama kalkulator yang berjalan dalam loop hingga pengguna memilih keluar
async function calculator() {
    while (true) {  // Loop utama program
        displayMenu();  // Tampilkan menu setiap iterasi

        // Menunggu input pilihan operasi dari pengguna
        const choice = await new Promise(resolve => {
            rl.question('\nPilih operasi (0-12): ', resolve);
        });

        if (choice === '0') { // Jika pengguna memilih 0, program akan berhenti
            console.log('Terima kasih telah menggunakan kalkulator!');
            rl.close();
            break;
        }

        let result;
        let num1, num2;

        try {
            switch (choice) {
                case '1': // Penjumlahan
                    num1 = await new Promise(resolve => {
                        rl.question('Masukkan angka pertama: ', resolve);
                    });
                    num2 = await new Promise(resolve => {
                        rl.question('Masukkan angka kedua: ', resolve);
                    });
                    result = tambah(Number(num1), Number(num2)); // Konversi input ke angka dan lakukan operasi
                    console.log(`Hasil: ${result}`);
                    break;

                case '2': // Pengurangan
                    num1 = await new Promise(resolve => {
                        rl.question('Masukkan angka pertama: ', resolve);
                    });
                    num2 = await new Promise(resolve => {
                        rl.question('Masukkan angka kedua: ', resolve);
                    });
                    result = kurang(Number(num1), Number(num2));
                    console.log(`Hasil: ${result}`);
                    break;

                case '3': // Perkalian
                    num1 = await new Promise(resolve => {
                        rl.question('Masukkan angka pertama: ', resolve);
                    });
                    num2 = await new Promise(resolve => {
                        rl.question('Masukkan angka kedua: ', resolve);
                    });
                    result = kali(Number(num1), Number(num2));
                    console.log(`Hasil: ${result}`);
                    break;

                case '4': // Pembagian
                    num1 = await new Promise(resolve => {
                        rl.question('Masukkan angka pertama: ', resolve);
                    });
                    num2 = await new Promise(resolve => {
                        rl.question('Masukkan angka kedua: ', resolve);
                    });
                    result = bagi(Number(num1), Number(num2));
                    console.log(`Hasil: ${result}`);
                    break;

                case '5': // Pangkat
                    num1 = await new Promise(resolve => {
                        rl.question('Masukkan angka: ', resolve);
                    });
                    num2 = await new Promise(resolve => {
                        rl.question('Masukkan pangkat: ', resolve);
                    });
                    result = pangkat(Number(num1), Number(num2));
                    console.log(`Hasil: ${result}`);
                    break;

                case '6': // Faktorial
                    num1 = await new Promise(resolve => {
                        rl.question('Masukkan angka: ', resolve);
                    });
                    result = faktorial(Number(num1));
                    console.log(`Hasil: ${result}`);
                    break;

                case '7': // Cek Bilangan Prima
                    num1 = await new Promise(resolve => {
                        rl.question('Masukkan angka: ', resolve);
                    });
                    result = isPrima(Number(num1));
                    console.log(`${num1} ${result ? 'adalah' : 'bukan'} bilangan prima`);
                    break;

                case '8': // Modulus
                    num1 = await new Promise(resolve => {
                        rl.question('Masukkan angka pertama: ', resolve);
                    });
                    num2 = await new Promise(resolve => {
                        rl.question('Masukkan angka kedua: ', resolve);
                    });
                    result = modulus(Number(num1), Number(num2));
                    console.log(`Hasil: ${result}`);
                    break;

                case '9': // Nilai Absolut
                    num1 = await new Promise(resolve => {
                        rl.question('Masukkan angka: ', resolve);
                    });
                    result = absolut(Number(num1));
                    console.log(`Hasil: ${result}`);
                    break;

                case '10': // Nilai Maksimum dari dua angka
                    num1 = await new Promise(resolve => {
                        rl.question('Masukkan angka pertama: ', resolve);
                    });
                    num2 = await new Promise(resolve => {
                        rl.question('Masukkan angka kedua: ', resolve);
                    });
                    result = maksimum(Number(num1), Number(num2));
                    console.log(`Nilai maksimum: ${result}`);
                    break;

                case '11': // Nilai Minimum dari dua angka
                    num1 = await new Promise(resolve => {
                        rl.question('Masukkan angka pertama: ', resolve);
                    });
                    num2 = await new Promise(resolve => {
                        rl.question('Masukkan angka kedua: ', resolve);
                    });
                    result = minimum(Number(num1), Number(num2));
                    console.log(`Nilai minimum: ${result}`);
                    break;

                case '12': // Pembulatan angka desimal
                    num1 = await new Promise(resolve => {
                        rl.question('Masukkan angka desimal: ', resolve);
                    });
                    result = bulatkan(Number(num1));
                    console.log(`Hasil pembulatan: ${result}`);
                    break;

                default:
                    console.log('Pilihan tidak valid! Silakan coba lagi.');
            }
        } catch (error) {
            console.log(`Error: ${error.message}`); // Menangani error yang mungkin terjadi
        }
    }
}

// Menjalankan kalkulator
calculator();
