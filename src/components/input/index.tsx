import { ChangeEvent, FC } from 'react'

interface InputProps {

    name: string;
    handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void
}




export const Input:FC <InputProps> = ({name, handleOnChange}) => {
    return(
        <label>Enter your {name}:
        <input name='name' onChange={handleOnChange}/>
        </label>
    )
}