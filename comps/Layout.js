
import Mainnav from './mainnav';
const Layout = ({ children }) => {
    return (  
        <div className="content">
            <Mainnav/>
            { children } 
           
        </div>
    );
}
export default Layout;