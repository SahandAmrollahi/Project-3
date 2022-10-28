import menuCss from "./menu.module.css"
const Menu = () => {
    return (
        <div className={menuCss.menu}>
            <div className={menuCss.top}>
                <img src={require('../../images/icons8-instagram-48.png')} alt="insta"/>
                <h1>شماره تماس : 86084046 - 86082249</h1>
            </div>
            <div className={menuCss.bottom}>
                <nav>
                    <ul>
                        <li>
                            <img src={require('../../images/guitariran-logo.png')} alt="pic"/>
                        </li>
                        <li>
                            <a href="#">خانه</a>
                        </li>
                        <li>
                            <a href="#">فروشگاه</a>
                        </li>
                        <li>
                            <a href="#">آکادمی</a>
                        </li>
                        <li>
                            <a href="#">درباره ما</a>
                        </li>
                        <li>
                            <a href="#">تماس با ما</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
export default Menu