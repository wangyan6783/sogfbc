import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Modal from '../components/Modal';
import photoGalleryData from '../data/photo-gallery.data.json';

interface Props {
  sidebarData: sidebarData;
}

console.log(photoGalleryData);

const PhotoGalleryPage: React.FC<Props> = ({ sidebarData }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState('');
  const [modalImageAlt, setModalImageAlt] = useState('');

  const handleModal = (imageUrl: string, imageAlt: string) => {
    setModalOpen(true);
    setModalImageUrl(imageUrl);
    setModalImageAlt(imageAlt);
  };

  return (
    <>
      <div className='page'>
        <Sidebar sidebarData={sidebarData} currentTab='活動照片' />
        <main className='page-content photo-gallery'>
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
                      className='photo-gallery-image'
                      src={image.url}
                      alt={image.alt}
                      onClick={() => handleModal(image.url, image.alt)}
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </main>
      </div>
      {modalOpen && (
        <Modal
          imageUrl={modalImageUrl}
          imageAlt={modalImageAlt}
          setModalOpen={setModalOpen}
        />
      )}
    </>
  );
};

export default PhotoGalleryPage;
