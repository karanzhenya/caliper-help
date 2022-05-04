import React from 'react';
import {NewsType} from "./News";

type NewsListPropsType = {
    newsList: NewsType
}

function NewsList({newsList}: NewsListPropsType) {
    return (
        <>
            <h1>Последние обновления {newsList.updatedDate}</h1>
            <h3>Добавлены авто</h3>
            {newsList.types.map((n) => {
                return <ul>
                    <li>{n.type}</li>
                </ul>
            })}
        </>
    );
}

export default NewsList;