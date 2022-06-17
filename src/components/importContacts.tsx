import React, { useState } from "react";
import { parse } from '@vanillaes/csv';
import { Button, Form } from "react-bootstrap";
import { Contact } from "../interfaces/contact";
import contacts from "../data/contacts.csv"

export function ImportContacts({
    setContacts
} : {
    setContacts: (contacts: Contact[]) => void;
}): JSX.Element {

    const [file, setFile] = useState(contacts);

    function importCSV(): void {
        console.log(parse(file));
        setContacts(parse(file));
    }
    
    return (
        <div>
            <div>
                <Form.Group>
                    <Form.Control value={file} type="file" onChange={(event: React.ChangeEvent<HTMLInputElement>) => setFile(event.target.value)} />
                </Form.Group>
            </div>
            <Button onClick={importCSV}>Import CSV</Button>
        </div>
    )
}