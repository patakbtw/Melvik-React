import '../styles/body.scss'
import Sidebar from './Sidebar'
import Catalog from './Catalog'
export default function Body(){

    return(
        <div className="body">
            <Sidebar></Sidebar>
            <Catalog></Catalog>
        </div>
    )
}