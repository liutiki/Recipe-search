import check from "./check.png"

function MyRecipesComponents({label, image, calories, ingredients}){
    return(
        <div className="container list">
<h2>{label}</h2>
<div className="container list">
<img src={image} alt="food"/>
</div>

<ul className="container list">
    {ingredients.map((ingredient, index) =>(
        <li key={index}>
        <img src={check} width="30px"alt="check"/>{ingredient}</li>
    ))}
</ul>
<p>{calories.toFixed()} calories</p>
        </div>
    )
}

export default MyRecipesComponents;