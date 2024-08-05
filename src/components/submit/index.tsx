import { FC } from 'react'

interface ButtonProps {
    name: string;
    onClick: () => void;
}

export const Button: FC <ButtonProps> = ({name, onClick}) =>{

    return(
        <button name='button' onClick={onClick}>Submit</button>
    )

   
}