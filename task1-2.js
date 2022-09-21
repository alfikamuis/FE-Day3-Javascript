var a = 5;
let b = "kampus merdeka";
const nama = "Budi";
let terdaftar = false;
let lengkap_arr = [a,b,nama,terdaftar];

function perkenalan(){
    let asal = "indonesia";
    return console.log(
        "perkenalkan nama saya"+ nama
        +" nomor urut "+ a
        +" sekarang sedang mengikuti "+ b
        +" berasal dari "+ asal
    );
}

terdaftar = true; //b.
if (terdaftar === true){
    console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}

a = b;
//nama = b;

console.log("array ="+ lengkap_arr[2]); //a.
//console.log("asal diakses = " + asal);
console.log("a adalah = " + a);
console.log("b adalah = " + b);
perkenalan(); //c.

//2
//a. karena terdaftar bernilai true, sedangkan nilai yang dibutuhkan agar tampil adalah false
//b. karena const adalah block-scoped, value dari variable nama tidak dapat dirubah melalui reassignment
//c. tidak bisa, karena variable asal hanya di deklarasikan secara lokal pada fungsi perkenalan


