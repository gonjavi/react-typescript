import React from 'react';

// type inspection  : return any porque returna un html - no hay necesidad de escribir cuando es any
// void cuando no se espera retorno
const Message = (prop: {message: string}): any => {

    return (
        <p>{prop.message}</p>
    );
}

export default Message;
