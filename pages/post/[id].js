import Head from "next/head";
import { cmsService } from '../../src/cms/cmsService'

export async function getStaticPaths() {
  const pathsQuery = `
    query{
      allPosts{
        id
        title
    }
  }
    `
  const { data } = await cmsService({
    query: pathsQuery,
    // variables:{
    //   "first":100,
    //   "skip": 0 
    // }
  });
  
  const paths = data.allPosts.map(({ id }) => {
    return {
      params: { id }
    }
  })
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, preview }) {
  const { id } = params;
console.log(id)

  const contentQuery = `
    query($id: ItemId){
      post(filter:{
        id:{
          eq:$id
        }
        }){
      _updatedAt
      title
      text
      id
      _isValid
      _status
      }
    }`;

  const { data } = await cmsService({
    query: contentQuery,
    variables: {
      "id": id
    }
  });
  // console.log("Dados do CMS", data)
console.log(data)
  return {
    props: {
      cmsContent: data,
      id,

    },
    revalidate: 10,
  }
}

export default function Title({ cmsContent }) {
  console.log("mais oq temos aqui??", cmsContent)
  return (
    <>
      <Head>
        <title>FAQ - Alura</title>
      </Head>

      <pre>
        {JSON.stringify(cmsContent, null, 4)}
      </pre>



    </>
  )
}