export { default as Logo } from '../../components/Logo.vue'
export { default as CartHeaderComponent } from '../../components/cartHeaderComponent.vue'
export { default as FooterComponent } from '../../components/footerComponent.vue'
export { default as HeaderComponent } from '../../components/headerComponent.vue'
export { default as IntroSectionComponent } from '../../components/introSectionComponent.vue'
export { default as LoadingComponent } from '../../components/loadingComponent.vue'
export { default as LoginPageComponent } from '../../components/loginPageComponent.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
export const LazyCartHeaderComponent = import('../../components/cartHeaderComponent.vue' /* webpackChunkName: "components/cartHeaderComponent" */).then(c => c.default || c)
export const LazyFooterComponent = import('../../components/footerComponent.vue' /* webpackChunkName: "components/footerComponent" */).then(c => c.default || c)
export const LazyHeaderComponent = import('../../components/headerComponent.vue' /* webpackChunkName: "components/headerComponent" */).then(c => c.default || c)
export const LazyIntroSectionComponent = import('../../components/introSectionComponent.vue' /* webpackChunkName: "components/introSectionComponent" */).then(c => c.default || c)
export const LazyLoadingComponent = import('../../components/loadingComponent.vue' /* webpackChunkName: "components/loadingComponent" */).then(c => c.default || c)
export const LazyLoginPageComponent = import('../../components/loginPageComponent.vue' /* webpackChunkName: "components/loginPageComponent" */).then(c => c.default || c)
