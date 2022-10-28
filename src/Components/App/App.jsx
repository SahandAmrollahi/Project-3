import "./fonts/eot/IRANSansWeb.eot"
import "./fonts/woff/IRANSansWeb.woff"
import "./fonts/ttf/IRANSansWeb.ttf"
import "./fonts/woff2/IRANSansWeb.woff2"
import appCss from "./app.module.css"
import Menu from "../Menu/Menu";
import Products1 from "../Products1/Products1";
import Products2 from "../Products2/Products2";
import Videos from "../Videos/Videos";
import Selected from "../Selected/Selected";
import Brand from "../Brand/Brand";
import Footer from "../Footer/Footer";
import Final from "../Final/Final";
const App = () => {
    return (
        <div className={appCss.app}>
            <Menu/>
            <Products1/>
            <Products2/>
            <Videos/>
            <Selected/>
            <Brand/>
            <Footer/>
            <Final/>
        </div>
    );
}
export default App