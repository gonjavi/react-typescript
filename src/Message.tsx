import React from 'react';
import messageHoc from './Hoc';
/* interface UserMessage {
    name: string;
    message: string;
} */

// type inspection  : return any porque returna un html - no hay necesidad de escribir cuando es any
// void cuando no se espera retorno
//const Message = (prop: {message: string}): any => {
    
/* const Message = (props: UserMessage): any => {
    return (
        <p>{props.name}, {props.message}</p>
    );
}

export default Message; */


const example = (props: any): any => <p>{props.name}, {props.message} </p>;

const Message = messageHoc(example);

export default Message;

