import React, { useState, useEffect } from "react";
import Banner from "./Banner";

function News() {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("http://127.0.0.1:5000/getNews")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("HTTP error, status = " + response.status);
                }
                return response.json();
            })
            .then((data) => {
                setNews(data.articles.slice(0, 8));
            })
            .catch((error) => console.error("Error:", error))
            .finally(() => setIsLoading(false));
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Banner title="News" />
            <div className="news-container flex flex-row flex-wrap p-4">
                {news.map((item, index) => (
                    <div
                        className={`news-item bg-sky-950 rounded-lg shadow-md p-4 m-4 w-1/4 invisible appear-${index}`}
                        key={index}
                    >
                        <h1 className="news-source text-lg font-bold mb-2">
                            {item.source.name}
                        </h1>
                        <h2 className="news-title text-xl font-semibold mb-2">
                            {item.title}
                        </h2>
                        <p className="news-description text-sky-300 mb-2 ">
                            {item.description}
                        </p>
                        <a
                            className="news-link text-blue-500 hover:underline"
                            href={item.url}
                        >
                            Read More
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default News;
