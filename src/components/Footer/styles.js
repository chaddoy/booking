import { injectGlobal } from 'styled-components';
import { colors } from 'global-colors.js';

injectGlobal`
  .bk-footer {
    background-color: ${colors.bkBlack} !important;
    color: white !important;

    .bk-footer-content {
      width: 940px;
      margin: auto;
      padding-top: 10px;
      padding-bottom: 50px;
    }
  }
`;
