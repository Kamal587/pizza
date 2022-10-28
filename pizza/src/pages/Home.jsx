import React, { useEffect, useState } from 'react';
import Loading from '../assets/Loading';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import Sort from '../components/Sort';

const Home = ({ searchValue }) => {
  let [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [elementPage, setElementPage] = useState(4);
  let [isLoading, setIsloading] = useState(true);
  const [categoryType, setChangeCategory] = useState(0);
  const [sortType, setChangeSort] = useState({ name: 'популярности', sortProperty: 'rating' });

  const lastPostIndex = currentPage * elementPage;
  const firstPostIndex = lastPostIndex - elementPage;
  let totalpage = items.length;

  useEffect(() => {
    setIsloading(true);

    let category = categoryType > 0 ? categoryType : '';
    let sort = sortType.sortProperty;
    let search = searchValue ? `&search=${searchValue}` : '';

    fetch(
      `https://634fa78078563c1d82abe82a.mockapi.io/items?category=${category}&sortBy=${sort}&order=desc${search}`,
    )
      .then((resp) => {
        return resp.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsloading(false);
      });
  }, [categoryType, sortType, searchValue]);

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories categoryType={categoryType} setChangeCategory={(i) => setChangeCategory(i)} />
          <Sort sortType={sortType} setChangeSort={(i) => setChangeSort(i)} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoading
            ? [...new Array(8)].map((load, index) => <Loading key={index} />)
            : items.map((pizzaBlock, index) => {
                return (
                  <PizzaBlock
                    title={pizzaBlock.title}
                    price={pizzaBlock.price}
                    img={pizzaBlock.imageUrl}
                    sizes={pizzaBlock.sizes}
                    types={pizzaBlock.types}
                    key={index}
                  />
                );
              })}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
