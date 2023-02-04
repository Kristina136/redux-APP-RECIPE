
import  data from "../Data/data";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../redux/dishesSlice";
import Dish from "./Dish";


const Dishes = ()=>{
    const selectedCategory = useSelector(getSelectedCategory);

    return(
        <div>
           {data
           .filter(dish =>{
            return selectedCategory===dish.category;
           })
           .map(dish =>
           <Dish dish={dish}/>
           )}
        </div>
    )
}
export default Dishes