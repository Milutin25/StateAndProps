import { Input } from '../input'
import { ChangeEvent, useState} from 'react'
import { Button } from '../submit'

export const FormData = () =>{

    const [name, setName] = useState<string>('')
    const updateName = (e: ChangeEvent<HTMLInputElement>):void =>{
        const usersName = e.target.value
        setName(usersName)
    }

    const [email, setEmail] = useState<string>('')
    const updateEmail = (e: ChangeEvent<HTMLInputElement>):void =>{
        const usersEmail = e.target.value
        setEmail(usersEmail)
    }


    const [isEmployed, setIsEmployed] = useState<Boolean>(false)
    const updateEmployement = (e: ChangeEvent<HTMLInputElement>):void =>{
        const usersEmployement = e.target.checked
        setIsEmployed(usersEmployement)
    }

    const handleSubmit = () =>{

        return(
            console.log(name),
            console.log(email),
            console.log(isEmployed)
        )
    }


    
    return (
        <>
        <form>
        <Input name='full name' handleOnChange={updateName}/>
        <Input name='email' handleOnChange={updateEmail}/>
        <label>Your employement status:
            <input type='checkbox' onChange={updateEmployement}/>
        </label>
        </form>
        <Button name='button' onClick={handleSubmit}/>
        </>
    )

}




