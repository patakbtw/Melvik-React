import '../styles/catalog.scss'
import Counter from './Counter'
import ProductList from './ProductList'

export default function Catalog(){

    return(
        <div className="catalog">
            <Counter maxCounter={5} isHorisontal={true}></Counter>
            <ProductList></ProductList>
        </div>
    )
}