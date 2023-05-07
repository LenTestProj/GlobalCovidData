import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type contactListItemType={
    id:number,
    firstName:string,
    lastName:string,
    isActive:Boolean
}

type contactListType={
    contactList:contactListItemType[]
}

const initialState:contactListType={
   contactList:[]
}

const contactSlice=createSlice({
    name:'contact',
    initialState,
    reducers:{  
        addNewContact:(state,action:PayloadAction<contactListItemType>)=>{
           state.contactList.push(action.payload);
        },
        editContactList:(state,action:PayloadAction<{id:(number|undefined),value:(contactListItemType|undefined)}>)=>{
            const id=action.payload.id;
            const value=action.payload.value;
            if(id && value){
                state.contactList[id-1]=value;
            }

        },
        deleteContactList:(state,action:PayloadAction<number>)=>{
            const id=action.payload;
            state.contactList=state.contactList.filter(c=>c.id!==id);
        }
    }
})

export const contactActions=contactSlice.actions;
export default contactSlice;

//reducers for adding,editing and deleting contact info