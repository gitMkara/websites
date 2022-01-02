import PostItem from "./postItem/PostItem";
import "./posts.scss";

export default function Post() {
    return (
        <div className="post">
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
        </div>
    )
}
