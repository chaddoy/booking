import { injectGlobal } from 'styled-components';
import BigNoddleFont from 'fonts/big_noodle_titling.ttf';

injectGlobal`
  @font-face {
    font-family: 'BigNoddle';
    src: url(${BigNoddleFont});
  }

  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;
