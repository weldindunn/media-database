import React from "react";
import { Accordion } from "react-bootstrap";

export function ContactHelpBar(): JSX.Element {
    return (
        <div className="helpBar">
            <Accordion alwaysOpen>
                <Accordion.Header>
                    Having trouble? Here are some common questions and answers:
                </Accordion.Header>
                <Accordion.Body>
                    <Accordion.Item eventKey="c1">
                        <Accordion.Header>
                            What are all these columns?
                        </Accordion.Header>
                        <Accordion.Body>
                            Each column represents a different value of a contact. The columns are, from left to right,
                            the industry of the contact, the organization of which they are a part, the department in which
                            they work, the contact's name, the contact's phone number, their email, the primary city where
                            they are located, and the state in which that city stands.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="c2">
                        <Accordion.Header>
                            How do I sort the columns?
                        </Accordion.Header>
                        <Accordion.Body>
                            To sort any column, press the arrows next to its title. Most columns, but not all, can be sorted.
                            If you want to sort by more than one column, press the arrows in the reverse order of priority.
                            So if you want to sort by industry and then name, sort by name then industry.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="c3">
                        <Accordion.Header>
                            How do I add a contact?
                        </Accordion.Header>
                        <Accordion.Body>
                            <span>
                                To add a contact, enter values at the bottom column of the contact table in each of the boxes.
                                You do not have to enter a value for every box, but <strong>you will not be able to save if
                                you do not enter an organization and a name.</strong> Press save to add the contact.
                            </span>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="c4">
                        <Accordion.Header>
                            How do I edit the contacts?
                        </Accordion.Header>
                        <Accordion.Body>
                            <span>
                                To edit a contact, press the edit button in the rightmost column. This will bring up a modal where
                                you can edit any field of the contact. If you want to save the changes, press save. Pressing cancel 
                                will leave the contact as it was before you pressed the edit button. <strong>You will not be able to save if
                                you do not enter an organization and a name.</strong>
                            </span>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="c5">
                        <Accordion.Header>
                            How can I save my data?
                        </Accordion.Header>
                        <Accordion.Body>
                            <span>
                                There is currently no saving through browsers, but you can export your data to a .CSV file. To do this, press
                                the "Export to .CSV" button at the bottom of the page. This will download a .CSV file. You can then import
                                this file later by pressing the "Import .CSV" button, selecting the file wherever you have it stored, and pressing
                                the new "Import .CSV" button.
                            </span>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion.Body>
            </Accordion>
        </div>
    )
}