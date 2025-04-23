import Image from 'next/image';

interface IPost {
  title: string;
  body: string;
  tags: string[];
  media: string;
  created: string;
  updated: string;
  id: number;
  _count: any;
}

interface PostsListProps {
  posts: IPost[];
}

const PostsList: React.FC<PostsListProps> = ({ posts }) => {
  if (!posts.length) {
    return <p>No posts available.</p>;
  }
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          {post.media && (
            <Image
              src={post.media}
              alt={post.title}
              width={500}
              height={500}
              unoptimized={true}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default PostsList;