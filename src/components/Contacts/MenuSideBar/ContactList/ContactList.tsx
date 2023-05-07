import React from 'react';
import { useAppSelector,useAppDispatch } from '../../../../store/hooks';
import NoContactsFound from '../../NoContactsFound';
import classes from './ContactList.module.css';
import { contactActions } from '../../../../store/slices/contactSlice';

type propsType={
  setIsEditButtonClicked:React.Dispatch<React.SetStateAction<Boolean>>,
  setEditItemId:React.Dispatch<React.SetStateAction<number|undefined>>
}

const ContactList:React.FC<propsType> = ({setIsEditButtonClicked,setEditItemId}) => {
  const contactList=useAppSelector(state=>state.contact.contactList);
  const dispatch=useAppDispatch(); 

  const deleteItem=(id:number)=>{
    dispatch(contactActions.deleteContactList(id));
  }

  const editItem=(id:number)=>{
    setIsEditButtonClicked(true);
    setEditItemId(id);
  }

  const ActiveContact:React.FC<{type:Boolean}>=({type})=>{
    return <div className='flex'>
      <div className={`w-3 h-3 pr-1 mt-[7.5%] rounded-full ${type?'bg-green-500':'bg-red-500'}`}></div>
      <div className={`pl-2 md:text-[120%] md:pb-2 ${type && 'pr-3'}`}>{type?'Active':'InActive'}</div>
    </div>
  }

  const Button:React.FC<{value:String,id:number}>=({value,id})=>{
    return <button className={`${classes.Button} ${value==='Edit'?'bg-green-500':'bg-red-500'}`} onClick={()=>value==='Delete'?deleteItem(id):editItem(id)}>
     {value==='Edit'?'Edit':'Delete'}
    </button>
  }

  return (
    <div className={classes.listContainer}>
      {contactList.length>0?<ul className='w-full rounded-md py-2'>
        {contactList.map((c,i)=><li key={i}>
          <div className={`${classes.listElement} ${i===0?'mb-3':'my-3'}`}>
            <div className={classes.firstLastActive}>
              <div className={classes.firstLast}>
                <div className='pr-1'>{c.firstName}</div>
                <div className='pl-1'>{c.lastName}</div>
              </div>
              <div>
               {<ActiveContact type={c.isActive}/>}
              </div>
            </div>
            <div className='flex justify-center pt-2 md:w-[15%] md:h-[2%] pb-2'>
               <Button value="Edit" id={c.id}/>
               <Button value="Delete" id={c.id}/>
            </div>
          </div>
        </li>)
          }
      </ul>:<NoContactsFound />}
    </div>
  )
}

export default ContactList
