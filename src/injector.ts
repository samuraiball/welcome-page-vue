import {inject, InjectionKey, provide, reactive} from "@vue/composition-api";
import BlogsUseCase from "@/lib/usecase/BlogsUseCase";
import BlogsDriver from "@/lib/driver/BlogsDriver";
import {BlogsPort} from "@/lib/port/BlogsPort";
import BlogsGateway from "@/lib/gateway/BlogsGateway";
import WelcomePageState from "@/state/WelcomePageState";
import BlogsPresenter from "@/lib/presenter/BlogsPresenter";

export class Keys {
    static readonly BlogsDriverKeys: InjectionKey<BlogsDriver> = Symbol("BlogsDriver")
    static readonly BlogsPortKeys: InjectionKey<BlogsPort> = Symbol('BlogsPort')
    static readonly BlogsUseCaseKeys: InjectionKey<BlogsUseCase> = Symbol('BlogsUseCase')
    static readonly WelcomePageStateKeys: InjectionKey<WelcomePageState> = Symbol('BlogsState')
    static readonly BlogsPresenter: InjectionKey<BlogsPresenter> = Symbol("BlogsPresenter")
}

export default class Injector {

    injectModules(): void {
        this.injectDriver()
        this.injectPort()
        this.injectState()
        this.injectPresenter()
        this.injectUseCase()
    }

    private injectDriver() {
        provide(Keys.BlogsDriverKeys, new BlogsDriver('http://localhost:8081'))
    }

    private injectPort() {
        provide(Keys.BlogsPortKeys, new BlogsGateway(inject(Keys.BlogsDriverKeys)!!))
    }

    private injectState() {
        provide(Keys.WelcomePageStateKeys, reactive(new WelcomePageState()))
    }

    private injectPresenter() {
        provide(Keys.BlogsPresenter, new BlogsPresenter(inject(Keys.WelcomePageStateKeys)!!))
    }

    private injectUseCase() {
        provide(Keys.BlogsUseCaseKeys, new BlogsUseCase(
            inject(Keys.BlogsPortKeys)!!, inject(Keys.BlogsPresenter)!!))
    }
}