import CategoryBluePrint from "./Categories";

const CategoriesBar = () => {

    const categoryNames = ["Mobile Phones", "Electronics", "Appliances", "Health and Personal Care", "Toys & Stuff"]; 

    return (
        <div className="content-under">
            <CategoryBluePrint
            names = {categoryNames}
            />
        </div>
    )};

export default CategoriesBar;