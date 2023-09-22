document.addEventListener("DOMContentLoaded", function () {
    const hitungVolBtn = document.getElementById("hitungVol");
    const hasilVol = document.getElementById("hasilVol");

    hitungVolBtn.addEventListener("click", () => {
        const panjang = parseFloat(document.getElementById("panjang").value);
        const lebar = parseFloat(document.getElementById("lebar").value);
        const tinggi = parseFloat(document.getElementById("tinggi").value);

        if (isNaN(panjang) || isNaN(lebar) || isNaN(tinggi) || panjang <= 0 || lebar <= 0 || tinggi <= 0) {
            hasilVol.textContent = "Masukkan panjang, lebar, dan tinggi yang valid.";
        } else {
            const volume = panjang * lebar * tinggi; // Menghitung volume cuboid
            hasilVol.textContent = `Volume Cuboid: ${volume} cm³`;
        }
    });
});
