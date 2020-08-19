import React, { Component } from 'react';
import Searchbar from '../components/searchbar/Searchbar';
import ImageGallery from '../components/imageGallery/ImageGallery';
import imagesFetchApi from '../components/services/ImagesApi';
import Button from '../components/button/Button';

//const baseUrl = 'https://pixabay.com/api/?';
export default class App extends Component {
  state = {
    images: [],
    searchValue: '',
    page: 1,
    error: '',
    loading: false,
  };

  //   componentDidUpdate(prevProps, prevState) {
  //     const prevQuery = prevState.searchValue;
  //     const nextQuery = this.state.searchValue;
  //     if (prevQuery !== nextQuery) {
  //       this.getImages();
  //     }
  //   }
  getImages = e => {
    const { searchValue, page } = this.state;

    imagesFetchApi
      .imagesFetchApi(searchValue, page)
      .then(images =>
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        })),
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };
  handleSearchFormSubmit = e => {
    e.preventDefault();
    this.getImages(this.state.searchValue, this.state.page);

    this.setState({
      searchValue: this.state.searchValue,
      page: 1,
      images: [],
    });
  };
  handleSearchQuery = e => {
    this.setState({ searchValue: e.target.value });
    //this.getImages(this.state.searchValue);
    //const result = await this.getImages(this.state.searchValue);
    // this.setState({ images: [...result], page: 2 });
  };

  loadMoreImages = () => {
    const { searchValue, page } = this.state;
    this.getImages(searchValue, page);

    // this.setState(
    //   prevState => ({
    //     images: [...prevState.images, ...result],
    //     page: prevState.page + 1,
    //   }),
    // //   //this.getImages(this.state.searchValue, this.state.page);
    // //   // this.setState(prevState => ({
    // //   //   images: [...prevState.images, ...result],
    // //   //   page: prevState.page + 1,
    // //   // }));
    // );
  };
  render() {
    const { searchValue, images } = this.state;
    return (
      <div>
        <Searchbar
          searchValue={searchValue}
          handleSearchQuery={this.handleSearchQuery}
          getImages={this.handleSearchFormSubmit}
        />
        <ImageGallery images={images} />
        {images.length > 0 && <Button loadMoreImages={this.loadMoreImages} />}
      </div>
    );
  }
}
