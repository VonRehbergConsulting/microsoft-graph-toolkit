# Microsoft Graph Toolkit MSAL Provider

[![npm](https://img.shields.io/npm/v/@vonrehberg.consulting/mgt-msal-provider?style=for-the-badge)](https://www.npmjs.com/package/@vonrehberg.consulting/mgt-msal-provider)

⚠️⚠️⚠️ This package is no longer receiving new features and will only receive critical bug and security fixes. All new applications should use [`@vonrehberg.consulting/mgt-msal2-provider`](https://learn.microsoft.com/graph/toolkit/providers/msal2) instead. ⚠️⚠️⚠️

The `@vonrehberg.consulting/mgt-msal-provider` package exposes the `MsalProvider` class which uses MSAL.js to sign in users and acquire tokens to use with Microsoft Graph via the Implicit Grant Flow.

For authentication based on the more secure OAuth 2.0 Authorization Code Flow with PKCE, please use the [`@vonrehberg.consulting/mgt-msal2-provider`](https://learn.microsoft.com/graph/toolkit/providers/msal2) instead.

[See docs for full documentation of the MsalProvider](https://learn.microsoft.com/graph/toolkit/providers/msal)

The [Microsoft Graph Toolkit (mgt)](https://aka.ms/mgt) library is a collection of authentication providers and UI components powered by Microsoft Graph. 

## Usage

1. Install the packages

    ```bash
    npm install @vonrehberg.consulting/mgt-element @vonrehberg.consulting/mgt-msal-provider
    ```

2. Initialize the provider in code

    ```ts
    import {Providers} from '@vonrehberg.consulting/mgt-element';
    import {MsalProvider} from '@vonrehberg.consulting/mgt-msal-provider';

    // initialize the auth provider globally
    Providers.globalProvider = new MsalProvider({
      clientId: 'clientId',
      scopes?: string[];
      authority?: string;
      redirectUri?: string;
      loginType?: LoginType; // LoginType.Popup or LoginType.Redirect (redirect is default)
      loginHint?: string
      options?: Configuration; // msal js Configuration object
    });
    ```

3. Alternatively, initialize the provider in html (only `client-id` is required):

    ```html
    <script type="module" src="../node_modules/@vonrehberg.consulting/mgt-msal-provider/dist/es6/index.js" />

    <mgt-msal-provider client-id="<YOUR_CLIENT_ID>"
                      login-type="redirect/popup" 
                      scopes="user.read,people.read" 
                      redirect-uri="https://my.redirect/uri" 
                      authority=""> 
    </mgt-msal-provider> 
    ```

See [provider usage documentation](https://learn.microsoft.com/graph/toolkit/providers) to learn about how to use the providers with the mgt components, to sign in/sign out, get access tokens, call Microsoft Graph, and more.

## Sea also
* [Microsoft Graph Toolkit docs](https://aka.ms/mgt-docs)
* [Microsoft Graph Toolkit repository](https://aka.ms/mgt)
* [Microsoft Graph Toolkit playground](https://mgt.dev)