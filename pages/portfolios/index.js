import { useEffect , useState } from "react";
import BaseLayout from '@/components/layouts/BaseLayout'
import BasePage from "@/components/BasePage";
import Link from 'next/link'
import { useGetPosts } from '@/actions'

const Portfolios = () => {
  const { data , error , loading } = useGetPosts();

  const renderPosts = (posts) => {
    return posts.map((post) => (
      <li key={post.id}>
        <Link as={`/portfolios/${post.id}`} href="/portfolios/[id]">
          <a>{post.title}</a>
        </Link>
      </li>
    ));
  };

  return (
    <BaseLayout>
      <BasePage>
        <h1>Page Portfolios</h1>
        { loading && 
          <p>Loading....</p>
        }
        {data && <ul>{renderPosts(data)}</ul>}
        {error && <div className="alert alert-danger">{error.message}</div>}
      </BasePage>
    </BaseLayout>
  );
}

export default Portfolios;
