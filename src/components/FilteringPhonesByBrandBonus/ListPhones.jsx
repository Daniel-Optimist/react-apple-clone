import React, {useState,useEffect} from 'react'

function ListPhones() {
    
    //state to hold all the 10 phones
    const [phones, setPhones]= useState([])
    // state to track when the brand is changed
    const [filteredPhones, setFilteredPhones] = useState([])
    // to track change in brand 
    const [selectedBrand, setSelectedBrand] = useState("")
    useEffect (()=>{
        //fetch the phones.json file 
        fetch ("phones.json")
        .then ((response)=> response.json())
        .then ((data) => {console.log (data)
        setPhones(data.phones);
        setFilteredPhones(data.phones) //Initially show all phones
        })
        .catch ((error) => console.error ("Error fetching phones:", error));
    }, [])

    useEffect (()=> {
        // filter the phones based on the selected brand 
        if (selectedBrand ===""){
            setFilteredPhones(phones);
        } else {
            setFilteredPhones(
                phones.filter((phone)=> phone.brand === selectedBrand)
            );
            
        }
        
    }, [selectedBrand,phones]);

    const handleBrandChange = (event) => {setSelectedBrand(event.target.value);

    };
  return (
    <div>
        <h1>Phone List</h1>
        <div>
            <label htmlFor="brand">Filter by Brand: </label>
            <select id="brand" onChange={handleBrandChange} value={selectedBrand}>
                <option value="">All</option>
                <option value="Apple"></option>
                <option value="samsung"></option>
                <option value="Google"></option>
                <option value="OnePlus"></option>
                <option value="Sony"></option>
            </select>
        </div>
        <ul>
            {filteredPhones.map((phone,index)=>(
                <li key={index}>
                      <strong>{phone.brand}</strong> = {phone.model} ({phone.release_year})
                </li>
              
            ))}
        </ul>

    </div>
  )
}

export default ListPhones