import React, { useEffect, useRef, useState } from 'react';
import classes from './AddNewContact.module.css';
import RadioButtons from './RadioButtons';
import { contactActions } from '../../../store/slices/contactSlice';
import { useAppDispatch,useAppSelector } from '../../../store/hooks';

interface propsType {
  onCancelContactForm: React.Dispatch<React.SetStateAction<Boolean>>,
  setIsEditButtonClicked:React.Dispatch<React.SetStateAction<Boolean>>,
  setEditItemId:React.Dispatch<React.SetStateAction<number|undefined>>
  isEditButtonClicked:Boolean,
  editItemId:number|undefined
} 

type contactListItemType={
  id:number,
  firstName:string,
  lastName:string,
  isActive:Boolean
}

interface radioButtonType {
  activeSet:boolean,
  inActiveSet:boolean
}

const AddNewContact:React.FC<propsType> = ({onCancelContactForm,setIsEditButtonClicked,setEditItemId,isEditButtonClicked,editItemId}) => {
  const firstNameInputref=useRef<HTMLInputElement>(null);
  const lastNameInputRef=useRef<HTMLInputElement>(null);
  const [radioButtonState,setRadioButtonState]=useState<radioButtonType>({
    activeSet:true,
    inActiveSet:false
  })
  const [selectedItem,setSelectedItem]=useState<contactListItemType>();

  const dispatch=useAppDispatch();
  const contactList=useAppSelector(state=>state.contact.contactList);

  useEffect(()=>{
    if(isEditButtonClicked && editItemId){
      const tempSelectedObj:(contactListItemType|undefined)=contactList.find(c=>c.id===editItemId);
      if(tempSelectedObj){
        setSelectedItem(tempSelectedObj);
        if(firstNameInputref.current) 
        {
          firstNameInputref.current.value=tempSelectedObj.firstName
        }
        if(lastNameInputRef.current){
          lastNameInputRef.current.value=tempSelectedObj.lastName;
        }
        setRadioButtonState(prevState=>({
          ...prevState,
          activeSet:tempSelectedObj.isActive?true:false,
          inActiveSet:tempSelectedObj.isActive?false:true
        }))
      }
    }
  },[isEditButtonClicked,editItemId,selectedItem,contactList])

  const cancelContactForm=()=>{
    onCancelContactForm(false);
    setIsEditButtonClicked(false);
    setEditItemId(undefined);
  }

  const submitHandler=(event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    event.stopPropagation();
    const buttonId = event.currentTarget[5].id;
     if(firstNameInputref.current?.value.length===0){
      alert('enter the first Name');
      return;
     }
     if(lastNameInputRef.current?.value.length===0){
      alert('enter the last Name');
      return;
     }
     
     if(firstNameInputref.current && lastNameInputRef.current){
       //Adding a new contact
         if(buttonId==='Add'){
          const item={
            id:contactList.length+1,
            firstName:firstNameInputref.current.value,
            lastName:lastNameInputRef.current.value,
            isActive:radioButtonState.activeSet?radioButtonState.activeSet:false
          }
          dispatch(contactActions.addNewContact(item))
         } 
         else{
          //updating the existing contact
          if(editItemId){
            const newValue={
              id:editItemId,
              firstName:firstNameInputref.current.value,
              lastName:lastNameInputRef.current.value,
              isActive:radioButtonState.activeSet?radioButtonState.activeSet:false
            }
            dispatch(contactActions.editContactList({id:editItemId,value:newValue}));
            setIsEditButtonClicked(false);
            setEditItemId(undefined);
          }
         }
        //clear the inputs for first and last name
       if( firstNameInputref.current && lastNameInputRef.current) 
       {
        firstNameInputref.current.value='';
        lastNameInputRef.current.value='';
      } 
  }
}

  

  return (
    <div className={classes.container}>
      <h1 className='ml-[25%] mb-[5%] text-1xl sm:text-2xl'>Create Contact Screen</h1>
      <form onSubmit={(event)=>submitHandler(event)}>
        <div className={classes.form}>
        <div className='flex'>
          <label className='w-[40%]'>First Name: </label>
          <input className={classes.input} ref={firstNameInputref}/>
        </div> 
        <div className='flex pt-3'>
          <label className='w-[40%]'>Last Name: </label>
          <input className='bg-gray-50 border border-gray-300 w-[60%] rounded' ref={lastNameInputRef}/>
        </div>
        <div className='flex pt-3'>
          <label className='w-[40%]'>Active Status: </label>
          <RadioButtons radioButtonState={radioButtonState} setRadioButtonState={setRadioButtonState}/>
        </div>
      </div> 
      <div className='flex justify-around pt-4'>
        <button className={`${classes.button} bg-red-500`} onClick={()=>cancelContactForm()}>Cancel</button>  
        <button type='submit' className={`${classes.button} ${isEditButtonClicked?'bg-green-800':'bg-blue-500'}`} id={`${isEditButtonClicked?'Edit':'Add'}`}>{isEditButtonClicked?'Edit Contact':'Add Contact'}</button> 
      </div>  
      </form>
    </div>
  )
}

export default AddNewContact
