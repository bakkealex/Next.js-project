import { POSTS_API_URL } from '@/lib/constants';
import { cookies } from 'next/headers';
import PostList from '@/components/PostList';

async function Posts() {
  const token = cookies().get('token')?.value;
  const response = await fetch(POSTS_API_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });

  let posts = [];
  if (response.ok) {
    const data = await response.json();
    posts = Array.isArray(data) ? data : [];
  }

  return (
    <main>
      <h1>Posts route</h1>
      <PostList posts={posts} />
    </main>
  );
}

export default Posts;
