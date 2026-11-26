
// SOAL 4
// PRAKTIK 1: FUNGSI VOID

function kartuNama(nama, kelas) {
    console.log('=====================');
    console.log('Nama  : ' + nama);
    console.log('Kelas : ' + kelas);
    console.log('=====================');
}

kartuNama('Budi', 'X RPL');
kartuNama('Siti', 'X RPL');

// PRAKTIK 2: FUNGSI NON-VOID

function luasPersegi(sisi) {
    return sisi * sisi;
}

let luas1 = luasPersegi(5);
let luas2 = luasPersegi(8);

console.log('Luas persegi pertama: ' + luas1);
console.log('Luas persegi kedua: ' + luas2);
console.log('Jumlah kedua luas: ' + (luas1 + luas2));

// PRAKTIK 3: GABUNGAN VOID DAN NON-VOID

// Non-void: menghasilkan nilai
function kelilingPersegi(sisi) {
    return 4 * sisi;
}

// Void: menampilkan hasil
function cetakKeliling(sisi) {
    let hasil = kelilingPersegi(sisi);
    console.log('Persegi dengan sisi ' + sisi + ' memiliki keliling ' + hasil);
}

cetakKeliling(6);
cetakKeliling(10);

