import React, { useState } from "react";
import { Form, Modal, Col, Row } from "react-bootstrap";
import  { Contact } from "../interfaces/contact";

export function EditContact({
    isEditing,
    closeModal,
    contact

}: {
    isEditing: boolean;
    closeModal: () => void;
    contact: Contact
}): JSX.Element {

    const [industry, setIndustry] = useState<string>("");
    const [organization, setOrganization] = useState<string>("");
    const [department, setDepartment] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [state, setState] = useState<string>("");

    return (
        <div>
            <Modal
                show={isEditing}
                onHide={closeModal}
                animation={true}
            >
                <Modal.Header>
                    <Modal.Title>Edit Contact</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Industry */}
                    <Form.Group controlId="formContactIndustry" as={Row}>
                        <Form.Label column sm={3}>
                            Industry
                        </Form.Label>
                        <Col>
                            <Form.Control
                                value={industry}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                    ) => setIndustry(event.target.value)}
                                placeholder={contact.industry}
                            />
                        </Col>
                    </Form.Group>
                    {/* Organization */}
                    <Form.Group controlId="formContactOrganization" as={Row}>
                        <Form.Label column sm={3}>
                            Organization
                        </Form.Label>
                        <Col>
                            <Form.Control
                                value={organization}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                    ) => setOrganization(event.target.value)}
                                placeholder={contact.organization}
                            />
                        </Col>
                    </Form.Group>
                    {/* Department */}
                    <Form.Group controlId="formContactDepartment" as={Row}>
                        <Form.Label column sm={3}>
                            Department
                        </Form.Label>
                        <Col>
                            <Form.Control
                                value={department}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                    ) => setDepartment(event.target.value)}
                                placeholder={contact.department}
                            />
                        </Col>
                    </Form.Group>
                    {/* Name */}
                    <Form.Group controlId="formContactName" as={Row}>
                        <Form.Label column sm={3}>
                            Name
                        </Form.Label>
                        <Col>
                            <Form.Control
                                value={name}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                    ) => setName(event.target.value)}
                                placeholder={contact.name}
                            />
                        </Col>
                    </Form.Group>
                    {/* Phone Number */}
                    <Form.Group controlId="formContactPhoneNumber" as={Row}>
                        <Form.Label column sm={3}>
                            Phone Number
                        </Form.Label>
                        <Col>
                            <Form.Control
                                value={phoneNumber}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                    ) => setPhoneNumber(event.target.value)}
                                placeholder={contact.phone_number}
                            />
                        </Col>
                    </Form.Group>
                    {/* Email */}
                    <Form.Group controlId="formContactEmail" as={Row}>
                        <Form.Label column sm={3}>
                            Email
                        </Form.Label>
                        <Col>
                            <Form.Control
                                value={email}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                    ) => setEmail(event.target.value)}
                                placeholder={contact.email}
                            />
                        </Col>
                    </Form.Group>
                    {/* City */}
                    <Form.Group controlId="formContactCity" as={Row}>
                        <Form.Label column sm={3}>
                            City
                        </Form.Label>
                        <Col>
                            <Form.Control
                                value={city}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                    ) => setCity(event.target.value)}
                                placeholder={contact.city}
                            />
                        </Col>
                    </Form.Group>
                    {/* State */}
                    <Form.Group controlId="formContactState" as={Row}>
                        <Form.Label column sm={3}>
                            State
                        </Form.Label>
                        <Col>
                            <Form.Control
                                value={state}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                    ) => setState(event.target.value)}
                                placeholder={contact.state}
                            />
                        </Col>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        </div>
    )
}