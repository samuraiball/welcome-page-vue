import {Blogs} from "@/lib/domain/Blogs";

export interface BlogsPort {
    find(): Promise<Blogs>
}