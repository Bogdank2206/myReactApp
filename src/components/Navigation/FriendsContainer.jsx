import Friends from "./Friends/Friends";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        state: state.navBarBlock.Friends,
    }
}

const mapDispatchToProps = () => {
    return {}
}

const FriendsContainer = connect(mapStateToProps,
    mapDispatchToProps)(Friends)


export default FriendsContainer;