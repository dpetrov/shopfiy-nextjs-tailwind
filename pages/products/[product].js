import { getAllProducts, getProduct } from "../../lib/shopify"
import ProductPageContent from "../../components/ProductPageContent"

export default function ProductPage({ product }) {
  return (
    <ProductPageContent product={product} />
  )
}

export async function getStaticPaths() {
  const products = await getAllProducts()

  const paths = products.map(item => {
    const product = String(item.node.handle)

    return {
      params: {
        product
      }
    }
  })
  console.log({ paths })

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const product = await getProduct(params.product)
  console.log({ product })
  return {
    props: {
      product
    }
  }
}