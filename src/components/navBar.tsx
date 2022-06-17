import React from "react";
import { Tab, Nav } from "react-bootstrap";
import { ViewHome } from "./viewHome";
import { ViewContacts } from "./contacts/viewContacts";
import { ViewMaps } from "./viewMaps";
import { ViewLegislation } from "./legislation/viewLegislation";

export function NavBar(): JSX.Element {
    return (
        <div>
            <Tab.Container id="NavBar" defaultActiveKey="contacts">
                <Nav variant="tabs" style={{display:"flex"}}>
                    <Nav.Item>
                        <Nav.Link eventKey="home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="contacts">Contacts</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="legislation">State Legislation</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="maps">Maps</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="home">
                        <ViewHome></ViewHome>
                    </Tab.Pane>
                    <Tab.Pane eventKey="contacts">
                        <ViewContacts></ViewContacts>
                    </Tab.Pane>
                    <Tab.Pane eventKey="legislation">
                        <ViewLegislation></ViewLegislation>
                    </Tab.Pane>
                    <Tab.Pane eventKey="maps">
                        <ViewMaps></ViewMaps>
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </div>
    )
}