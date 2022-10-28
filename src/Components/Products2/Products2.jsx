import products2Css from "./products2.module.css"
const Products2 = () => {
    return (
        <div className={products2Css.products2}>
            <div>
                <h1>معرفی محصولات</h1>
            </div>
            <div>
                <div>
                    <img src={require('../../images/video-1.jpg')} alt="video-1"/>
                    <h1>بررسی درام استیک های promark</h1>
                </div>
                <div>
                    <img src={require('../../images/video-2.jpg')} alt="video-2"/>
                    <h1>بازنوازی آهنگ The Prophet از Gary moore</h1>
                </div>
                <div>
                    <img src={require('../../images/video-3.jpg')} alt="video-3"/>
                    <h1>نوازندگی برنا شفیع زاده با PDP Concept Maple</h1>
                </div>
                <div>
                    <img src={require('../../images/video-4.jpg')} alt="video-4"/>
                    <h1>نقد و بررسی کارت صدا Audient EVO 4</h1>
                </div>
            </div>
            <div>
                <a href="#">مشاهده همه مطالب</a>
            </div>
        </div>
    );
}
export default Products2