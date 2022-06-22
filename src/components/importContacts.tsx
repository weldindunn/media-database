import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Contact } from "../interfaces/contact";

export function ImportContacts({
    setContacts
} : {
    setContacts: (contacts: Contact[]) => void;
}): JSX.Element {

    const [file, setFile] = useState<string>("No Data");
    const [fileUploaded, setFileUploaded] = useState<boolean>(false);
    const [isVisible, setVisible] = useState<boolean>(false);

    function uploadCSV(event: React.ChangeEvent<HTMLInputElement>) {
        // Might have removed the file, need to check that the files exist
        if (event.target.files && event.target.files.length) {
            // Get the first filename
            const filename = event.target.files[0];

            // Create a reader
            const reader = new FileReader();

            // Create lambda callback to handle when we read the file
            reader.onload = (loadEvent) => {
                // Target might be null, so provide default error value
                const newContent = loadEvent.target?.result || "Data was not loaded";

                // FileReader provides string or ArrayBuffer, force it to be string
                setFile(newContent as string);
            };

            // Read the file
            reader.readAsText(filename);
            setFileUploaded(true);
        }
    }

    function importCSV(passContent: string) {
        const data = passContent.split("\n").map(function (row) {
            return row.split(",");
        })

        const newContacts: Contact[] =
            data.map((row: String[]): Contact => ({
                id: Number(row[0]),
                name: String(row[1]),
                department: String(row[2]),
                organization: String(row[3]),
                industry: String(row[4]),
                phone_number: String(row[5]),
                email: String(row[6]),
                address: String(row[7]),
                city: String(row[8]),
                state: String(row[9])
            }));
        
        setContacts(newContacts.filter((contact: Contact): boolean => contact.id >= 1));
        setFile("No Data");
        setFileUploaded(false);
        setVisible(false);
    }
    
    return (
        <div className="import-interface">    
            {
                isVisible ? (
                    <div>
                        <Form.Group controlId="fileImporter">
                            <Form.Label>Upload CSV</Form.Label>
                            <Form.Control type="file" onChange={uploadCSV} />
                        </Form.Group>
                        <Button 
                            onClick={() => importCSV(file)} 
                            disabled={!fileUploaded}
                            variant="outline-success"
                            >Import .CSV
                        </Button>
                    </div>
                ) : (
                    <div>
                        <Button
                            onClick={() => setVisible(true)}
                            variant="outline-success"
                            >Import .CSV</Button>
                    </div>
                )
            }
        </div>
    )
}