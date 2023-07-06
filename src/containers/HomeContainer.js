import { connect } from 'react-redux';
import Home from '../components/Home';
import { addToCart, deleteFromCart } from '../Services/Actioins/actions';

const mapStateToProps = state => {
    console.log("HomeContainerState", state);
    return {cardData: state}
}

const mapDispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data)),
    deleteFromCartHandler: () => dispatch(deleteFromCart())
})





export default connect(mapStateToProps, mapDispatchToProps)(Home);