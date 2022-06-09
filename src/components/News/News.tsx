import React, {memo} from 'react';
import s from './News.module.scss';
import NewsList from "./NewsList";

type UpdatesType = {
    type: string
}

export type NewsType = {
    updatedDate: string,
    types: UpdatesType[]
}

const news_updated_25_04: NewsType = {
    updatedDate: '25.04.2022',
    types: [{
        type: "Mitsubishi L200 2006-2015"
    },
        {
            type: "Mitsubishi FTO"
        }
        ,
        {
            type: "Mitsubishi Outlander 2012-2015"
        }
        ,
        {
            type: "Mitsubishi Pajero 2000-2006"
        }
        ,
        {
            type: "Mitsubishi Sigma"
        }
        ,
        {
            type: "Mitsubishi Space Star"
        }
        ,
        {
            type: "Mitsubishi Montero"
        }
        ,
        {
            type: "Mitsubishi Space Wagon 1991-1998"
        }
        ,
        {
            type: "Mitsubishi Space Wagon 1999-2004"
        }
        ,
        {
            type: "Chevrolet Tacuma"
        }
        ,
        {
            type: "Chevrolet Cruze 2009-2015"
        }
        ,
        {
            type: "Chevrolet Cruze 2015-"
        }]
}
const news_updated_04_05: NewsType = {
    updatedDate: "04.05.2022",
    types: [
        {
            type: "Chrysler 200 2010-2014"
        },
        {
            type: "Chrysler 300c 2011-"
        }
        ,
        {
            type: "Chrysler 300M"
        }
        ,
        {
            type: "Chrysler Cirrus"
        }
        ,
        {
            type: "Chrysler Neon 1999-2004"
        }
        ,
        {
            type: "Chrysler Neon 1994-1999"
        }
        ,
        {
            type: "Chrysler Crossfire"
        }
        ,
        {
            type: "Chrysler Concorde 1998-2004"
        }
        ,
        {
            type: "Chrysler Concorde 1992-1997"
        }
        ,
        {
            type: "Opel Astra G 1998-2005"
        }
        ,
        {
            type: "Opel Corsa b 1999-2004"
        }
        ,
        {
            type: "Citroen C4 2004-2010"
        }
        ,
        {
            type: "Fiat Grande Punto 2005-2011"
        }
        ,
        {
            type: "Renault Clio 1998-2008"
        }
    ]
}

export default memo(function News() {
        return (
            <div className={s.newsWrapper}>
                <NewsList newsList={news_updated_25_04}/>
                <NewsList newsList={news_updated_04_05}/>
            </div>
        );
    }
)