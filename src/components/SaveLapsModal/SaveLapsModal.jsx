import { Button } from 'antd'
import React, {useState, useRef} from 'react'
import Input from '../../UI/Input/Input'
import classes from '../SaveLapsModal/SaveLapsModal.css'


const SaveLapsModal = ({ setActive }) => {

    const inputRef = useRef()

    const [emptyInputAttention, setEmptyInputAttention] = useState(false)

    const saveLaps = () => {
        if (inputRef.current.value === '') {
            activeAttentionEmptyInput()
        } else {
            inputRef.current.value = ''
            setActive(false)
        }
    }

    const activeAttentionEmptyInput = () => {
        setEmptyInputAttention(true)
        setTimeout(() => {
            setEmptyInputAttention(false)
          }, 1000);
    }

    return (
        <form className='modalFormSaveLaps'>
            <div className='modalInputDescrition'>Enter the name of the result of the laps to save: </div>
            <Input
                style={{
                    borderBottom: emptyInputAttention ? 'rgba(255,75,75,1) solid 2px' : 'rgba(255,255,255,1) solid 2px',
                  }}
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