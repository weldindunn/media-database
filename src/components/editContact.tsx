import React from "react";
import { Form, Modal } from "react-bootstrap";
import { Contact } from "../interfaces/contact";

export function EditContact({
    isEditing,
    closeModal
}: {
    isEditing: boolean;
    closeModal: () => void;
}): JSX.Element {
    return (
        <div>
            <Modal
                show={isEditing}
                onHide={closeModal}
                animation={true}
            >
                <Modal.Header>
                    <Modal.Title>Edit Contact</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        </div>
    )
}