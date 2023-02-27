import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
   {id: 'p1',
    price: 6,
    title: 'My first book',
    description: 'The first book I ever wrote'},
    {id: 'p2',
    price: 12,
    title: 'My second book',
    description: 'The second book I wrote'},
]

const Products = (props) => {

  const items = DUMMY_PRODUCTS.map(item => (
    <ProductItem
    key={item.id}
    id={item.id}
    title= {item.title}
    price={item.price}
    description={item.description}
  />
  ))
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {items}
      </ul>
    </section>
  );
};

export default Products;
