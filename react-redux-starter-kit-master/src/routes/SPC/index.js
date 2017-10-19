import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'spc',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const SpcChartsViewContainer = require('./containers/SpcChartsViewContainer').default
      const reducer = require('./modules/spc').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'counter', reducer })

      /*  Return getComponent   */
      cb(null, SpcChartsViewContainer)

    /* Webpack named bundle   */
    }, 'spc')
  }
})
