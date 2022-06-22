import React, { useState } from "react";
import { Form, Table, Button, Dropdown } from "react-bootstrap";
import { Legislation } from "../interfaces/legislation";
import { EditLegislation } from "./editLegislation";
import { ExportLegislation } from "./exportLegislation";
import { ImportLegislation } from "./importLegislation";
import legislation from "../data/legislation.json";

const LEGISLATION = legislation.map((legislation): Legislation => ({...legislation}));

export function ViewLegislation(): JSX.Element {
    const [legislation, setLegislation] = useState<Legislation[]>(LEGISLATION);

    const [title, setTitle] = useState<string>("");
    const [status, setStatus] = useState<string>("");
    const [sponsors, setSponsors] = useState<string>("");
    const [summary, setSummary] = useState<string>("");
    const [source, setSource] = useState<string>("");

    function save(): void {
        const d = new Date();

        setLegislation(
            [...legislation, {
                id: legislation.length + 1,
                title: title,
                status: status,
                lastUpdated: (d.getMonth() + 1).toString() + "/" + d.getDate().toString() + "/" + d.getFullYear().toString().substring(2),
                sponsors: sponsors.split(", "),
                summary: summary,
                source: source
            }]
        );
        reset();
    }

    function reset(): void {
        setTitle("");
        setStatus("");
        setSponsors("");
        setSummary("");
        setSource("");
    }

    return (
        <>
            <div className="legislationTable">
                <Table striped bordered hover responsive="sm">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Status</th>
                            <th>Last Updated</th>
                            <th>Sponsors</th>
                            <th>Summary</th>
                            <th>Source</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {legislation.map((leg: Legislation) => (
                            <tr key={leg.id}>
                                <td>{leg.title}</td>
                                <td>{leg.status}</td>
                                <td>{leg.lastUpdated}</td>
                                <td>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                                            Sponsors
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            {
                                                leg.sponsors.map((sponsor: string) => (
                                                    <Dropdown.ItemText key={sponsor}>
                                                        {sponsor}
                                                    </Dropdown.ItemText>
                                                ))
                                            }
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </td>
                                <td>{leg.summary}</td>
                                <td><a href={leg.source} target="_blank" rel="noreferrer">Source</a></td>
                                <td>
                                    <EditLegislation
                                        leg={leg}
                                        legislation={legislation}
                                        setLegislation={setLegislation}
                                    ></EditLegislation>
                                </td>
                            </tr>
                            )
                        )}
                        <tr key="LegislationInput">
                            {/*Title*/}
                            <td>
                                <Form.Control
                                    value={title}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)} 
                                    placeholder="Enter Title"
                                />
                            </td>
                            {/*Status*/}
                            <td>
                                <Form.Control
                                    value={status}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setStatus(event.target.value)} 
                                    placeholder="Enter Status"
                                />
                            </td>
                            {/*Date*/}
                            <td>
                                <Form.Control
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setStatus(event.target.value)} 
                                    placeholder={Date()}
                                    disabled
                                />
                            </td>
                            {/*Sponsors*/}
                            <td>
                                <Form.Control
                                    value={sponsors}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSponsors(event.target.value)} 
                                    placeholder="Enter Sponsors"
                                />
                            </td>
                            {/*Summary*/}
                            <td>
                                <Form.Control
                                    value={summary}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSummary(event.target.value)} 
                                    placeholder="Enter Summary"
                                />
                            </td>
                            {/*Source*/}
                            <td>
                                <Form.Control
                                    value={source}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSource(event.target.value)} 
                                    placeholder="Enter URL"
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
            <div className="import-export-interface">
                <ExportLegislation legislation={legislation}></ExportLegislation>
                <ImportLegislation setLegislation={setLegislation}></ImportLegislation>
            </div>
        </>
    )
}