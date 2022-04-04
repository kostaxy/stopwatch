import { Button } from 'antd'
import React, {useState, useRef} from 'react'
import Input from '../../UI/Input/Input'
import classes from '../SaveLapsModal/SaveLapsModal.css'


const SaveLapsModal = ({ setActive }) => {

    const inputRef = useRef()

    const saveLaps = () => {
        if (inputRef.current.value === '') {
            console.log('not save')
        } else {
            console.log('save')
            inputRef.current.value = ''
            setActive(false)
        }
    }

    return (
        <form className='modalFormSaveLaps'>
            <div className='modalInputDescrition'>Enter the name of the result of the laps to save: </div>
            <Input
                ref={inputRef}
                type="text"
                placeholder='name of the result of the laps'
            >
            </Input>
            <Button onClick={saveLaps} className='modalSaveBtn'>
                save
            </Button>
        </form>
    )
}

export default SaveLapsModal