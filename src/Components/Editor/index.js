import React from 'react';

export default function Editor(props) {

    console.log(props)
    return (
        <div>
        <textarea id="editor" value={props.value.h1} name="editor" placeholder={props.initialRendering}>
         
        </textarea>
        </div>
    )
}