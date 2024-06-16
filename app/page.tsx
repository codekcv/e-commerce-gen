import PostButton from "@/components/post-button";
import { Button } from "@/components/ui/button";
import createPost from "@/server/actions/create-post";
import getPosts from "@/server/actions/get-posts";
import Image from "next/image";

export default async function Home() {
  const { error, success } = await getPosts();

  if (error) {
    throw new Error(error);
  }

  return (
    <main>
      {success?.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
        </div>
      ))}

      <form action={createPost}>
        <input
          className="bg-black"
          type="text"
          name="title"
          placeholder="Title"
        />
        <PostButton />
      </form>

      <h1>Welcome to Next.js</h1>
      <Button variant="destructive">Button</Button>
    </main>
  );
}
