import videosCss from "./Videos.module.css";
const Videos = () => {
    return (
        <div className={videosCss.video}>
            <div>
                <h1>ویدیوهای آموزشی</h1>
            </div>
            <div>
                <div>
                    <img src={require('../../images/video-11.jpg')} alt="video-11"/>
                    <h1>یک تمرین کاربری برای یادگیری اکونومی پیکینگ (Economy picking)</h1>
                </div>
                <div>
                    <img src={require('../../images/video-12.jpg')} alt="video-12"/>
                    <h1>آموزش یوکللی : شناخت نت ها روی فرت بورد</h1>
                </div>
                <div>
                    <img src={require('../../images/video-13.jpg')} alt="video-13"/>
                    <h1>نگاهی نو به بداهه نوازی با ویکتور ووتن</h1>
                </div>
                <div>
                    <img src={require('../../images/video-14.jpg')} alt="video-14"/>
                    <h1>آشنایی با دایره فواصل پنجم</h1>
                </div>
            </div>
            <div>
                <a href="#">مشاهده همه مطالب</a>
            </div>
        </div>
    );
}
export default Videos