const url = 'https://api.exchangeratesapi.io/latest?base=USD';
fetch(url, {
        method:'GET'
    })
    .then((response) => response.json())
    .then((data) => {
        // console.log('Success:', data);
        const inr = data.rates.INR;
        document.getElementById('inr').innerHTML += inr;
    })
    .catch((err) => console.log(err));
