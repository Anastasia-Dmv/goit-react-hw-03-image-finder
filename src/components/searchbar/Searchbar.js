//	Your API key: 17528324-3082acf682c990c8e2fa3d4c7
//https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12
//id - уникальный идентификатор
//webformatURL - ссылка на маленькое изображение для списка карточек
//largeImageURL - ссылка на большое изображение для модального окна

import React, { Component } from 'react';
import style from './searchbar.module.css';

export default class Searchbar extends Component {
  render() {
    const { searchValue, getImages, handleSearchQuery } = this.props;
    return (
      <div>
        <header className={style.Searchbar}>
          <form onSubmit={getImages} className={style.SearchForm}>
            <button type="submit" className={style.SearchFormButton}>
              <span className={style.SearchFormButtonLabel}>Search</span>
            </button>

            <input
              name="searchInput"
              value={searchValue}
              onChange={handleSearchQuery}
              className={style.SearchFormInput}
              type="text"
              //   autocomplete="off"
              //   autofocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
        ;
      </div>
    );
  }
}
