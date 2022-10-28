import products1Css from "./products1.module.css";
const Products1 = () => {
    return (
        <div className={products1Css.products1}>
            <div>
                <img src={require('../../images/guitar-1.jpg')} alt="guitar-1"/>
                <h1>گیتار بیس</h1>
                <h3>بهترین گیتاربیس‌ها از برترین برندهای دنیا</h3>
            </div>
            <div>
                <img src={require('../../images/guitar-2.jpg')} alt="guitar-2"/>
                <h1>گیتار الکتریک</h1>
                <h3>گالری گیتارهای الکتریک دستچین شده</h3>
            </div>
            <div>
                <img src={require('../../images/guitar-3.jpg')} alt="guitar-3"/>
                <h1>گیتار آکوستیک</h1>
                <h3>گیتارهای آکوستیک از برندهای برتر دنیا</h3>
            </div>
        </div>
    );
}
export default Products1