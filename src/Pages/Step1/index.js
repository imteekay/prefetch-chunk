import loadable from '@loadable/component'

export default loadable(() => import(/* webpackChunkName: "Step1" */ './Step1'));
