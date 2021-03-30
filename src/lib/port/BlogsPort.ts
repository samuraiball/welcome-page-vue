import {Blogs} from "@/lib/domain/Blogs";
import BlogsStatistics from "@/lib/domain/Statistics";

export interface BlogsPort {
    fetch(): Promise<Blogs>

    fetchStatistics(): Promise<BlogsStatistics>
}