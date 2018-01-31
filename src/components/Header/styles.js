import { injectGlobal } from 'styled-components';
import { colors } from 'global-colors.js';

injectGlobal`
  .bk-header {
    .bk-header-logo {
      float: left;
      margin-top: 5px;
    }

    .bk-header-search {
      width: 200px;
      float: right;
      margin-top: 16px;
    }

    .bk-header-menu-container {
      display: flex;
      justify-content: center;

      .bk-header-menu {
      ${''/* OVERRIDES */}
      &.ant-menu.ant-menu-dark {
        display: inline-block;

        .ant-menu-item {
          font-family: BigNoddle;
          font-size: 20px;
          white-space:nowrap;
        }

        .ant-menu-item-selected {
          background-color: transparent;
          border-bottom: 4px solid ${colors.bkOrange};
          color: white;
        }
      }
    }
  }
`;
