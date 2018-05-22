import styled from 'styled-components';
import theme from 'theme/_variables';

export default styled.div`
  margin: ${theme.spacing.small};
  font-weight: bold;

  &:hover {
    color: red;
  }
`;
