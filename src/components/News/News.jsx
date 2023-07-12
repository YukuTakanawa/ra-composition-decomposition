import React from "react";
import New from './New';


//Список новостей
function News(props) {
    return (
        <div className="news-blocks">
            <New>
                <div className="new-wrapper">
                    <img class='icon-news' src='https://play-lh.googleusercontent.com/58CxawGskVNKYzTR97MajjmqxNGQB07tjAGfUGEtD8RGvdvQdC11UizTk-aQjkpHCE0' alt={props.text} />
                    <p className="news-block">Путин упростил получение автомобильных номеров</p>
                </div>
            </New>
            <New>
                <div className="new-wrapper">
                    <img class='icon-news' src='https://play-lh.googleusercontent.com/58CxawGskVNKYzTR97MajjmqxNGQB07tjAGfUGEtD8RGvdvQdC11UizTk-aQjkpHCE0' alt={props.text} />
                    <p className="news-block">В команде Зеленского раскрыли план реформ на Украине</p>
                </div>
            </New>
            <New>
                <div className="new-wrapper">
                    <img class='icon-news' src='https://www.kindpng.com/picc/m/193-1939576_world-news-png-world-map-facebook-cover-transparent.png' alt={props.text} />
                    <p className="news-block">Турпомощь прокомментировала гибель десятков россиян в Анталье</p>
                </div>
            </New>
            <New>
                <div className="new-wrapper">
                    <img class='icon-news' src='https://www.kindpng.com/picc/m/193-1939576_world-news-png-world-map-facebook-cover-transparent.png' alt={props.text} />
                    <p className="news-block">Суд закрыл дело Демпартии США против России</p>
                </div>
            </New>
            <New>
                <div className="new-wrapper">
                    <img class='icon-news' src='https://www.kindpng.com/picc/m/193-1939576_world-news-png-world-map-facebook-cover-transparent.png' alt={props.text} />
                    <p className="news-block">На Украине призвали создать ракеты для удара по России</p>
                </div>
            </New>
        </div>
    )
}

export default News;