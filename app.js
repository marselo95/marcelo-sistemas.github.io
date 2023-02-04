const inputElement = document.getElementById('main-input');
const buttomElement = document.getElementById('search-buttom');
const resultElement = document.getElementById('results');

function printResults(data) {
    const { main, sys, wind, name } = data
    const { humidity, pressure, temp } = main
    const { country } = sys
    const { speed } = wind
    resultElement.innerHTML += `

        <section class="results-box">
            <div class="result-item">
                <p class="title">City</p>
                <p class="value">${name}, ${country}</p>
            </div>

            <div class="result-item">
                <p class="title">Humidity</p>
                <p class="value">${humidity}%</p>
            </div>

            <div class="result-item">
                <p class="title">Temp</p>
                <p class="value"> ${temp} Kelvin</p>
            </div>

            <div class="result-item">
                <p class="title">Pressure</p>
                <p class="value"> ${pressure} Kelvin</p>
            </div>

            <div class="result-item">
                <p class="title">Wind</p>
                <p class="value"> ${speed} Km/h</p>
            </div>
        </section>
     `
}


buttomElement.addEventListener('click', async () => {
    const { value } = inputElement

    // fetch(
    //     `https://api.openweathermap.org/data/2.5/weather?appid=281475fb650b835c4e384500d6b9b7f3&q=${value}`
    // ).then((response) => {
    //     return response.json()
    // }).then((data) => {
    //     printResults(data)
    // }).catch((err) =>{

    // })

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=281475fb650b835c4e384500d6b9b7f3&q=${value}`)

        const data = await response.json()
        printResults(data)

    } catch (error) {
        console.log(error)
    }

})