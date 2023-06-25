import { getData } from "../page";

const getOnePost = async () => {
  const data = await getData(`https://www.reddit.com/`);

  return data;
};
const BlogPost = async ({ params }) => {
  const { slug } = params;
  // console.log(slug);
  const posts = await getOnePost();
  const post = posts.data.children.find((t) => t.title === slug);
  // console.log(posts.data.children.map((data) => data));
  console.log(post);
  return <div>BlogPost</div>;
};

export default BlogPost;
