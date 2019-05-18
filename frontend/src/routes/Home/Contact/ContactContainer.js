import {connect} from 'react-redux';
import {push} from 'connected-react-router';

import {Contact} from './Contact';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
    onReturnToListOfRestaurantsHandler: () => {dispatch(push('/'));}
});

const ContactContainer = connect(mapStateToProps, mapDispatchToProps)(Contact);

export {ContactContainer};
