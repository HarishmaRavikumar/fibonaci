function fibonacci(n) {
    let fibSeries = [];
    let a = 0, b = 1, temp;

    for (let i = 0; i < n; i++) {
        fibSeries.push(a);
        temp = a + b;
        a = b;
        b = temp;
    }

    return fibSeries;
}

function printFibonacci() {
    const limit = document.getElementById('limit').value;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Clear previous results

    const fibSeries = fibonacci(limit);

    fibSeries.forEach(num => {
        resultDiv.innerHTML += num + '<br>';
    });
}
