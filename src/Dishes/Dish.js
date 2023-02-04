
const Dish = ({dish})=>{
       return(
        <div>
           <h1>{dish.name}</h1>
           <h2> $ {dish.price}</h2>
           <img className="img" src={`./${dish.img}.jpg`}/>
           <div>
            <button>HOW MANY PORTIONS</button>
           <button>Add to carr</button>
           </div>
           
        </div>
    )
}
export default Dish