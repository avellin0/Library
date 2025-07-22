import "./book_reader.css"
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"

interface BookProps {
    good_read: string[];
}

export default function BookReader() {


    const [book, setBook] = useState<BookProps | null>(null);
    const [chapter, setChapter] = useState(0);

    const { name } = useParams<string>()

    useEffect(() => {
        console.log("Esse é o parametro:", name);
        GetBook();
    }, []);

    const GetBook = async () => {
        const response = await fetch(`https://pylibrary.onrender.com/books?name=${name}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log("Data fetched:", data);



        setBook(data);
    }


    return (
        <>

            <div id="book-reader">
                <div id="book-sidebar">
                    <div id="book-side-notes">
                        <h1>Notes</h1>
                        <textarea name="" id="book-side-text" spellCheck="false" placeholder="Deixe sua mente livre escreva aqui!"/>
                    </div>

                    <div id="book-side-chapter">
                        <h3>pagina {chapter + 1}</h3>
                        <button id="book-side-btn" onClick={() => setChapter(chapter + 1)}>Proximo capitulo</button>
                    </div>
                </div>

                <div id="book-area">
                    {book?.good_read[chapter < book.good_read.length ? chapter : 0] || "Loading..."}
                </div>

            </div>
        </>
    )
}