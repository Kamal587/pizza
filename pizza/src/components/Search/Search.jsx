import React from 'react';
import s from './Search.module.scss';
import search from './../../assets/img/search.png';
import deleteIcon from './../../assets/img/deleteIcon.png';

const Search = ({ searchValue, setSearchValue }) => {
  return (
    <div className={s.root}>
      <img className={s.iconSearch} src={search} alt="поиск" />
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className={s.input}
        type="text"
        placeholder="Поиск пиццы..."
      />
      {searchValue && (
        <img onClick={() => setSearchValue('')} className={s.deleteIcon} src={deleteIcon} alt="" />
      )}
    </div>
  );
};

export default Search;
