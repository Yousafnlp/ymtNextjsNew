import  { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Error() {
const nav = useNavigate()
    useEffect(()=>{
        nav('/')
    })
}

export default Error
