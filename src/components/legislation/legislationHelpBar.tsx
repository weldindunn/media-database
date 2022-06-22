import React from "react";
import { Accordion } from "react-bootstrap";

export function LegislationHelpBar(): JSX.Element {
    return (
        <div className="helpBar">
            <Accordion alwaysOpen>
                <Accordion.Header>
                    Having trouble? Here are some common questions and answers:
                </Accordion.Header>
                <Accordion.Body>
                    <Accordion.Item eventKey="l1">
                        <Accordion.Header>
                            What are all these columns?
                        </Accordion.Header>
                        <Accordion.Body>
                            Each column represents a different value of a piece of legislation. The columns are, from left to 
                            right, the title of the bill &#40;&#91;Chamber&#93;&#91;Number&#93;&#41;, the current status of the bill
                            &#40;Ex. the current committee&#41;, the last time the entry was updated, the sponsors of the bill &#40;primary
                            sponsor first&#41;, a brief summary of the bill, and a link to the full bill.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="l2">
                        <Accordion.Header>
                            How do I add a piece of legislation?
                        </Accordion.Header>
                        <Accordion.Body>
                            <span>
                                To add a piece of legislation, enter values at the bottom column of the legislation table in
                                each of the boxes. You do not have to enter a value for every box, but <strong>you will not 
                                be able to save if you do not enter a title.</strong> Press save to add the contact.
                            </span>
                            <br/><br/>
                            <span>To enter sponsors, separate their names by commas and spaces &#40;Ex. Adams, Buchanan, Clinton&#41;.</span>
                            <br/>
                            <span>Yes, the spaces and commas really do matter.</span>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="l3">
                        <Accordion.Header>
                            How do I edit the legislation?
                        </Accordion.Header>
                        <Accordion.Body>
                            <span>
                                To edit a piece of legislation, press the edit button in the rightmost column. This will bring
                                up a modal where you can edit any field of the bill/resolution. If you want to save the changes,
                                press save. Pressing cancel will leave the piece of legislation as it was before you pressed
                                the edit button. <strong>You will not be able to save if you do not enter a title.</strong>
                            </span>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="l4">
                        <Accordion.Header>
                            Why can't I edit the "Last Updated" field?
                        </Accordion.Header>
                        <Accordion.Body>
                            <span>
                                The last updated field is automatically entered by the computer whenever legislation is added or
                                edited. Pretty nifty, huh? Unless you've got a problem with that.
                            </span>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="l5">
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