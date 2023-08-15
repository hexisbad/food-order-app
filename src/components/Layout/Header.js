import {Fragment} from 'react'
import foodbanner from '../../assets/food-banner.webp'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';


const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>Hex's Delicious Meals!</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={foodbanner} alt="A table of healthy food?"/>
        </div>
    </Fragment>
};

export default Header;