import React from 'react';
import classes from './Button.module.css'

const Button = ({children, ...props}) => {
    
    return <div>
        <span className={classes.Button} {...props} >{children}</span>
    </div>;
};

export default Button;
