import React from 'react'
import { Link } from 'react-router-dom'
import{useState,useEffect} from 'react'
import axios from 'axios';
import {TextField,Button,FormControl} from '@mui/material'


function Home() {
    const[data,setData]= useState('');
    const[id,setId] = useState('')

    const getDataFromServer = async () => {
      try {
        const resp = await axios.get("/data")
        setData(resp.data)
      } catch (err) {
        console.log(err)
      }
    }
   
console.log(data)

async function postId() {
 
  try {
    await axios.put("http://localhost:5000/data", {
    id
    })
   
  } catch (error) {
    console.log(error)
  }
}
    useEffect(() => {
     getDataFromServer();
     }, []);
    return (
  <> 
  <FormControl>
   < TextField  id="filled-basic" label="Id" variant="filled" onChange={(e) => setId(e.target.value)} />
      <Button variant="outlined" onClick={() => postId()}>Send</Button>
  </FormControl>
      
  {!data.name? (
    <>
  <div>{data.name}</div>
  </>
  ) : (
    <>
  
           <div>{data.name}</div>
            <img src={`${data.image.url}`} alt="pic"/>
           <ul>
             <h3>Stats</h3>
             <li>Intelligence: {data.powerstats.intelligence}</li>
             <li>Strength: {data.powerstats.strength}</li>
             <li>Speed: {data.powerstats.speed}</li>
             <li>Power: {data.powerstats.power}</li>
             <li>Duraility: {data.powerstats.durability}</li>
             <li>Combat: {data.powerstats.combat}</li>
           </ul> 
           <ul>
             <h3>Appearance</h3>
             <li>Eye Colour: {data.appearance["eye-color"]}</li>
             <li>Gender: {data.appearance.gender}</li>
             <li>Hair Colour: {data.appearance["hair-color"]}</li>
             <li>Height: {data.appearance.height[1]}</li>
             <li>Race: {data.appearance.race}</li>
             <li>Weight: {data.appearance.weight[1]}</li>
           </ul> 
           <ul>
             <h3>Biography</h3>
             <li>Aliases: {data.biography.aliases[0]}</li>
             <li>Alignment: {data.biography.alignment}</li>
             <li>Alter-Egos: {data.biography["alter-egos"]}</li>
             <li>First Appearance: {data.biography["first-appearance"]}</li>
             <li>Full Name: {data.biography["full-name"]}</li>
             <li>Place of birth: {data.biography["place-of-birth"]}</li>
             <li>Publisher: {data.biography.publisher}</li>
           </ul> 
           <ul>
             <h3>Connections</h3>
             <li>Group Affiliation: {data.connections["group-affiliation"]}</li>
             <li>Relatives: {data.connections.relatives}</li>
            
           </ul>
    <ul>
      <li>Work: {data.work.occupation}</li>
      <li>Base: {data.work.base}</li>
      </ul>
   
            <Link to={'/Superhero'}>Superhero</Link>
            </>
  )}
   </>
    )
}

export default Home
