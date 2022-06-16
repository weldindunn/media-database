import React, { useState } from "react";
import { Form, Modal, Col, Row, Button } from "react-bootstrap";
import  { Legislation } from "../interfaces/legislation";

export function EditLegislation({
    leg,
    legislation,
    setLegislation

}: {
    leg: Legislation;
    legislation: Legislation[];
    setLegislation: (legislation: Legislation[]) => void;
}): JSX.Element {

    const [title, setTitle] = useState<string>(leg.title);
    const [status, setStatus] = useState<string>(leg.status);
    const [sponsors, setSponsors] = useState<string>(leg.sponsors.toString());
    const [summary, setSummary] = useState<string>(leg.summary);
    const [source, setSource] = useState<string>(leg.source);

    const [isEditing, changeEditing] = useState<boolean>(false);

    function openModal(): void {
        changeEditing(true);
    }

    function closeModal(): void {
        changeEditing(false);
    }

    function save(): void {
        const d = new Date();
        //(d.getMonth() + 1).toString() + "/" + d.getDate().toString() + "/" + d.getFullYear().toString().substring(2)

        setLegislation(legislation.map((targetLeg: Legislation): Legislation => targetLeg.id === leg.id ? 
                ({
                    id: leg.id,
                    title: title,
                    status: status,
                    lastUpdated: (d.getMonth() + 1).toString() + "/" + d.getDate().toString() + "/" + d.getFullYear().toString().substring(2),
                    sponsors: sponsors.split(", "),
                    summary: summary,
                    source: source
                })
                : (targetLeg)
            )
        );
        closeModal();
    }

    function cancel(): void {
        setTitle(leg.title);
        setStatus(leg.status);
        setSponsors(leg.sponsors.toString());
        setSummary(leg.summary);
        setSource(leg.source);
        closeModal();
    }

    function remove(): void {
        setLegislation(legislation.filter((l: Legislation): boolean => l.id !== leg.id))
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
                    <Modal.Title>Edit Legislation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Title */}
                    <Form.Group controlId="formLegTitle" as={Row}>
                        <Form.Label column sm={3}>
                            Title
                        </Form.Label>
                        <Col>
                            <Form.Control
                                value={title}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                    ) => setTitle(event.target.value)}
                                placeholder={"Enter Title"}
                            />
                        </Col>
                    </Form.Group>
                    {/* Status */}
                    <Form.Group controlId="formLegStatus" as={Row}>
                        <Form.Label column sm={3}>
                            Status
                        </Form.Label>
                        <Col>
                            <Form.Control
                                value={status}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                    ) => setStatus(event.target.value)}
                                placeholder={"Enter Status"}
                            />
                        </Col>
                    </Form.Group>
                    {/* Sponsors */}
                    <Form.Group controlId="formLegSponsors" as={Row}>
                        <Form.Label column sm={3}>
                            Sponsors
                        </Form.Label>
                        <Col>
                            <Form.Control
                                value={sponsors}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                    ) => setSponsors(event.target.value)}
                                placeholder={"Enter Sponsors"}
                            />
                        </Col>
                    </Form.Group>
                    {/* Summary */}
                    <Form.Group controlId="formLegSummary" as={Row}>
                        <Form.Label column sm={3}>
                            Summary
                        </Form.Label>
                        <Col>
                            <Form.Control
                                value={summary}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                    ) => setSummary(event.target.value)}
                                placeholder={"Enter Summary"}
                            />
                        </Col>
                    </Form.Group>
                    {/* Source */}
                    <Form.Group controlId="formLegSource" as={Row}>
                        <Form.Label column sm={3}>
                            Source
                        </Form.Label>
                        <Col>
                            <Form.Control
                                value={source}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                    ) => setSource(event.target.value)}
                                placeholder={"Enter Source"}
                            />
                        </Col>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    {/* Delete Button */}
                    <Button onClick={remove} variant="danger">Delete</Button>

                    {/* Save Button */}
                    <Button onClick={save} variant="success">Save</Button>

                    {/* Cancel Button */}
                    <Button onClick={cancel} variant="warning">Cancel</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}