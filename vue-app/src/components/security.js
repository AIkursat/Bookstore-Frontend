import {store} from './store.js'
import router from './../router/index.js'

let Security = {
    // to make sure user is authentiated
    requireToken: function() {
        if(store.token === ' '){
            router.push("/login");
            return false
        }
    },
        // create request options and send them back
        requestOptions: function(payload) {
            const headers = new Headers();
            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer " + store.token);
    
            return {
                method: "POST",
                body: JSON.stringify(payload),
                headers: headers,
            }
        },
        // check token

        checkToken : function() {
            if (store.token !== "") {
                const payload = {
                    token: store.token
                }

                const headers = new Headers();
                headers.append("Content-Type", "application/json")

                let requestOptions = {
                    method: "POST",
                    body: JSON.stringify(payload),
                    headers: headers,
                }

                fetch(process.env.VUE_APP_API_URL + "/validate-token", requestOptions)
                .then((response) => response.json())
                .then((data) => {
                    if (data.error) {
                        console.log(data.error);

                    } else {
                        if (!data.data) {
                            store.token = "";
                            document.cookie = '_site_data=; path=/;'
                            + 'SameSite=strict; '
                            + 'Expires= Thu, 01 Jan 1970 00:00:01 GMT;'
                        }
                    }
                })
            }
        }
    }

    export default Security;

