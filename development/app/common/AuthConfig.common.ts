
import { Http } from 'angular2/http';
import { AuthHttp, AuthConfig, JwtHelper } from '../services/angular2-jwt';



export  const aConfig ={
    useFactory: (http) => {
        return new AuthHttp(new AuthConfig({
            tokenName: 'RestServerWebToken'
        }), http);
    },
		deps: [Http]
}