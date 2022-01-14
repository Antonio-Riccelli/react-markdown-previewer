import React from 'react';
import './index.css';

export default function Editor(props) {

    return (
        <section id="editor-wrapper">
        <h2 id="editor-title">Editor</h2>
        <textarea id="editor" defaultValue={props.value} name="editor" onChange={props.onChange}>
        </textarea>
        </section>
    )
}