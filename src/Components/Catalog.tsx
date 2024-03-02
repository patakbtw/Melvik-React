import '../styles/catalog.scss'
import Counter from './Counter'

export default function Catalog(){

    return(
        <div className="catalog">
            <Counter maxCounter={5} isHorisontal={true}></Counter>
        </div>
    )
}