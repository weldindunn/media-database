import React, { useState } from "react";
import { Form, Table, Button } from "react-bootstrap";
import { Contact } from "../interfaces/contact";
import contacts from "../data/contacts.json";
import { EditContact } from "./editContact";

const CONTACTS = contacts.map((contact): Contact => ({...contact}));

export function ViewContacts(): JSX.Element {
    const [contacts, setContacts] = useState<Contact[]>(CONTACTS);

    const [industry, setIndustry] = useState<string>("");
    const [organization, setOrganization] = useState<string>("");
    const [department, setDepartment] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [state, setState] = useState<string>("");

    function save(): void {
        setContacts(
            [...contacts, {
                id: contacts.length + 1,
                industry: industry,
                organization: organization,
                department: department,
                name: name,
                phone_number: phoneNumber,
                email: email,
                address: "",
                city: city,
                state: state
            }]
        );
        reset();
    }

    function reset(): void {
        setIndustry("");
        setOrganization("");
        setDepartment("");
        setName("");
        setPhoneNumber("");
        setEmail("");
        setCity("");
        setState("");
    }

    return (
        <div className="contactTable">
            <Table striped bordered hover responsive="sm">
                <thead>
                    <tr>
                        <th>Industry</th>
                        <th>Organization</th>
                        <th>Department</th>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Edit</th>
                        {/*<th>Address</th>*/}
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact: Contact) => (
                        <tr key={contact.id}>
                            <td>{contact.industry}</td>
                            <td>{contact.organization}</td>
                            <td>{contact.department}</td>
                            <td>{contact.name}</td>
                            <td>{contact.phone_number}</td>
                            <td>{contact.email}</td>
                            <td>{contact.city}</td>
                            <td>{contact.state}</td>
                            <td>
                                <EditContact
                                    contact={contact}
                                    contacts={contacts}
                                    setContacts={setContacts}
                                ></EditContact>
                            </td>
                            {/*<td>{contact.address}{", "}{contact.city}{", "}{contact.state}</td>*/}
                        </tr>
                        )
                    )}
                    <tr key="CourseInput">
                        {/*Industry*/}
                        <td>
                            <Form.Control
                                value={industry}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setIndustry(event.target.value)} 
                                placeholder="Enter Industry"
                            />
                        </td>
                        {/*Organization*/}
                        <td>
                            <Form.Control
                                value={organization}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setOrganization(event.target.value)} 
                                placeholder="Enter Organization"
                            />
                        </td>
                        {/*Department*/}
                        <td>
                            <Form.Control
                                value={department}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setDepartment(event.target.value)} 
                                placeholder="Enter Department"
                            />
                        </td>
                        {/*Name*/}
                        <td>
                            <Form.Control
                                value={name}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)} 
                                placeholder="Enter Name"
                            />
                        </td>
                        {/*Phone Number*/}
                        <td>
                            <Form.Control
                                value={phoneNumber}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPhoneNumber(event.target.value)} 
                                placeholder="Enter Phone Number"
                            />
                        </td>
                        {/*Email*/}
                        <td>
                            <Form.Control
                                value={email}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)} 
                                placeholder="Enter Email"
                            />
                        </td>
                        {/*City*/}
                        <td>
                            <Form.Control
                                value={city}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setCity(event.target.value)} 
                                placeholder="Enter City"
                            />
                        </td>
                        {/*State*/}
                        <td>
                            <Form.Control
                                value={state}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setState(event.target.value)} 
                                placeholder="Enter State"
                            />
                        </td>
                        {/*Save*/}
                        <td>
                            <Button onClick={save}>Save</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}