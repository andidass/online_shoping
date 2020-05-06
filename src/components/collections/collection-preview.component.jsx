import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.scss';

const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {/* menampilkan list item name */}
      {items
        // filter hanya menampilkan 4 item
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
