import React, { useState } from "react";
import { Form, Modal, Col, Row, Button } from "react-bootstrap";
import  { Contact } from "../interfaces/contact";

export function EditContact({
    contact,
    contacts,
    setContacts

}: {
    contact: Contact;
    contacts: Contact[];
    setContacts: (contacts: Contact[]) => void;
}): JSX.Element {

    const [industry, setIndustry] = useState<string>(contact.industry);
    const [organization, setOrganization] = useState<string>(contact.organization);
    const [department, setDepartment] = useState<string>(contact.department);
    const [name, setName] = useState<string>(contact.name);
    const [phoneNumber, setPhoneNumber] = useState<string>(contact.phone_number);
    const [email, setEmail] = useState<string>(contact.email);
    const [city, setCity] = useState<string>(contact.city);
    const [state, setState] = useState<string>(contact.state);

    const [isEditing, changeEditing] = useState<boolean>(false);

    function openModal(): void {
        changeEditing(true);
    }

    function closeModal(): void {
        changeEditing(false);
    }

    function save(): void {
        setContacts(contacts.map((targetContact: Contact): Contact => 
            targetContact.id === contact.id ? {
                id: contact.id,
                industry: industry,
                organization: organization,
                department: department,
                name: name,
                phone_number: phoneNumber,
                email: email,
                address: "",
                city: city,
                state: state
            } : targetContact)
        );
        closeModal();
    }

    function cancel(): void {
        setIndustry(contact.industry);
        setOrganization(contact.organization);
        setDepartment(contact.department);
        setName(contact.name);
        setPhoneNumber(contact.phone_number);
        setEmail(contact.email);
        setCity(contact.city);
        setState(contact.state);
        closeModal();
    }

    function remove(): void {
        setContacts(contacts.filter((con: Contact): boolean => con.id !== contact.id))
    }
    
    return (
        <div>
            <div style={{display:"flex"}}>
                <Button onClick={openModal}>Edit</Button>
                <Button onClick={remove} variant="danger">✕</Button>
            </div>
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
                                placeholder={"Enter Industry"}
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
                                placeholder={"Enter Organization"}
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
                                placeholder={"Enter Department"}
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
                                placeholder={"Enter Name"}
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
                                placeholder={"Enter Phone Number"}
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
                                placeholder={"Enter Email"}
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
                                placeholder={"Enter City"}
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
                                placeholder={"Enter State"}
                            />
                        </Col>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <div style={{display:"flex", alignItems:"left"}}>
                        {/* Delete Button */}
                        <Button onClick={remove} variant="danger">Delete</Button>
                    </div>
                    <div style={{display:"flex", alignItems:"right"}}>
                        {/* Save Button */}
                        <Button onClick={save} variant="success">Save</Button>

                        {/* Cancel Button */}
                        <Button onClick={cancel} variant="warning">Cancel</Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </div>
    )
}