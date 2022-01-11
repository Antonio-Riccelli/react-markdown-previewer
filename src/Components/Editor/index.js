import React from 'react';

export default function Editor(props) {

    return (
        <div>
        <textarea id="editor" defaultValue={props.value} name="editor" onChange={props.onChange}>
        </textarea>
        </div>
    )
}