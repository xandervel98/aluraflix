import { useState } from "react";
import styled from "styled-components";

const NuevoVideo = () => {
  const [formData, setFormData] = useState({
    titulo: "",
    categoria: "",
    imagen: "",
    video: "",
    descripcion: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleGuardar = async (e) => {
    e.preventDefault();

    const { titulo, categoria, imagen, video, descripcion } = formData;
    if (!titulo || !categoria || !imagen || !video || !descripcion) {
      alert("Por favor, complete todos los campos antes de guardar.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Video guardado con éxito.");
        setFormData({
          titulo: "",
          categoria: "",
          imagen: "",
          video: "",
          descripcion: "",
        });
      } else {
        alert("Error al guardar el video.");
      }
    } catch (error) {
      console.error("Error al guardar el video:", error);
      alert("Hubo un problema al guardar el video.");
    }
  };

  const handleLimpiar = (e) => {
    e.preventDefault();
    setFormData({
      titulo: "",
      categoria: "",
      imagen: "",
      video: "",
      descripcion: "",
    });
  };

  return (
    <>
      <Main>
        <Container>
          <Title>NUEVO VIDEO</Title>
          <Subtitle>
            COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO
          </Subtitle>
          <Form>
            <SectionTitle>Crear Tarjeta</SectionTitle>
            <FormRow>
              <FormGroup>
                <Label htmlFor="titulo">Título</Label>
                <Input
                  id="titulo"
                  name="titulo"
                  value={formData.titulo}
                  onChange={handleInputChange}
                  placeholder="ingrese el título"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="categoria">Categoría</Label>
                <Select
                  id="categoria"
                  name="categoria"
                  value={formData.categoria}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>
                    seleccione una categoría
                  </option>
                  <option value="FRONT END">FRONT END</option>
                  <option value="BACK END">BACK END</option>
                  <option value="INNOVACIÓN Y GESTIÓN">
                    INNOVACIÓN Y GESTIÓN
                  </option>
                </Select>
              </FormGroup>
            </FormRow>
            <FormRow>
              <FormGroup>
                <Label htmlFor="imagen">Imagen</Label>
                <Input
                  id="imagen"
                  name="imagen"
                  value={formData.imagen}
                  onChange={handleInputChange}
                  placeholder="ingrese el enlace de la imagen"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="video">Video</Label>
                <Input
                  id="video"
                  name="video"
                  value={formData.video}
                  onChange={handleInputChange}
                  placeholder="ingrese el enlace del video"
                />
              </FormGroup>
            </FormRow>
            <FormGroup>
              <Label htmlFor="descripcion">Descripción</Label>
              <Textarea
                id="descripcion"
                name="descripcion"
                value={formData.descripcion}
                onChange={handleInputChange}
                placeholder="¿de qué se trata este video?"
              />
            </FormGroup>
            <ButtonGroup>
              <SubmitButton onClick={handleGuardar}>GUARDAR</SubmitButton>
              <ClearButton onClick={handleLimpiar}>LIMPIAR</ClearButton>
            </ButtonGroup>
          </Form>
        </Container>
      </Main>
    </>
  );
};

const Main = styled.main`
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  max-width: 800px;
  width: 100%;
  background-color: #191919;
  padding: 20px;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 3.75rem;
  text-align: center;
`;

const Subtitle = styled.p`
  color: #fff;
  font-size: 1.25rem;
  text-align: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SectionTitle = styled.h2`
  color: #fff;
  font-size: 2.25rem;
  border-top: 2px solid rgba(165, 165, 165, 0.1);
  border-bottom: 2px solid rgba(165, 165, 165, 0.1);
`;

const FormRow = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FormGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Label = styled.label`
  color: #fff;
  font-size: 1.25rem;
  margin-bottom: 10px;
`;

const Input = styled.input`
  background: transparent;
  color: #fff;
  border: 2px solid #444;
  border-radius: 5px;
  padding: 10px;
  font-size: 1rem;
  margin-bottom: 30px;

  &:focus {
    border-color: #1e90ff;
    outline: none;
  }

  &::placeholder {
    color: #a5a5a5;
  }
`;

const Select = styled.select`
  background: transparent;
  color: #a5a5a5;
  border: 2px solid #444;
  border-radius: 5px;
  padding: 10px;
  font-size: 1rem;

  &:focus {
    border-color: #1e90ff;
    outline: none;
  }
`;

const Textarea = styled.textarea`
  background: transparent;
  color: #fff;
  border: 2px solid #444;
  border-radius: 15px;
  padding: 10px;
  font-size: 1rem;
  resize: none;
  max-width: 50%;
  height: 200px;
  margin-bottom: 20px;

  &:focus {
    border-color: #1e90ff;
    outline: none;
  }

  &::placeholder {
    color: #a5a5a5;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 30px;
  max-width: 50%;
`;

const SubmitButton = styled.button`
  background: #000;
  border: 3px solid #2271d1;
  border-radius: 8px;
  color: #2271d1;
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

const ClearButton = styled.button`
  background: transparent;
  border: 3px solid #f5f5f5;
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

export default NuevoVideo;
