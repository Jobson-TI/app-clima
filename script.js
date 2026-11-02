const inp = document.getElementById('input-clima');
const btn = document.getElementById('buscar');
const h2 = document.getElementById('nomeCidade');
const temp = document.getElementById('temp');
const vento = document.getElementById('vento');
const h3 = document.getElementById('clima');
const info = document.querySelector('.info');

const weather_tradutor = {
        0: 'Céu limpo ☀️',
        1: 'Parcialmente nublado ⛅',
        2: 'Parcialmente nublado ⛅',
        3: 'Nublado ☁️',
        61: 'Chuva 🌧️',
        63: 'Chuva 🌧️',
        65: 'Chuva 🌧️',
        95: 'Tempestade ⛈️'
    };

async function buscarClima(link) {
    const resposta = await fetch(link);
    const dados = await resposta.json();

    if(dados.results) {

        const lat = dados.results[0].latitude;
        const long = dados.results[0].longitude;

        const latlong = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,wind_speed_10m,weather_code`;
        const clima = await fetch(latlong);
        const climadados = await clima.json();
        const weather = climadados.current.weather_code;

        h2.textContent = dados.results[0].name;
        temp.textContent = `${climadados.current.temperature_2m} °C`;
        vento.textContent  = `${climadados.current.wind_speed_10m} km/h`;
        h3.textContent = weather_tradutor[weather] || 'Tempo desconhecido';
        info.style.display = 'block';

    } else {
        alert("Digite uma cidade válida");
        info.style.display = 'none';
    };
};

function buscar(){
    const cidade = inp.value.trim();
    const link = `https://geocoding-api.open-meteo.com/v1/search?name=${cidade}&count=1&language=pt`;
    buscarClima(link);
};
btn.addEventListener('click', buscar);

inp.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        buscar();
    }
});