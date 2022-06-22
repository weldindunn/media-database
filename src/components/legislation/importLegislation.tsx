import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Legislation } from "../../interfaces/legislation";

export function ImportLegislation({
    setLegislation
} : {
    setLegislation: (legislation: Legislation[]) => void;
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

        const newLegislation: Legislation[] =
            data.map((row: String[]): Legislation => ({
                id: Number(row[0]),
                title: String(row[1]),
                status: String(row[2]),
                lastUpdated: String(row[3]),
                sponsors: String(row[4]).split("&"),
                summary: String(row[5]),
                source: String(row[6])
            }));
        
        setLegislation(newLegislation.filter((leg: Legislation): boolean => leg.id >= 1));
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