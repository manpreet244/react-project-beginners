import React ,{useState ,useEffect}from 'react'

const Country = () => {
    const [country , setCountry] = useState([]);
    useEffect(()=>{
        const getCountry = async()=>{
          const country = await fetch("https://api.first.org/data/v1/countries");

          const json = await country.json();
          console.log(json)
          setCountry(json);
        }
        getCountry();
    },[])
  return ( <> 
      <h2>Select Country and state</h2>
    
      
         <div>
            <label>Country</label>
            <select name="country"></select>
            <option>--Select Country--</option>
            <option>India</option>
            <option>USA</option>
        </div>
        <div>
            <label>State</label>
            <select name="state">
                <option>Select State</option>
                <option>Dekhi</option>
                <option>Punjab</option>
            </select>
            
        </div>
    

  
    </>
  )
}

export default Country
