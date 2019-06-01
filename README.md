# Angel-Assemble-Frontend
AngelHack HACKATHON Seoul 2019 - Frontend Repository

## vue cli3설치
## npm run serve
* 로컬 테스트완료
## npm install aws-amplify aws-amplify-vue@beta
## npm install -g @aws-amplify/cli
## amplify configure
## amplify init
* 참고 : https://github.com/awskrug/ausg-seminar-2019/tree/master/WebTrack3#set-up-the-aws-backend
## amplify add auth
- 참고 : https://github.com/awskrug/ausg-seminar-2019/tree/master/WebTrack3#implementing-authentication
## amplify push
--------------------------------
## main.js

```javascript
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Amplify, * as AmplifyModules from 'aws-amplify'
import { AmplifyPlugin } from 'aws-amplify-vue'
import awsmobile from './aws-exports'
Amplify.configure(awsmobile)
Vue.use(AmplifyPlugin, AmplifyModules)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')

```
## using Authentication Components
* https://aws-amplify.github.io/docs/js/vue#authentication-components
