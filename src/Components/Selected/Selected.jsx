import selectedCss from "./selected.module.css"
const Selected = () => {
    return (
        <div className={selectedCss.selected}>
            <div>
                <h1>محصولات منتخب</h1>
            </div>
            <div>
                <div>
                    <img src={require('../../images/one.jpg')} alt="guitar-1"/>
                    <h1>Fender FA-125 Dreadnought Walnut Natural</h1>
                    <h3>6,750,000 تومان</h3>
                </div>
                <div>
                    <img src={require('../../images/two.jpg')} alt="guitar-2"/>
                    <h1>Audient iD14 MKII</h1>
                    <h3>9,700,000 تومان</h3>
                </div>
                <div>
                    <img src={require('../../images/three.jpg')} alt="guitar-3"/>
                    <h1>Epiphone DR-100 Acoustic Guitar Natural</h1>
                    <h3>7,950,000 تومان</h3>
                </div>
                <div>
                    <img src={require('../../images/four.jpg')} alt="guitar-4"/>
                    <h1>Audient EVO Start Recording Bundle</h1>
                    <h3>8,950,000 تومان</h3>

                </div>
                <div>
                    <img src={require('../../images/five.jpg')} alt="guitar-5"/>
                    <h1>Audient iD4 MKII</h1>
                    <h3>5,950,000 تومان</h3>

                </div>
                <div>
                    <img src={require('../../images/six.jpg')} alt="guitar-6"/>
                    <h1>Ernie Ball Regular Slinky 10-46 Gauge</h1>
                    <h3>235,000 تومان</h3>
                </div>
            </div>
        </div>
    );
}
export default Selected