import React from 'react'
import { Button } from 'react-bootstrap'

const ButtonCustom = ({ description, variant, block, className, handleOnClick }) => {
    return (
        <Button onClick={handleOnClick} block={block} className={className} variant={variant}>{description}</Button>
    )
}

export default ButtonCustom
