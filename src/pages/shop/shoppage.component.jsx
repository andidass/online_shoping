import React from 'react';
import SHOP_DATA from './shop.data';

import CollectionPreview from '../../components/collections/collection-preview.component';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return collections.map(({ id, ...otherCollectionProps }) => (
      // maping CollectionPreview dengan memberikan nilai state
      <CollectionPreview key={id} {...otherCollectionProps} />
    ));
  }
}

export default ShopPage;
