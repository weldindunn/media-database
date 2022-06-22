import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Contact } from "../../interfaces/contact";

export function SortButton({
    columnTitle,
    contacts,
    setContacts
}: {
    columnTitle: string;
    contacts: Contact[];
    setContacts: (contacts: Contact[]) => void;
}): JSX.Element {

    const [industrySorted, setIndustrySorted] = useState<boolean>(false);
    const [organizationSorted, setOrganizationSorted] = useState<boolean>(false);
    const [departmentSorted, setDepartmentSorted] = useState<boolean>(false);
    const [nameSorted, setNameSorted] = useState<boolean>(false);
    const [citySorted, setCitySorted] = useState<boolean>(false);
    const [stateSorted, setStateSorted] = useState<boolean>(false);

    //Industry
    function compareIndustry (con1: Contact, con2: Contact) {
        if (con1.industry.toUpperCase() > con2.industry.toUpperCase()) { return 1; }
        if (con1.industry.toUpperCase() < con2.industry.toUpperCase()) { return -1; }
        return 0;
    }

    function sortIndustries(): void {
        const sorted = [...contacts].sort(compareIndustry)
        setContacts(sorted);
    }

    //Organization
    function compareOrganization (con1: Contact, con2: Contact) {
        if (con1.organization.toUpperCase() > con2.organization.toUpperCase()) { return 1; }
        if (con1.organization.toUpperCase() < con2.organization.toUpperCase()) { return -1; }
        return 0;
    }

    function sortOrganizations(): void {
        const sorted = [...contacts].sort(compareOrganization)
        setContacts(sorted);
    }

    //Department
    function compareDepartment (con1: Contact, con2: Contact) {
        if (con1.department.toUpperCase() > con2.department.toUpperCase()) { return 1; }
        if (con1.department.toUpperCase() < con2.department.toUpperCase()) { return -1; }
        return 0;
    }

    function sortDepartments(): void {
        const sorted = [...contacts].sort(compareDepartment)
        setContacts(sorted);
    }

    //Names
    function compareName (con1: Contact, con2: Contact) {
        if (con1.name.toUpperCase() > con2.name.toUpperCase()) { return 1; }
        if (con1.name.toUpperCase() < con2.name.toUpperCase()) { return -1; }
        return 0;
    }

    function sortNames(): void {
        const sorted = [...contacts].sort(compareName)
        setContacts(sorted);
    }

    //Cities
    function compareCity (con1: Contact, con2: Contact) {
        if (con1.city.toUpperCase() > con2.city.toUpperCase()) { return 1; }
        if (con1.city.toUpperCase() < con2.city.toUpperCase()) { return -1; }
        return 0;
    }

    function sortCities(): void {
        const sorted = [...contacts].sort(compareCity)
        setContacts(sorted);
    }

    //States
    function compareState (con1: Contact, con2: Contact) {
        if (con1.state.toUpperCase() > con2.state.toUpperCase()) { return 1; }
        if (con1.state.toUpperCase() < con2.state.toUpperCase()) { return -1; }
        return 0;
    }

    function sortStates(): void {
        const sorted = [...contacts].sort(compareState)
        setContacts(sorted);
    }

    return (
        columnTitle === "Industry" ? (
            <div style={{display:"flex"}}>
                <span>{columnTitle}</span>
                <Button onClick={sortIndustries} variant="" size="sm">⇅</Button>
            </div>
        ) : columnTitle === "Organization" ? (
            <div style={{display:"flex"}}>
                <span>{columnTitle}</span>
                <Button onClick={sortOrganizations} variant="" size="sm">⇅</Button>
            </div>
        ) : columnTitle === "Department" ? (
            <div style={{display:"flex"}}>
                <span>{columnTitle}</span>
                <Button onClick={sortDepartments} variant="" size="sm">⇅</Button>
            </div>
        ) : columnTitle === "Name" ? (
            <div style={{display:"flex"}}>
                <span>{columnTitle}</span>
                <Button onClick={sortNames} variant="" size="sm">⇅</Button>
            </div>
        ) : columnTitle === "City" ? (
            <div style={{display:"flex"}}>
                <span>{columnTitle}</span>
                <Button onClick={sortCities} variant="" size="sm">⇅</Button>
            </div>
        ) : columnTitle === "State" ? (
            <div style={{display:"flex"}}>
                <span>{columnTitle}</span>
                <Button onClick={sortStates} variant="" size="sm">⇅</Button>
            </div>
        ) : <div></div>
    )
}