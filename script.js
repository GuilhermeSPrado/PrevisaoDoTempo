const apiKey = '58dd031c91c42caa95c0e47f038421c1';
const button=document.querySelector('#submit')
const input = document.querySelector('#search-input');
const result = document.querySelector('#result');
const image=document.querySelector('#time-description #image')

//Evento Api
button.addEventListener('click', (event) => { 
  event.preventDefault();
  const city = encodeURIComponent(input.value);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt_br`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const temperature = data.main.temp-273.15;
      const description = data.weather[0].description;
      result.innerText = `Temperatura: ${temperature.toFixed(2)+'C°'} \nDescrição: ${description}`;;
    //Imagem de acordo com a descrição
    if (description.includes('sol') || description.includes('limpo')) {
      image.src = 'imagensTempo/sol.png';
    } else if (description.includes('nublado')) {
      image.src = 'imagensTempo/nublado.png';
    } else if (description.includes('nuvem') || description.includes('nuvens')) {
        image.src = 'imagensTempo/nuvem.png';
    } else if (description.includes('chuva')|| description.includes('garoa')) {
      image.src = 'imagensTempo/chuva.png';
    } else if (description.includes('névoa')) {
      image.src = 'imagensTempo/nevoa.png';
    } else {
      image.src = 'imagensTempo/dia.png';
    }
    })
    
    .catch(error => {
      console.log(error);
      result.innerText = 'Erro ao obter dados meteorológicos';
      image.src = 'imagensTempo/nuvemErro.png'
    }); 
});