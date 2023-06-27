"use client"

import { TDict } from "@/types/common";
import axios from "axios";
import { useEffect, useState } from "react";

const Weather = () => {
    const [weather, setWeather] = useState<TDict | null>(null);

    useEffect(() => {
        getWeather();
    }, []);

    const getWeather = () => {
        axios.get("https://api-deslocamento.herokuapp.com/api/v1/WeatherForecast").then((res) => {
            const data = new Date(res.data[0].date);

            const ano = data.getFullYear();
            const mes = data.getMonth();
            const dia = data.getDay();

            const hora = data.getHours();
            const minutos = data.getMinutes();
            const segundos = data.getSeconds();

            const date = `${dia}/${mes}/${ano} - ${hora}:${minutos}:${segundos}`;
            setWeather({
                temperatureC: res.data[0].temperatureC,
                temperatureF: res.data[0].temperatureF,
                summary: res.data[0].summary,
                date: date
            });
        }).catch((_) => {
            setWeather(null);
        });
    };


    return (
        <section className="bg-black rounded-[8px] absolute bottom-[2rem] left-[2rem] flex gap-x-4 flex-wrap px-3 py-2">
            {
                weather ?
                <>
                    <div className="grid grid-cols-2 grid-rows-2 gap-y-1 items-center">
                        <span className="text-white text-2xl col-span-2 row-start-1">
                            {`${weather.temperatureC} ºC`}
                        </span>
                        <span className="text-[rgba(255,255,255,0.65)] text-sm col-start-2 row-start-2">
                            {`${weather.temperatureF} ºF`}
                        </span>
                    </div>
                    <div className="grid grid-rows-2 gap-y-1 items-center justify-items-center">
                        <span className="text-white text-xl row-start-1">
                            {weather.summary}
                        </span>
                        <span className="text-white text-sm row-start-2">
                            {weather.date}
                        </span>
                    </div>
                </> : 
                <span>
                    {"loding weather...."}
                </span>
            }
        </section>
    );
};


export default Weather;