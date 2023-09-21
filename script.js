document.addEventListener("DOMContentLoaded", function () {
    const hitungFiboBtn = document.getElementById("hitungFibo");
    const fibonacciResult = document.getElementById("fibonacciResult");

    hitungFiboBtn.addEventListener("click", () => {
        const n = parseInt(document.getElementById("fiboNum").value);
        const result = hitungFibo(n);
        fibonacciResult.textContent = `Deret Fibonacci: ${result.join(", ")}`;
    });

    function hitungFibo(n) {
        if (n <= 0) return [];
        if (n === 1) return [0];
        if (n === 2) return [0, 1];

        const urutanFibo = [0, 1];
        for (let i = 2; i < n; i++) {
            urutanFibo.push(urutanFibo[i - 1] + urutanFibo[i - 2]);
        }
        return urutanFibo;
    }
});