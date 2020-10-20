import React from 'react'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import { useDispatch } from 'react-redux'
import wizardModule from '../store/wizardModule'
import { useSelector } from 'react-redux'

export default function Wizard({children}) {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    return (
        <Container>
            <div>
                {children}
            </div>
            <div>
            <Button variant="contained" onClick={()=> dispatch(wizardModule.backStep())}>Назад</Button>
            <Button variant="contained" onClick={()=> dispatch(wizardModule.nextStep())} color="primary">
                Дальше
            </Button>
            </div>
            
        </Container>
    )
}
