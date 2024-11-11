import classes from './meals-grid-module.css';

export default function MealsGrid({meals}) {
    return (<ul className={classes.meals}>
        {meals.map(meals => <li key={meals.id}>

        </li>)}
    </ul>
    )
}