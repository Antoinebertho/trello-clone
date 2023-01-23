import React from 'react'
import { addItemButton } from '../styles';
import { NewItemForm } from './NewItemForm';

interface AddNewItemProps {
    onAdd(text:string):void;
    toggleButtonText: string;
    dark?: boolean;
}

export const AddNewItem = (props: AddNewItemProps) => {
    const [showForm, setShowForm] = useState(false);
    const {onAdd, toggleButtonText, dark} = props;

if (showForm) {
    return (
        <NewItemForm
        onAdd={(text)=> {
            onAdd(text);
            setShowForm
        }}
    )
}
return {
    <AddItemButton dark={dark} onclick={()=> setShowForm(true)}>
    {toggleButtonText}
    </AddItemButton> 
};
