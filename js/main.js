// 1-masala: Yoshni hisoblash
let birthYear = prompt("Tug'ilgan yilingizni kiriting:");
let age = 2026 - Number(birthYear);
console.log("Sizning yoshingiz: " + age);

// 2-masala: Doira yuzasi
let r = prompt("Radiusni kiriting:");
let S_circle = Math.PI * Math.pow(Number(r), 2);
console.log("Doira yuzasi: " + S_circle.toFixed(2));

// 3-masala: 4-darajali ildiz
let num = prompt("Son kiriting:");
let root4 = Math.pow(Number(num), 1 / 4);
console.log("4-darajali ildiz: " + root4);

// 4-masala: Valyuta konvertatsiyasi
let dollarStr = prompt("Dollarni kiriting:");
let kurs = 12500;
let som = Number(dollarStr) * kurs;
console.log(dollarStr + " dollar = " + som + " so'm");

// 5-masala: Tasodifiy son (22 dan 99 gacha)
let randomNum = Math.floor(Math.random() * (99 - 22 + 1)) + 22;
console.log("Tasodifiy son: " + randomNum);

// 6-masala: Eng kattasini topish
let n1 = Number(prompt("1-son:"));
let n2 = Number(prompt("2-son:"));
let n3 = Number(prompt("3-son:"));
console.log("Eng kattasi: " + Math.max(n1, n2, n3));

// 7-masala: Yaxlitlash farqi
let val = 4.7;
console.log("Round (yaqiniga): " + Math.round(val)); // 5
console.log("Floor (pastga): " + Math.floor(val)); // 4
console.log("Ceil (tepaga): " + Math.ceil(val)); // 5
console.log("Trunc (kasrni kesish): " + Math.trunc(val)); // 4
/* Farqi: 
Round - matematik yaxlitlaydi. 
Floor - doim kichik tomonga. 
Ceil - doim katta tomonga. 
Trunc - shunchaki nuqtadan keyingi qismini tashlab yuboradi. 
*/
// Begin1: To'g'ri to'rtburchak
let a = 5,
  b = 10;
let S_rect = a * b;
let P_rect = 2 * (a + b);

// Begin2: Aylana diametri orqali
let d = 10;
let L_circ = Math.PI * d;
let r_circ = d / 2;
let S_circ2 = Math.PI * Math.pow(r_circ, 2);

// Begin3: Kub
let sideA = 4;
let V_cube = Math.pow(sideA, 3);
let S_cube = 6 * Math.pow(sideA, 2);

// Begin4: Paralelepepid
let pa = 2,
  pb = 3,
  pc = 4;
let V_par = pa * pb * pc;
let S_par = 2 * (pa * pb + pb * pc + pa * pc);

// Begin5: O'rta arifmetik
let m1 = 10,
  m2 = 20;
let M_avg = (m1 + m2) / 2;

// Begin6: To'g'ri uchburchak
let ka = 3,
  kb = 4;
let kc = Math.sqrt(ka ** 2 + kb ** 2);
let P_tri = ka + kb + kc;

// Begin7: Halqa (ikki aylana ayirmasi)
let r1 = 10,
  r2 = 5;
let S_ring = Math.PI * (Math.pow(r1, 2) - Math.pow(r2, 2));

// Begin8: Uzunlikdan radius va yuza
let L_val = 31.4;
let R_found = L_val / (2 * 3.14);
let S_found = 3.14 * Math.pow(R_found, 2);

// Begin9: Ikki nuqta masofasi
let x1 = 0,
  y1 = 0,
  x2 = 3,
  y2 = 4;
let distance = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));

// Begin10: Qiymatlarni almashtirish (A->B, B->C, C->A)
let A = 1,
  B = 2,
  C = 3;
let temp = A;
A = C;
C = B;
B = temp;
console.log(`Yangi qiymatlar: A=${A}, B=${B}, C=${C}`);

// Begin11: Funksiya y
let x_val = 5;
let y_res = 4 * Math.pow(x_val - 3, 6) - 7 * Math.pow(x_val - 3, 3) + 2;

// Begin12: Darajalar (A^3, A^6, A^9, A^15)
let baseA = 2;
let a3 = Math.pow(baseA, 3);
let a6 = Math.pow(a3, 2);
let a9 = a6 * a3;
let a15 = a9 * a6;

// Begin13: Farengeyt to Selsiy
let Tf = 98.6;
let Tc = ((Tf - 32) * 5) / 9;

// Begin14: Shokolad va Konfet
let x_kg_shok = 2,
  a_som_shok = 50000;
let y_kg_konf = 3,
  b_som_konf = 30000;
let price_shok = a_som_shok / x_kg_shok;
let price_konf = b_som_konf / y_kg_konf;
let diff = price_shok - price_konf;

// Begin15: Abdulazizning savdosi
let x_olma = 5,
  a_narx = 10000;
let y_olma = 3,
  b_narx = 12000;
let jami_savdo = x_olma * a_narx + y_olma * b_narx;
console.log("Jami savdo: " + jami_savdo + " so'm");
