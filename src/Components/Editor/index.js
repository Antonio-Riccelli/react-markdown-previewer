import React from 'react';
import './index.css';

export default function Editor(props) {

    return (
        <div>
        <h1>Editor</h1>
        <textarea id="editor" defaultValue={props.value} name="editor" onChange={props.onChange}>
        </textarea>
        </div>
    )
}