import loadable from '@loadable/component'

export default loadable(() => import(/* webpackChunkName: "Step2" */ './Step2'));