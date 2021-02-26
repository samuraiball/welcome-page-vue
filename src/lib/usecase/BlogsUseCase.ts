import {BlogsPort} from "@/lib/port/BlogsPort";
import BlogsPresenter from "@/lib/presenter/BlogsPresenter";

export default class BlogsUseCase {
    constructor(
        private readonly blogsPort: BlogsPort,
        private readonly blogsPresenter: BlogsPresenter
    ) {
    }

    async find() {
        const blogs = await this.blogsPort.find();
        this.blogsPresenter.set(blogs)
    }
}