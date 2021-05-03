import { useRouter } from "next/router";

function article({ article }) {
  //   const router = useRouter();
  //   const { id } = router.query;

  return <div>this is article {article.id} </div>;
}

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export default article;
