import React from 'react';

const Error = ({ msg }) => {
    return (
        <div className="box-wrapper">
            <h4 className="box__title">{ msg }</h4>
        </div>
    );
}
 
export default Error;