import { connect } from 'react-redux';
import Header from '../components/Header';
import { addToCart } from '../Services/Actioins/actions';

const mapStateToProps = state => {
    console.log("HeaderContainerState", state);
    return { cardData: state.cardItems }
}

const mapDispatchToProps = dispatch => ({
})


export default connect(mapStateToProps, mapDispatchToProps)(Header);