import Link from 'next/link';
import classes from './page.module.css';

export default function MealsDetail() {
    return <>
    <header className={classes.header}>
        <h1>Delicious Meals, created{''} 
            <span className={classes.highlight}>by you</span></h1>
            <p>Share your favorite recipes with our community</p>
            <p className={classes.cta}>
                <Link href='/meals/create'>Create a Recipe</Link>
            </p>
    </header>
    <main className={classes.main}></main>
    </>
}   