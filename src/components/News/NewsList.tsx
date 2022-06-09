import {memo} from 'react';
import {NewsType} from "./News";

type NewsListPropsType = {
    newsList: NewsType
}

export default memo(function NewsList({newsList}: NewsListPropsType) {
    return (
        <>

            <h1>Последние обновления {Object.keys(newsList)[1]}</h1>
            <h3>Добавлены авто</h3>
            {newsList.types.map((n) => {
                return <ul>
                    <li>{n.type}</li>
                </ul>
            })}
        </>
    );
})