import React from 'react';
import Sidebar from '../components/Sidebar';
import photoGalleryData from '../data/photo-gallery.data.json';

interface Props {
  sidebarData: sidebarData;
}

console.log(photoGalleryData);

const PhotoGalleryPage: React.FC<Props> = ({ sidebarData }) => {
  return (
    <>
      <Sidebar sidebarData={sidebarData} currentTab='活動照片' />
      <main className='main-content photo-gallery'>
        <h1>活動照片</h1>
        {photoGalleryData.data.map((category) => {
          return (
            <section key={category.categoryName}>
              <h2 className='photo-gallery-category-name'>
                {category.categoryName}
              </h2>
              <div className='photo-gallery-image-list'>
                {category.images.map((image) => (
                  <img
                    key={image.file}
                    className='photo-gallery-image-item'
                    src={image.url}
                    alt={image.alt}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </main>
    </>
  );
};

export default PhotoGalleryPage;
