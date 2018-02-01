import { injectGlobal } from 'styled-components';
import BigNoddleFont from 'fonts/big_noodle_titling.ttf';
import { colors } from './global-colors.js';

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

  .bk-color-orange {
    color: ${colors.bkOrange};
  }

  .bk-color-white {
    color: white;
  }

  .bk-text-align-right {
    text-align: right;
  }

  .bk-small-text-break {
    line-height: 20px;
  }

  .bk-content-container {
    &.bk-bg-lightgrey {
      background-color: ${colors.bkLightGrey};
    }
  }

  .bk-content {
    width: 940px;
    margin: auto;
    padding: 40px 0px 50px 0px;
  }

  .bk-full-width {
    width: 100%;
  }

  .bk-cursor {
    &.pointer {
      cursor: pointer;
    }
  }

  .bk-margin {
    &.mrg-5 {
      &.mrg-all {
        margin: 5px;
      }

      &.mrg-top {
        margin-top: 5px;
      }

      &.mrg-right {
        margin-right: 5px;
      }

      &.mrg-bottom {
        margin-bottom: 5px;
      }

      &.mrg-left {
        margin-left: 5px;
      }
    }

    &.mrg-10 {
      &.mrg-all {
        margin: 10px;
      }

      &.mrg-top {
        margin-top: 10px;
      }

      &.mrg-right {
        margin-right: 10px;
      }

      &.mrg-bottom {
        margin-bottom: 10px;
      }

      &.mrg-left {
        margin-left: 10px;
      }
    }
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
