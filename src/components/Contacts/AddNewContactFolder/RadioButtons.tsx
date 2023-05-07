import classes from './RadioButtons.module.css';

interface radioButtonType {
  activeSet:boolean,
  inActiveSet:boolean
}

interface propTypes{
  radioButtonState:radioButtonType,
  setRadioButtonState:React.Dispatch<React.SetStateAction<radioButtonType>>
}

const RadioButtons:React.FC<propTypes> = ({radioButtonState,setRadioButtonState}) => {
  
  return (
    <div className={classes.container}>
      <div className='flex'>
         <input type="radio" className={classes.input} checked={radioButtonState.activeSet}  onChange={()=>setRadioButtonState(prevState=>({...prevState,activeSet:true,
          inActiveSet:false}))}/>
         <label className={classes.label}>Active </label>
      </div>
      <div className='flex pt-[2%] md:pt-0'>
      <input type="radio" className={classes.input} checked={radioButtonState.inActiveSet} onChange={()=>setRadioButtonState(prevState=>({...prevState,activeSet:false,
          inActiveSet:true}))}/>
         <label className={classes.label}>InActive </label>
      </div>
    </div>
  )
}

export default RadioButtons
