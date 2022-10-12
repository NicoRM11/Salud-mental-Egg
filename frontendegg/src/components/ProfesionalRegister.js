import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Swal from 'sweetalert2';

export const ProfesionalRegister = () => {
    const [data, setdata] = useState({ usuario: "", password: "", fecha_nac: "", nombre: "", localidad: "", nacionalidad: "", apellido: "", telefono: "", obra_social: "", dni: "" });
    const [profesiones, setprofesiones] = useState([{ profesion: "", matricula: ""}]);
    const handleChange = ({ target }) => {
        setdata({
            ...data,
            [target.name]: target.value
        })

    }
    const URL = "http://localhost:8080/api/guest/registrar";

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(URL, data)
            console.log(response);
            if (response.status === 201) {
                Swal.fire(
                    'Registrado!',
                    'El usuario ha sido guardado exitosamente',
                    'success'
                )
            }

        } catch (error) {
            if (error.response.status === 406) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `No se pudo registrar, ${error.response.data} !`,
                })
            }
            console.log(error)
        }
    }

    const handleProfesionAdd = () => {
        setprofesiones([...profesiones,
            { profesion: "", matricula: ""}
        ])
    }
    return (
        <section className="container py-5">
            <div className="row justify-content-center align-items-center">
                <Form className="Formulario col-8 py-2 rounded h6 text-white" onSubmit={handleSubmit}>
                    <Row className="h2 text-center">
                        <Form.Label>INGRESE SUS DATOS</Form.Label>
                    </Row>
                    <Row className="mb-4">
                        <Col md={3}>
                            <Form.Label >Nombre</Form.Label>
                            <Form.Control type="text" name="nombre" placeholder="Nombre" required onChange={handleChange} />
                        </Col>
                        <Col md={3}>
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control type="text" name="apellido" placeholder="Apellido" required onChange={handleChange} />
                        </Col>
                        <Col md={1}></Col>
                        <Col md={4}>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="usuario" placeholder="Email" required onChange={handleChange} />
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col md={6}>
                            <Form.Label>DNI</Form.Label>
                            <Form.Control type="number" name="dni" placeholder="DNI" required onChange={handleChange} />
                        </Col>
                        <Col md={1}></Col>
                        <Col md={4}>
                            <Form.Label>Domicilio</Form.Label>
                            <Form.Control type="text" name="domicilio" placeholder="Domicilio" required onChange={handleChange} />
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col md={6}>
                            <Form.Label>Nacionalidad</Form.Label>
                            <Form.Control type="text" name="nacionalidad" placeholder="Nacionalidad" required onChange={handleChange} />
                        </Col>
                        <Col md={1}></Col>
                        <Col md={4}>
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Contraseña" required onChange={handleChange} />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Label>Fecha de nacimiento</Form.Label>
                            <Form.Control type="date" name="fecha_nac" placeholder="Nacionalidad" required onChange={handleChange} />
                        </Col>
                    </Row>
                    <Row className="mb-5 py-5">
                        {profesiones.map((profesion, index) => (
                            <div key={index} className="row">
                                <Col md={3}>
                                    <Form.Label >Especialidad</Form.Label>
                                    <Form.Control type="text" name="especialidad" placeholder="Especialidad" required onChange={handleChange} />
                                </Col>
                                <Col md={3}>
                                    <Form.Label>Matricula</Form.Label>
                                    <Form.Control type="text" name="matricula" placeholder="Matricula" required onChange={handleChange} />
                                </Col>
                                {
                                profesiones.length - 1 === index && (
                                    <Col md={1} className="d-flex align-items-center">
                                        <Button variant="" onClick={handleProfesionAdd} >
                                            <i className="bi bi-plus-square text-white"></i>
                                        </Button>
                                    </Col>)
                            }
                            </div>
                        ))}
                    </Row>

                    <Row className="">
                        <Button variant="" className="cta col-3" type="submit">
                            <span>Registrarse</span>
                            <svg viewBox="0 0 13 10" height="10px" width="15px">
                                <path d="M1,5 L11,5"></path>
                                <polyline points="8 1 12 5 8 9"></polyline>
                            </svg>
                        </Button>
                    </Row>
                </Form>
            </div>
        </section>
    )
}
