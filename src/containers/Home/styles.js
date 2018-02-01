import { injectGlobal } from 'styled-components';
import { colors } from 'global-colors.js';

injectGlobal`
  .bk-date-inquiry {
    background-color: ${colors.bkGrey};
    padding: 40px 30px;
  }
`;
