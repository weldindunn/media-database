import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { Contact } from "../interfaces/contact";
import contacts from "../data/contacts.json";

const CONTACTS = contacts.map((contact): Contact => ({...contact}));

export function ViewContacts(): JSX.Element {
    const [contacts, setContacts] = useState<Contact[]>(CONTACTS);

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
                            {/*<td>{contact.address}{", "}{contact.city}{", "}{contact.state}</td>*/}
                        </tr>
                        )
                    )}
                </tbody>
            </Table>
        </div>
    )
}