import PropTypes from 'prop-types';
import StyledWrapper from './styles';

const Title = ({ children }) => <StyledWrapper>{children}</StyledWrapper>;

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Title;
