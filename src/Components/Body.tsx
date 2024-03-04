import { ReactElement } from 'react'
import '../styles/body.scss'
interface BodyProps{
    children: ReactElement[];
}
export default function Body({children}: BodyProps){

    return(
        <div className="body">
            {children}
        </div>
    )
}