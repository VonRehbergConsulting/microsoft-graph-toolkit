import { Providers } from '@vonrehberg/mgt-element/dist/es6';
import { ElectronProvider } from '@vonrehberg/mgt-electron-provider/dist/Provider';
import '@vonrehberg/mgt-components';
Providers.globalProvider = new ElectronProvider();
