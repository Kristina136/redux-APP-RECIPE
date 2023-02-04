import Category from "./Category"

const Filter = ()=>{

    return(
        <div>
            <h1>What kind of food do you like?</h1>
            {['ITALIAN', 'SEAFOOD', 'APPETIZERS', 'SALADS', 'ÀLL'].map(category=> <Category category={category}/>
            )}
            
        </div>
    )
}
export default Filter