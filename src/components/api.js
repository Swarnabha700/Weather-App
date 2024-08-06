export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=10000';

export const geoApiOptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'a6bcb786b2msh8434fe8bb340effp13b8a9jsnf6d278d8a3de',
		'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5'
export const WEATHER_API_KEY = "c13477ce99882df321949303fed6754a"