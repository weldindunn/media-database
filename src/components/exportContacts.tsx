import React from "react";
import { Button } from "react-bootstrap";
import { Contact } from "../interfaces/contact";

export function ExportContacts({
    contacts
} : {
    contacts: Contact[];
}): JSX.Element {
    const exportCSV = () => {
        let str = "";
        for (let i = 0; i < contacts.length; i++) {
            const data = contacts[i];
            str += data.id + ",";
            str += data.name + ",";
            str += data.department + ",";
            str += data.organization + ",";
            str += data.industry + ",";
            str += data.phone_number + ",";
            str += data.email + ",";
            str += data.address + ",";
            str += data.city + ",";
            str += data.state;
            str += "\n";
        }

        const uri =
            "data:text/csv;charaset=utf-8,\ufeff" + encodeURIComponent(str);
        const link = document.createElement("a");
        link.href = uri;
        link.download = "contacts";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div>
            <Button onClick={exportCSV} variant="outline-success">Export to .CSV</Button>
        </div>
    )
}