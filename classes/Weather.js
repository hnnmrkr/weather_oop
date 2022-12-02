class Weather{
    constructor(city){
        this.key = '0a255ae95c252dd54ad553867fcb343b';
        this.city = city;
    }
    async getWeather(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`)
        return await response.json()
    }

    changeCity(city){
        this.city = city;
    }
}