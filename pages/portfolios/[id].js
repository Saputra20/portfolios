import BaseLayout from '@/components/layouts/BaseLayout'
import BasePage from "@/components/BasePage";
import { useGetPostById } from '@/actions'
import { useRouter } from 'next/router'

const Portfolio = () => {
  const router = useRouter();
  const { data: portfolio, error, loading } = useGetPostById(router.query.id);

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