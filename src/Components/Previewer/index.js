import React from 'react';
import './index.css';
import { marked } from 'marked';
import dompurify from "dompurify";

marked.setOptions({
    breaks: true,
})

export default function Previewer(props) {

let finalString =  dompurify.sanitize(marked.parse(props.text));

    return (
        <section id="preview-wrapper" >
        <h2 id="previewer-title">Previewer</h2>
            <div id="preview" dangerouslySetInnerHTML={{__html: finalString}} >
            </div>
        </section>
    )
}