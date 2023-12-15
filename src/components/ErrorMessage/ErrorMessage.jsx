import PropTypes from 'prop-types';

const ErrorMessage = ({ message }) => {
    return <p>{message}</p>;
};

ErrorMessage.propTypes = {
    message: PropTypes.string,
};

export default ErrorMessage;
