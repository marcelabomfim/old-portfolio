const fs = require('fs');
const path = require('path');

const componentsPath = 'components/';

function catchErr(err) {
  if (err) {
    throw err;
  }
}

function writeIndex(dirPath, dirName) {
  let str = `\
export { default as ${dirName} } from './${dirName}';
`;

  str = Buffer.from(str);
  fs.writeFile(path.join(dirPath, `index.js`), str, catchErr);
}

function writeJs(dirPath, dirName) {
  let str = `\
import StyledWrapper from './styles';

const ${dirName} = () => (
  <StyledWrapper>
    <p>Testing new component ${dirName}</p>
  </StyledWrapper>
);

export default ${dirName};
`;

  str = Buffer.from(str);
  fs.writeFile(path.join(dirPath, `${dirName}.js`), str, catchErr);
}

function writeStyles(dirPath) {
  let str = `\
import styled from 'styled-components';
import theme from 'theme/_variables';

export default styled.div\`
  padding: \${theme.spacing.small};
\`;
`;

  str = Buffer.from(str);
  fs.writeFile(path.join(dirPath, `styles.js`), str, catchErr);
}

module.exports = function createComponent(dirNames) {
  if (dirNames.length === 0) {
    throw Error('Please enter the name of the component');
  }

  const dirName = dirNames[0];
  const dirPath = path.join(componentsPath + dirName);

  fs.mkdirSync(dirPath);

  writeIndex(dirPath, dirName);
  writeJs(dirPath, dirName);
  writeStyles(dirPath, dirName);
};
