import React from "react";
import { Button } from "react-bootstrap";
import { Legislation } from "../../interfaces/legislation";

export function ExportLegislation({
    legislation
} : {
    legislation: Legislation[];
}): JSX.Element {
    const exportCSV = () => {
        let str = "";
        for (let i = 0; i < legislation.length; i++) {
            const data = legislation[i];
            str += data.id + ",";
            str += data.title + ",";
            str += data.status + ",";
            str += data.lastUpdated + ",";
            str += data.sponsors.join("&") + ",";
            str += data.summary + ",";
            str += data.source;
            str += "\n";
        }

        const uri =
            "data:text/csv;charaset=utf-8,\ufeff" + encodeURIComponent(str);
        const link = document.createElement("a");
        link.href = uri;
        link.download = "legislation";
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