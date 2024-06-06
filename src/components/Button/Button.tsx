import React from 'react'
import {ButtonComponent} from './styles'
import { ButtonProps } from './type'

function Button({name , type= 'button', onClick, disabled = false}: ButtonProps) {

    return (
        <ButtonComponent type={type} onClick={onClick} disabled={disabled}>
            {name}
        </ButtonComponent>
    )
}

export default Button