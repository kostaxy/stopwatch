import { Button } from 'antd'
import React, {useState, useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addSavedLapsAction, setSavedLapsAction } from '../../store/lapsReducer'
import Input from '../../UI/Input/Input'
import classes from '../SaveLapsModal/SaveLapsModal.css'


const SaveLapsModal = ({ setActive }) => {

    const dispatch = useDispatch()

    const savedLaps = useSelector(state => state.lapsReducer.saveLaps)
    const addSavedLaps = (savedLap) => {
        dispatch(addSavedLapsAction(savedLap))
    }
    const laps = useSelector(state => state.lapsReducer.laps)
    

    const inputRef = useRef()

    const [emptyInputAttention, setEmptyInputAttention] = useState(false)

    const saveLaps = () => {
        //error
        if (inputRef.current.value === '') {
            activeAttentionEmptyInput()
        }
        //its ok
        else {
            let savedLap = {
                name: inputRef.current.value,
                laps: laps
            };
            addSavedLaps(savedLap);
            inputRef.current.value = ''
            setActive(false)
            savedLap = {};
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