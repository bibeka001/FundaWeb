import { connect } from "react-redux";
import Home from "../Component/Home";
import { addToCart } from "../SERVICES/Action/Action.js";
const mapStateToProps = (state) => ({
cardata:state.data
})

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: data => dispatch(addToCart(data)),
});
export default connect (mapStateToProps, mapDispatchToProps) (Home)

// export default Home
