import { useState } from 'react';
import styled from 'styled-components';

const EditVideoModal = ({ video, onClose, setVideos }) => {
  const [formData, setFormData] = useState({
    titulo: video.titulo,
    categoria: video.categoria,
    imagen: video.imagen,
    video: video.video,
    descripcion: video.descripcion,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`http://localhost:3000/videos/${video.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const updatedVideo = await response.json();
      setVideos((prevVideos) =>
        prevVideos.map((v) => (v.id === video.id ? updatedVideo : v))
      );
      onClose();
    } else {
      alert('Error al actualizar el video');
    }
  };

  const handleReset = () => {
    setFormData({
      titulo: '',
      categoria: 'FRONT END',
      imagen: '',
      video: '',
      descripcion: '',
    });
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ModalTitle>EDITAR CARD:</ModalTitle>
        <Form onSubmit={handleSubmit}>
          <Label>
            Título:
            <Input
              name="titulo"
              value={formData.titulo}
              onChange={handleChange}
            />
          </Label>
          <Label>
            Categoría:
            <Select
              name="categoria"
              value={formData.categoria}
              onChange={handleChange}
            >
              <option value="FRONT END">FRONT END</option>
              <option value="BACK END">BACK END</option>
              <option value="INNOVACIÓN Y GESTIÓN">INNOVACIÓN Y GESTIÓN</option>
            </Select>
          </Label>
          <Label>
            Imagen:
            <Input
              name="imagen"
              value={formData.imagen}
              onChange={handleChange}
            />
          </Label>
          <Label>
            Video:
            <Input
              name="video"
              value={formData.video}
              onChange={handleChange}
            />
          </Label>
          <Label>
            Descripción:
            <Textarea
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
            />
          </Label>
          <ButtonGroup>
            <SubmitButton type="submit">GUARDAR</SubmitButton>
            <ResetButton type="button" onClick={handleReset}>
              LIMPIAR
            </ResetButton>
          </ButtonGroup>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #03122F;
  color: #fff;
  padding: 35px 100px;
  border-radius: 10px;
  width: 574px;
  height: 740px;
  position: relative;
  border: 2px solid #6BD1FF;
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;
`;

const ModalTitle = styled.h2`
  margin-bottom: 30px;
  font-size: 2.5rem;
  color: #1e90ff;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-grow: 1;
`;

const Label = styled.label`
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 5px;
  border: 2px solid #2271D1;
  color: #A5A5A5;
  background: transparent;
  font-size: 1rem;

  &:focus{
    border: 2px solid #2271D1;
    outline: none;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 12px;
  border-radius: 5px;
  border: 2px solid #2271D1;
  color: #A5A5A5;
  background: transparent;
  font-size: 1rem;

  &:focus{
    border: 2px solid #2271D1;
    outline: none;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 12px;
  border-radius: 5px;
  border: 2px solid #2271D1;
  color: #A5A5A5;
  background: transparent;
  font-size: 1rem;
  resize: none;
  height: 100px;

  &:focus{
    border: 2px solid #2271D1;
    outline: none;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SubmitButton = styled.button`
  background: #000;
  border: 2px solid #2271D1;
  border-radius: 8px;
  color: #2271D1;
  padding: 10px 35px;
  font-size: 1.25rem;
  cursor: pointer;
  font-weight: bold;
  box-shadow: inset 0 0 15px rgba(30, 144, 255, 0.8);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ResetButton = styled.button`
  background: transparent;
  border: 3px solid #F5F5F5;
  color: #fff;
  padding: 10px 35px;
  border-radius: 8px;
  font-size: 1.25rem;
  cursor: pointer;
  font-weight: bold;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export default EditVideoModal;



