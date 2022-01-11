import React from 'react';
import { marked } from 'marked';

marked.setOptions({
    breaks: true,
})

export default function Previewer(props) {

let finalString =  marked.parse(props.text)

    return (
        <section id="preview-wrapper">
            <div id="preview" dangerouslySetInnerHTML={{__html: finalString}}>
            </div>
        </section>
    )
}