import './push'
import pages from './pages'
import { apis, responseHandler } from './apis'


export const config = {
    pages,
    apis,
    responseHandler
}

Vue.prototype.eros = config

import 'Widget'