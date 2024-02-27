import React, {memo} from 'react';
import s from './Announcement.module.scss'
import instruction1 from '../../features/images/instruction1.png'
import instruction2 from '../../features/images/instruction2.png'

export default memo(function Announcement() {
        return (
            <article className={s.container}>
                <h1>
                    Теперь Вы можете добавлять информацию самостоятельно!
                </h1>
                <h3>
                    Если Вы открыли какую-то модель и там нет информации,
                    то вам будет предоставлено окошко для добавления информации для этого авто.
                </h3>
                <img src={instruction1} alt='instruction'/>
                <h3>
                    Если модели, которую Вы хотите добавить, вообще нет в списке, перейдите по вкладке "Форма для отправки информации" и следуйте инструкции.
                </h3>
                <img src={instruction2} alt='instruction' />
                <h4>по всем вопросам и предложениям писать в MyChat - Карань Женя</h4>
            </article>
        );
    }
)