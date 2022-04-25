import React, {useState} from 'react';
import s from './News.module.scss';

type NewsType = {
    type: string,
    info: string
}

function News() {
    const [news, setNews] = useState<NewsType[]>([
        {
            type: "Mitsubishi L200 2006-2015",
            info: "Передний - сзади, задний - барабан"
        },
        {
            type: "Mitsubishi FTO",
            info: "Передний - спереди, задний - сзади"
        },
        {
            type: "Mitsubishi Outlander 2012-2015",
            info: "Передний - спереди, задний - сзади"
        },
        {
            type: "Mitsubishi Pajero 2000-2006",
            info: "Передний - сзади, задний - сзади"
        },
        {
            type: "Mitsubishi Sigma",
            info: "Передний - спереди, задний - сзади"
        },
        {
            type: "Mitsubishi Space Star",
            info: "Передний - спереди, задний - сзади/барабан"
        },
        {
            type: "Mitsubishi Montero",
            info: "Передний - сзади, задний - сзади"
        },
        {
            type: "Mitsubishi Space Wagon 1991-1998",
            info: "Передний - спереди, задний - сзади/барабан"
        },
        {
            type: "Mitsubishi Space Wagon 1999-2004",
            info: "Передний - спереди, задний - сзади/барабан"
        },
        {
            type: "Chevrolet Tacuma",
            info: "Передний - спереди, задний - барабан"
        },
        {
            type: "Chevrolet Cruze 2009-2015",
            info: "Передний - спереди, задний - сзади"
        },
        {
            type: "Chevrolet Cruze 2015-",
            info: "Передний - спереди, задний - сзади"
        },
    ]);
    return (
        <div className={s.newsWrapper}>
            <h1>Последние обновления 25.04.2022</h1>
            <h3>Добавлены авто</h3>
            {news.map((n) => {
                return <ul>
                    <li>{n.type}</li>
                </ul>
            })}
        </div>
    );
}

export default News;