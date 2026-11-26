// SOAL 1: KARTU PERKENALAN (FUNGSI VOID)

function perkenalan(nama, kelas, hobi) {
    console.log('Nama  : ' + nama);
    console.log('Kelas : ' + kelas);
    console.log('Hobi  : ' + hobi);
    console.log('----------------------');
}

perkenalan('isabel gwen putri simanjuntak', 'X RPL 2', 'Menyanyi');
perkenalan('indyon vanya sitorus pane', 'X RPL 2', 'Membaca');
perkenalan('la prinsy sharon masie', 'X RPL 2', 'Bermain game');


// SOAL 2: PERSEGI PANJANG (FUNGSI NON-VOID)

function luasPersegiPanjang(panjang, lebar) {
    return panjang * lebar;
}

function kelilingPersegiPanjang(panjang, lebar) {
    return 2 * (panjang + lebar);
}

let luas1 = luasPersegiPanjang(10, 4);
let keliling1 = kelilingPersegiPanjang(10, 4);

let luas2 = luasPersegiPanjang(8, 5);
let keliling2 = kelilingPersegiPanjang(8, 5);

console.log('Persegi Panjang Pertama');
console.log('Luas = ' + luas1);
console.log('Keliling = ' + keliling1);

console.log('Persegi Panjang Kedua');
console.log('Luas = ' + luas2);
console.log('Keliling = ' + keliling2);
console.log('----------------------');


// SOAL 3: RAPOR MINI (GABUNGAN VOID DAN NON-VOID)

function hitungRataRata(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

function tentukanPredikat(rata) {
    if (rata >= 85) {
        return 'A';
    } else if (rata >= 75) {
        return 'B';
    } else if (rata >= 60) {
        return 'C';
    } else {
        return 'D';
    }
}

function cetakRapor(nama, n1, n2, n3) {
    let rata = hitungRataRata(n1, n2, n3);
    let predikat = tentukanPredikat(rata);

    console.log('Nama      : ' + nama);
    console.log('Rata-rata : ' + rata.toFixed(2));
    console.log('Predikat  : ' + predikat);
    console.log('----------------------');
}

cetakRapor('indyon vanya sitorus pane', 80, 85, 82);
cetakRapor('isabel gwen putri simanjuntak', 90, 88, 95);
cetakRapor('la prinsy sharon masie', 60, 65, 70);
