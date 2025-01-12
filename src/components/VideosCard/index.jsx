import styled from 'styled-components';

const VideoCard = ({ video, borderColor, onEdit, onDelete }) => {
  const handleDelete = () => {
    const confirmDelete = window.confirm(
      `¿Estás seguro de que deseas eliminar el video "${video.titulo}"?`
    );
    if (confirmDelete) {
      onDelete(video.id);
    }
  };

  return (
    <Card borderColor={borderColor}>
      <VideoWrapper borderColor={borderColor}>
        <YouTubePlayer
          src={video.video}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </VideoWrapper>
      <ButtonGroup>
        <ActionButton onClick={handleDelete}>
          <img src="../../img/icono_delete.png" alt="borrar" />
          BORRAR
        </ActionButton>
        <ActionButton onClick={() => onEdit(video)}>
          <img src="../../img/icono_edit.png" alt="editar" />
          EDITAR
        </ActionButton>
      </ButtonGroup>
    </Card>
  );
};

const Card = styled.div`
  background-color: #333;
  color: #fff;
  border: 5px solid ${(props) => props.borderColor || '#fff'};
  border-radius: 15px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  width: 430px;
`;

const VideoWrapper = styled.div`
  position: relative;
  border-bottom: 5px solid ${(props) => props.borderColor || '#fff'};
`;

const YouTubePlayer = styled.iframe`
  width: 100%;
  height: 260px;
  border: none;
  border-radius: 5px 5px 0 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  background-color: #000;
  padding: 10px;
`;

const ActionButton = styled.button`
  background-color: #000;
  display: flex;
  gap: 10px;
  align-items: center;
  font-family: 'Roboto', serif;
  font-weight: 900;
  font-size: 1rem;
  color: #fff;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #777;
  }
`;

export default VideoCard;
