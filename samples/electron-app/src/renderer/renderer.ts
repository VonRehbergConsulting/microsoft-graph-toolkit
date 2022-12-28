import { Providers } from '@vonrehberg.consulting/mgt-element/dist/es6';
import { ElectronProvider } from '@vonrehberg.consulting/mgt-electron-provider/dist/Provider';
import '@vonrehberg.consulting/mgt-components';
Providers.globalProvider = new ElectronProvider();
