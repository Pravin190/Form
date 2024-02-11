import React from 'react'
import { useState } from 'react'

function App() {

  const [formdata,setformdata] = useState(
                                          { firstname:"",lastname:"",email:"",Country:"",StreetAddress:"",
                                            City:"",StateProvince:"",ZipPostalcode:"",Comments:false,Candidates:false,Offers:false,
                                            Everything:"",SameAsEmail:"",NoPushNotification:""  }
                                          )

        

      function ChangeHandler(event) {

          const{name,type,value,checked} = event.target;

          setformdata((prev) => {

            return {...prev,[name] : type ==='checkbox' ? checked : value};

          });

      }


      function SubmitHandler(event) {

        event.preventDefault();

        console.log("product data");

        console.log(formdata);


      }

  return (
    <div className="flex flex-col items-center mt-2">

        <form onSubmit={SubmitHandler}>

            <label className='text-black leading-3 font-bold text-lg'>first name</label>
            <br></br>
            <input onChange={ChangeHandler} className='w-[900px] h-[40px] border-2 border-zinc-800'
            type='text' id='firstname' placeholder='first name' name='firstname' value={formdata.firstname}></input>
            <br></br>

            <label className='text-black leading-3 font-bold text-lg'>last name</label>
            <br></br>
            <input onChange={ChangeHandler} className='w-[900px] h-[40px] border-2 border-zinc-800'
            type='text' id='lastname' placeholder='last name' name='lastname' value={formdata.lastname}></input>
            <br></br>

            <label className='text-black leading-3 font-bold text-lg'>Email</label>
            <br></br>
            <input onChange={ChangeHandler} className='w-[900px] h-[40px] border-2 border-zinc-800'
            type='email' id='email' name='email' value={formdata.email}></input>
            <br></br>


            <label className='text-black leading-3 font-bold text-lg'>Country</label>
            <br></br>
            <select onChange={ChangeHandler} className='w-[900px] h-[40px] border-2 border-zinc-800'
            name='Country' value={formdata.Country}>

                <option value="India">India</option>
                <option value="Amerika">Amerika</option>
                <option value="Canada">Canada</option>
                <option value="Dubai">Dubai</option>
                <option value="Rasia">Rasia</option>

            </select>
            <br></br>


            <label htmlFor='StreetAddress' className='text-black leading-3 font-bold text-lg'>Street Address</label>
            <br></br>
            <input onChange={ChangeHandler} className='w-[900px] h-[40px] border-2 border-zinc-800'
            type='text' placeholder='1-bc' name='StreetAddress' value={formdata.StreetAddress}></input>
            <br></br>


            <label htmlFor='City' className='text-black leading-3 font-bold text-lg'>City</label>
            <br></br>
            <input onChange={ChangeHandler} className='w-[900px] h-[40px] border-2 border-zinc-800'
            type='text' placeholder='City name' id='City' name='City' value={formdata.City}></input>
            <br></br>


            <label htmlFor='StateProvince' className='text-black leading-3 font-bold text-lg'>State/Province</label>
            <br></br>
            <input onChange={ChangeHandler} className='w-[900px] h-[40px] border-2 border-zinc-800'
            type='text' placeholder='state' id='StateProvince' name='StateProvince' value={formdata.StateProvince}></input>
            <br></br>


            <label className='text-black leading-3 font-bold text-lg'>Zip/Postal Code</label>
            <br></br>
            <input onChange={ChangeHandler} className='w-[900px] h-[40px] border-2 border-zinc-800'
            type='text' placeholder='Pin code' id='ZipPostalcode' name='ZipPostalcode' value={formdata.ZipPostalcode}></input>
            <br></br>
            <br></br>



            <fieldset>

              <legend className='text-black leading-3 font-bold text-lg'>By Emails</legend>
              <br></br>  

              
              <input onChange={ChangeHandler} 
              type='checkbox' id='Comments' name='Comments' checked={formdata.Comments}></input>
              

              <label htmlFor='Comments' className='text-black leading-3 font-bold text-lg ml-2'>Comments</label>
              
              <p className='text-black text-md'>get notified when someone posts a comment on a posting</p>

              
              <br></br>

              <input onChange={ChangeHandler} 
              type='checkbox' id='Candidates' name='Candidates' checked={formdata.Candidates}></input>
              

            

              <label htmlFor='Candidates' className='text-black leading-3 font-bold text-lg ml-2'>Candidates</label>
              <p className='text-black text-md'>get notified when candidates applied for a job</p>
            
            
              <br></br>

              <input onChange={ChangeHandler} 
              type='checkbox' id='Offers' name='Offers' checked={formdata.Offers}></input>
              

              

              <label htmlFor='Offers' className='text-black leading-3 font-bold text-lg ml-2'>Offers</label>
              <p className='text-black text-md'>get notified when candidates accept & reject the Offers</p>
              

              
              <br></br>

            </fieldset>
            <br></br>


            <fieldset>

              <legend className='text-black leading-3 font-bold text-lg'>Push Notification</legend>

              <p className='text-black text-md'>these are delivered via SMS to your mobile phone</p>
              <br></br>

              <input onChange={ChangeHandler} 
              type='radio' id='Everything' name='Everything' value="Everything" checked={formdata.Everything}></input>

              <label className='text-black leading-3 font-bold text-lg'>Everything</label>  
              <br></br>


              <input onChange={ChangeHandler} 
              type='radio' id='SameAsEmail' name='SameAsEmail' value="SameAsEmail" checked={formdata.SameAsEmail}></input>

              <label className='text-black leading-3 font-bold text-lg'>Same as email</label>    
              <br></br>


              <input onChange={ChangeHandler} 
              type='radio' id='NoPushNotification' name='NoPushNotification' value="NoPushNotification" checked={formdata.NoPushNotification}></input>

              <label className='text-black leading-3 font-bold text-lg'>No Push Notification</label> 
              <br></br>   

              


            </fieldset>
            <br></br>


            <button className='w-[150px] h-[40px] bg-green-500 hover:bg-green-300 border-2 border-black rounded-md'>Save</button>

        </form>

    </div>
  )
}

export default App