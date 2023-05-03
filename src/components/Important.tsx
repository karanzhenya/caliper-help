import React, {memo} from 'react';

export default memo(function Important() {
        return (
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                marginTop: "20%"
            }}>
                <h2>
                    Сайт работает, но на перемещение информации в новую базу данных потребуется время, т.к. более 1200 моделей авто
                </h2>
                <h4 style={{marginTop: "50px"}}>по всем вопросам и предложениям писать в MyChat - Карань Женя</h4>
            </div>
        );
    }
)