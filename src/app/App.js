import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import Searchbar from '../components/searchbar/Searchbar';
import ImageGallery from '../components/imageGallery/ImageGallery';
import imagesFetchApi from '../components/services/ImagesApi';
import Button from '../components/button/Button';
import Modal from '../components/modal/Modal';

export default class App extends Component {
  state = {
    images: [],
    searchValue: '',
    page: 1,
    error: '',
    isLoading: false,
    largeImage: null,
    isShowModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    // const prevQuery = prevState.searchValue;
    // const nextQuery = this.state.searchValue;
    // if (prevState.images.length < this.state.images.length) {
    //   window.scrollBy({
    //     top: 1000,
    //     left: 100,
    //     behavior: "smooth",
    //   });
    // }
    if (prevState.images.length !== this.state.images.length) {
      window.scrollBy({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }
  getImages = e => {
    const { searchValue, page } = this.state;
    this.setState({ isLoading: true });

    imagesFetchApi
      .imagesFetchApi(searchValue, page)
      .then(images => {
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        }));
        // const crossAxis = document.documentElement.offsetHeight - 150;

        // setTimeout(() => {
        //   window.scrollTo({
        //     top: crossAxis,
        //     behavior: 'smooth',
        //   });
        // }, 100);
      })
      .catch(error => this.setState({ error }))
      .finally(() => {
        console.log('finally');
        this.setState({ isLoading: false });
      });
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
  };

  loadMoreImages = e => {
    const { searchValue, page } = this.state;
    this.getImages(searchValue, page);
  };

  openModal = largeImage => {
    this.setState({ isShowModal: true, largeImage: largeImage });
  };

  closeModal = () => {
    this.setState({ isShowModal: false, largeImage: null });
  };

  render() {
    const {
      searchValue,
      images,
      isLoading,
      isShowModal,
      largeImage,
    } = this.state;
    console.log('isLoading', isLoading);
    return (
      <div>
        <Searchbar
          searchValue={searchValue}
          handleSearchQuery={this.handleSearchQuery}
          getImages={this.handleSearchFormSubmit}
        />
        {isLoading && (
          <div style={{ position: 'fixed' }}>
            <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000}
            />
          </div>
        )}
        <ImageGallery images={images} openModal={this.openModal} />

        {images.length > 0 && <Button loadMoreImages={this.loadMoreImages} />}
        {isShowModal && (
          <Modal onClose={this.closeModal} largeImage={largeImage} />
        )}
      </div>
    );
  }
}
