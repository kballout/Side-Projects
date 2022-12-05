import Layout from "../components/Layout";
import Item from "../components/Item";
import data from "../utils/testdata";

export default function Home() {
  return (
    <Layout title={'Home Page'}>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
        {data.products.map((product) => {
          return(
            <Item product={product} key={product.slug}/>
          )
        })}
      </div>
    </Layout>
  )
}
