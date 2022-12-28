/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { html } from 'lit-element';
import { withCodeEditor } from '../../../.storybook/addons/codeEditorAddon/codeAddon';

export default {
  title: 'Components / mgt-file',
  component: 'mgt-file',
  decorators: [withCodeEditor]
};

export const file = () => html`
  <mgt-file file-query="/me/drive/items/01BYE5RZZFWGWWVNHHKVHYXE3OUJHGWCT2"></mgt-file>
`;

export const RTL = () => html`
  <body dir="rtl">
    <mgt-file file-query="/me/drive/items/01BYE5RZZFWGWWVNHHKVHYXE3OUJHGWCT2"></mgt-file>
  </body>
`;

export const localization = () => html`
  <mgt-file file-query="/me/drive/items/01BYE5RZZFWGWWVNHHKVHYXE3OUJHGWCT2" view="threelines"></mgt-file>
  <script>
  import { LocalizationHelper } from '@vonrehberg.consulting/mgt';
  LocalizationHelper.strings = {
    _components: {
      'file': {
        modifiedSubtitle: '⚡',
        sizeSubtitle: '💾'
      }
    }
  }
  </script>
`;
