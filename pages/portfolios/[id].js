import BaseLayout from '@/components/layouts/BaseLayout'
import BasePage from "@/components/BasePage";
import { useGetData } from '@/actions'
import { useRouter } from 'next/router'

const Portfolio = () => {
  const router = useRouter();
  const { data: portfolio, error, loading } = useGetData(
    router.query.id ? `/api/v1/posts/${router.query.id}` : null
  );

  return (
    <BaseLayout>
      <BasePage>
        {loading && <p>Loading</p>}

        {portfolio && (
          <div>
            <h1>{portfolio.title}</h1>
            <p>{portfolio.body}</p>
            <p>{portfolio.id}</p>
          </div>
        )}
        {error && <div className="alert alert-danger">{error.message}</div>}
      </BasePage>
    </BaseLayout>
  );
}


export default Portfolio;