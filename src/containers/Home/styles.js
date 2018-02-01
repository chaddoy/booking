import { injectGlobal } from 'styled-components';
import { colors } from 'global-colors';

injectGlobal`
  .bk-date-inquiry {
    background-color: ${colors.bkDarkGrey};
    padding: 40px 30px;
  }
`;
