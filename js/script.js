function calculatetriangle() {
  const alas = document.getElementById("alas-triangle").value;
  const tinggi = document.getElementById("high-triangle").value;
  const kolom1 = document.getElementById("Luas_Segitiga_1");
  const kolom2 = document.getElementById("Luas_Segitiga_2");
  const kolom3 = document.getElementById("Luas_Segitiga_3");
  const luas = (alas * tinggi) / 2;
  kolom1.innerHTML = "L = 1/2 x a x t";
  kolom2.innerHTML = "L = 1/2 x " + alas + " x " + tinggi;
  kolom3.innerHTML = "L = " + luas + " cm2";
  alert("Luas Segitiga = " + luas + " cm2");
  console.log(luas);
}

// Clear input values and result divs
function kelilingtriangle() {
  const sisi1 = document.getElementById("sisi_1").value;
  const sisi2 = document.getElementById("sisi_2").value;
  const sisi3 = document.getElementById("sisi_3").value;
  const kolom1 = document.getElementById("Keliling_Segitiga1");
  const kolom2 = document.getElementById("Keliling_Segitiga2");
  const kolom3 = document.getElementById("Keliling_Segitiga3");
  const keliling = parseInt(sisi1) + parseInt(sisi2) + parseInt(sisi3);
  kolom1.innerHTML = "K = s1 + s2 + s3";
  kolom2.innerHTML = "K = " + sisi1 + " + " + sisi2 + " + " + sisi3;
  kolom3.innerHTML = "K = " + keliling + " cm";
  alert("Keliling Segitiga = " + keliling + " cm");
  console.log(keliling);
}

function resetResults() {
  document.getElementById("alas-triangle").value = "";
  document.getElementById("high-triangle").value = "";
  document.getElementById("Luas_Segitiga_1").innerHTML = "";
  document.getElementById("Luas_Segitiga_2").innerHTML = "";
  document.getElementById("Luas_Segitiga_3").innerHTML = "";
  document.getElementById("sisi_1").value = "";
  document.getElementById("sisi_2").value = "";
  document.getElementById("sisi_3").value = "";
  document.getElementById("Keliling_Segitiga1").innerHTML = "";
  document.getElementById("Keliling_Segitiga2").innerHTML = "";
  document.getElementById("Keliling_Segitiga3").innerHTML = "";
}
