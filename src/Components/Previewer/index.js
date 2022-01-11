import React from 'react';
import './index.css';
import { marked } from 'marked';

marked.setOptions({
    breaks: true,
})

export default function Previewer(props) {

let finalString =  marked.parse(props.text)

    return (
        <section id="preview-wrapper" >
        <h1>Previewer</h1>
            <div id="preview" dangerouslySetInnerHTML={{__html: finalString}} >
            </div>
        </section>
    )
}