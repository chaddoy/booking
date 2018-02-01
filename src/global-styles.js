import { injectGlobal } from 'styled-components';
import BigNoddleFont from 'fonts/big_noodle_titling.ttf';
import { colors } from 'global-colors.js';

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

  .bk-font-bignoddle {
    font-family: BigNoddle;
  }

  .bk-content {
    width: 940px;
    margin: auto;
    padding: 40px 0px;
  }

  .bk-full-width {
    width: 100%;
  }

  .bk-padding {
    &.pad-5 {
      &.pad-all {
        padding: 5px;
      }

      &.pad-top {
        padding-top: 5px;
      }

      &.pad-right {
        padding-right: 5px;
      }

      &.pad-bottom {
        padding-bottom: 5px;
      }

      &.pad-left {
        padding-left: 5px;
      }
    }

    &.pad-10 {
      &.pad-all {
        padding: 10px;
      }

      &.pad-top {
        padding-top: 10px;
      }

      &.pad-right {
        padding-right: 10px;
      }

      &.pad-bottom {
        padding-bottom: 10px;
      }

      &.pad-left {
        padding-left: 10px;
      }
    }
  }
`;
