import React from 'react';
import './index.css';

export default function Editor(props) {

    return (
        <div>
        <h2>Editor</h2>
        <textarea id="editor" defaultValue={props.value} name="editor" onChange={props.onChange}>
        </textarea>
        </div>
    )
}