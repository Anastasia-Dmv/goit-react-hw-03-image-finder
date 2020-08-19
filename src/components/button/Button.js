import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    const { loadMoreImages } = this.props;
    return (
      <div>
        <button type="button" onClick={loadMoreImages}>
          Load more
        </button>
      </div>
    );
  }
}

// import React from 'react';
// import { render } from '@testing-library/react';

// export default function Button() {
//   render();
//   const { loadMoreImages } = this.props;
//   return (
//     <>
//       <button type="button" onClick={loadMoreImages}>
//         Load more
//       </button>
//     </>
//   );
// }
