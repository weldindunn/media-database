import React from "react";
import { Button } from "react-bootstrap";
import { Contact } from "../interfaces/contact";

export function DeleteContact({
    contact,
    contacts,
    setContacts
} : {
    contact: Contact;
    contacts: Contact[];
    setContacts: (contacts: Contact[]) => void;
}): JSX.Element {

    function remove(): void {
        setContacts(contacts.filter((con: Contact): boolean => con.id !== contact.id))
    }

    return (
        <Button onClick={remove}>X</Button>
    )
}