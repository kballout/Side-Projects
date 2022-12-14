import Layout from "../components/Layout";
import Item from "../components/Item";
import Product from "../models/Product";
import db from "../utils/mongo"

export default function Home({products}) {
  return (
    <Layout title={'Home Page'}>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => {
          return(
            <Item product={product} key={product.slug}/>
          )
        })}
      </div>
    </Layout>
  )
}

export async function getServerSideProps(){
  await db.connect()
  const products = await Product.find().lean()
  await db.disconnect()
  return {
    props: {
      products: products.map(db.convertDocument)
    }
  }
}
