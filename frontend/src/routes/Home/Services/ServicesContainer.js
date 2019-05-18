import {connect} from 'react-redux';
import {push} from 'connected-react-router';

import {Services} from './Services';

const mapStateToProps = (state) => {

    return ({
        /* listOfRestaurants: state.restaurants,
        openOnly: state.filters.openOnly,
        area: state.filters.area */
    });
};

const mapDispatchToProps = (dispatch) => ({
    /* onRestaurantClickHandler: (restaurantName) => {dispatch(push('/restaurants/' + restaurantName));},
    loadRouteData: () => {dispatch(loadRouteData());} */
});



const ServicesContainer = connect(mapStateToProps, mapDispatchToProps)(Services);

export {ServicesContainer};
