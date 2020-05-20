export interface WeatherModel {
    weather: [
        {
            main: string;
            description: string;
            icon: any;
        }
    ];
    main: {
        temp: number;
        feels_like: number;
    },
    wind: {
        speed: number;
    },
    name: string;
}
