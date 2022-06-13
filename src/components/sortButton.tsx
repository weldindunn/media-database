import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Contact } from "../interfaces/contact";

export function SortButton({
    columnTitle,
    contacts,
    setContacts
}: {
    columnTitle: string;
    contacts: Contact[];
    setContacts: (contacts: Contact[]) => void;
}): JSX.Element {

    //Helper to sort, swaps two values in an array
    function swap(nodes: string[], i: number, j: number) {
        const temp = nodes[i];
        nodes[i] = nodes[j];
        nodes[j] = temp;
    }

    function partition(nodes: string[], low: number, high: number): number {
        const pivot = nodes[high];
        let i = (low - 1);

        for (let j = low; j <= high - 1; j++) {
            if (nodes[j] < pivot) {
                i++;
                swap(nodes, i, j);
            }
        }
        swap(nodes, i+1, high);
        return (i + 1);
    }

    function quicksort(nodes: string[], low: number, high: number) {
        if (low < high) {
            const partIndex = partition(nodes, low, high);

            //Sorts elements before and after partition
            quicksort(nodes, low, partIndex - 1);
            quicksort(nodes, partIndex + 1, high);
        }
    }

    function printArray(nodes: string[], size: number) {
        for (let i = 0; i < size; i++) {
            console.log(nodes[i] + ", ");
        }
    }

    function sortNames(): void {
        const names = contacts.map((contact: Contact): string => contact.name)
        console.log("Original order: ");
        printArray(names, contacts.length);
        
        quicksort(names, 0, contacts.length - 1);
        console.log("Sorted by name: ");
        printArray(names, contacts.length);
    }

    return (
        <div>
            <span>{columnTitle}</span>
            <Button onClick={sortNames}>Sort</Button>
        </div>
    )
}