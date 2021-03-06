import {
  Component,
  OnInit
} from '@angular/core';

// tslint:disable
let appModuleExample: string = `
import { NgModule } from 'angular2/core';
import { Ng2HandyOauthModule } from 'ng2-handy-oauth';

@NgModule({
 bootstrap:    [ /*YourAppComponent*/ ],
 declarations: [ /*YourAppComponent*/ ],
 imports:      [ 
   BrowserModule, 
   Ng2HandyOauthModule.forRoot({
      providers: {
        google: {
          clientId: '<KEY>',
          redirectUrl: '<REDIRECT_URL>'
        },
        <PROVIDER>: {
          clientId: '<KEY>',
          redirectUrl: '<REDIRECT_URL>'
        }
      }
    }) 
 ]
})
export class AppModule {}
`;

let nginxConfigExample: string = `
  server {
        listen   80;
        server_name <ADDRESS>;

        root /var/www/<PATH>;
        index index.html index.htm;
        try_files $uri /$uri index.html;
  }
`;

@Component({
  selector: 'my-home',
  providers: [],
  styleUrls: [ './home.component.css' ],
  template: `
    <div class="container">
      <h3>The Angular 2 component supports OAuth 2 implicit grant flow.</h3>

      <p>The implicit grant type is used to obtain access tokens. It does not support the issuance of refresh tokens, 
      and you don't use client secret key. This variant was specifically designed for JavaScript based 
      applications running in a Web browser (Single Page Applications).</p>

      Your application should always use HTTPS in this scenario.

      <h3 class="mt-3"><b>Installation</b></h3>
      <handy-syntax-highlighter [language]="'bash'"
                            [content]="'npm install ng2-handy-oauth --save'"
      ></handy-syntax-highlighter>

      <h3 class="mt-4"><b>Configuration</b></h3>
      In your app add Ng2HandyOauthModule:
      <handy-syntax-highlighter [language]="'typescript'"
                            [content]="appModuleExample"
      ></handy-syntax-highlighter>

      <h3 class="mt-4"><b>Obtaining OAuth 2 Keys</b></h3>
      
      <ol>
          <li>
              Google
                  <ul>
                    <li><a href="https://developers.google.com/identity/protocols/OAuth2UserAgent" target="_blank">Doc</a></li>
                    <li>Go to <a href="https://console.developers.google.com" target="_blank">Google Developer Console</a></li>
                    <li>Click "Credentials" (left menu)</li>
                    <li>Click "Create credentials"</li>
                    <li>
                        <ul>
                            <li>Then select OAuth client ID</li>
                            <li>Application Type: Web Application</li>
                            <li>Authorized Javascript origins: http://example.com</li>
                            <li>Authorized redirect URI: http://example.com/callback</li>
                        </ul>
                    </li>
                  </ul>
          </li>
          <li>
              Facebook
                  <ul>
                    <li><a href="https://developers.facebook.com/docs/facebook-login/manually-build-a-login-flow/" target="_blank">Doc</a></li>
                    <li>Go to <a href="https://developers.facebook.com" target="_blank">Facebook Developers</a></li>
                    <li>Click "My Apps"</li>
                    <li>Then click "Add a New App" in the navigation bar</li>
                    <li>Enter Display Name, choose a category and click "Create App ID"</li>
                    <li>Click on Settings (left menu), then click + Add Platform</li>
                    <li>Select Website</li>
                    <li>Enter http://example.com for Site URL</li>
                  </ul>
          </li>
          <li>
              Foursquare
                  <ul>
                    <li><a href="https://developer.foursquare.com/overview/auth" target="_blank">Doc</a></li>
                    <li>Go to <a href="https://developer.foursquare.com" target="_blank">Developers</a></li>
                    <li>Click "My Apps"</li>
                    <li>Click "Create a new app"</li>
                    <li>Enter "Your app name", "Application Url", "Redirect Url"</li>
                  </ul>
          </li>
          <li>
              Spotify
                  <ul>
                    <li><a href="https://developer.spotify.com/web-api/authorization-guide/#implicit-grant-flow" target="_blank">Doc</a></li>
                    <li>Go to <a href="https://developer.spotify.com" target="_blank">Spotify Developers</a></li>
                    <li>Click "My Apps"</li>
                    <li>Enter "Application Name", "Application Description"</li>
                    <li>In next step enter  Website and Redirect URIs</li>
                  </ul>
          </li>
      </ol>  

        <h3 class="mt-4"><b>vHost config</b></h3>
        If you use <i>PathLocationStrategy</i> strategy you should configure vhost, example <small>(nginx)</small>:
        <handy-syntax-highlighter [language]="'nginx'"
                              [content]="nginxConfigExample"
        ></handy-syntax-highlighter>

      <h3 class="mt-4"><b>Create other components - <a [routerLink]=" ['./demo/sign-in'] ">Full example</a></b></h3>
      <ul>
        <li>Sign in - init implicit grant flow</li>
        <li>Callback - receive access_token</li>
        <li>Info - display user data</li>
        <li>Error - handling errors</li>
      </ul>
      <p>
        ng2-handy-oauth is responsible for the "implicit grant flow", the view and the name of the components depend on you.
      </p>
    </div>
  `
})
export class HomeComponent implements OnInit {
  public appModuleExample: string = appModuleExample;
  public nginxConfigExample: string = nginxConfigExample;

  constructor() {}

  public ngOnInit() {}
}
