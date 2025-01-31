import { ProductType } from "../context/ProductProvider"
import { ReducerActionType, ReducerAction } from "../context/CartProvider"
import { ReactElement, memo } from "react"

type PropsType = {
  product: ProductType,
  dispatch: React.Dispatch<ReducerAction>,
  REDUCER_ACTIONS: ReducerActionType,
  inCart: boolean,
}
const Product = ({ product, dispatch, REDUCER_ACTIONS, inCart
}:PropsType): ReactElement => {

  const img: string = new URL(`../images/${product.sku}.jpg`, import.meta.url).href
  console.log(img)

  const onAddToCart = () => dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, qty:1}})

  const itemIncart = inCart ? '➡️ Item in Cart: ✔️' : null

  const content = 
  <article className="product">
    <h3>{product.name}</h3>
    <img src={img} alt={product.name} className="product__img" />
    <p>{new Intl.NumberFormat('en-Nigerian', { style: 'currency', currency: 'NGN' }).format(product.price)} {itemIncart}</p>
    <button onClick={onAddToCart}>Add to Cart</button>
  </article>
  
  return content
}

function areProductEqual({ product: prevProduct , inCart: prevIncart }: PropsType, { product: nextProduct, inCart: nextInCart }: PropsType) {
  return (
    Object.keys(prevProduct).every(key => {
      return prevProduct[key as keyof ProductType] ===
        nextProduct[key as keyof ProductType]
    }) 
      && prevIncart === nextInCart
  )
}
const MemoizedProduct = memo<typeof Product>(Product, areProductEqual)

export default MemoizedProduct
