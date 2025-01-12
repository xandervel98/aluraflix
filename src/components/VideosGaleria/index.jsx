import { useEffect, useState } from 'react';
import styled from 'styled-components';
import VideoCard from '../VideosCard';
import EditVideoModal from '../Modal';

const VideoGallery = () => {
  const [videos, setVideos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoToEdit, setVideoToEdit] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/videos')
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);

  const categories = {
    'FRONT END': '#6BD1FF',
    'BACK END': '#00C86F',
    'INNOVACIÓN Y GESTIÓN': '#FFBA05',
  };

  const categorizedVideos = videos.reduce((acc, video) => {
    if (!acc[video.categoria]) {
      acc[video.categoria] = [];
    }
    acc[video.categoria].push(video);
    return acc;
  }, {});

  const handleEdit = (video) => {
    setVideoToEdit(video); 
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setVideoToEdit(null);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/videos/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setVideos((prevVideos) => prevVideos.filter((video) => video.id !== id));
        alert('Video eliminado con éxito.');
      } else {
        alert('No se pudo eliminar el video.');
      }
    } catch (error) {
      console.error('Error al eliminar el video:', error);
      alert('Hubo un error al eliminar el video.');
    }
  };

  return (
    <>
      <GalleryContainer>
        {Object.entries(categorizedVideos).map(([category, videos]) => (
          <CategorySection key={category} color={categories[category]}>
            <CategoryTitle color={categories[category]}>{category}</CategoryTitle>
            <VideoList>
              {videos.map((video) => (
                <VideoCard
                  key={video.id}
                  video={video}
                  borderColor={categories[video.categoria.toUpperCase()]}
                  onEdit={handleEdit}
                  onDelete={() => handleDelete(video.id)}
                />
              ))}
            </VideoList>
          </CategorySection>
        ))}
      </GalleryContainer>

      {isModalOpen && (
        <EditVideoModal 
          video={videoToEdit} 
          onClose={closeModal} 
          setVideos={setVideos} 
        />
      )}
    </>
  );
};

const GalleryContainer = styled.div`
  padding: 20px;
`;

const CategorySection = styled.section`
  margin-bottom: 40px;
`;

const CategoryTitle = styled.h2`
  background-color: ${(props) => props.color};
  color: #fff;
  padding: 10px;
  border-radius: 10px;
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 20px;
  width: 100%;
  max-width: 430px;
  text-align: center;
`;

const VideoList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export default VideoGallery;

