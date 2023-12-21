import * as React from "react";
import {Link, useLocation,} from "react-router-dom";

export default function PersonPage() {
    const location = useLocation();
    const person = location.state.person

    return (
        <>
            <Link to="/">Назад к списку персон</Link>
            {

                <li key={person?.name}>
                    <p>Имя персоны: {person?.name}</p>
                    <p>Пол: {person?.gender}</p>
                    <p>Год рождения: {person?.birth_year}</p>
                    <p>Рост: {person?.height}</p>
                    <p>Вес: {person?.mass}</p>
                    <p>Цвет волос: {person?.hair_color}</p>
                    <p>Цвет глаз: {person?.eye_color}</p>
                    <p>Цвет кожи: {person?.skin_color}</p>
                    <p>Родная планета: {person?.homeworld}</p>
                    <p>Вид: {person?.species}</p>
                    <p>URL: {person?.url}</p>
                    <ul>
                        Фильмы:
                        {
                            person?.films.map((item: string, index: number) => <li key={`film-${index}`}>{item}</li>)
                        }
                    </ul>
                    <ul>
                        Транспортные средства:
                        {
                            person?.vehicles.map((item: string, index: number) => <li
                                key={`vehicles-${index}`}
                            >{item}</li>)
                        }
                    </ul>
                </li>
            }
        </>
    )
}