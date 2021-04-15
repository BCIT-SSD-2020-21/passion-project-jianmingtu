import React, {useState} from 'react'
import './Search.css'
import { BsForward, BsCameraVideo } from 'react-icons/bs';
import { useHistory } from 'react-router-dom' 

export default function Search() {
    const history = useHistory();

    const [search, setSearch] = useState('')
	const [species, setSpecies] = useState('')

 const handleSubmit = e => {
	e.preventDefault()
    history.push(`/posts/?search=${search}`)
	 		  
  }

    return (
	<div className="search-root"  >
        <div className="search-form">

            <input type="text" className=" search_string" name="search" placeholder="pet name, etc." value={search} onChange={(e)=>setSearch(e.target.value)}></input>		

            <select id="cropperform-species" className="form-control" name="species" aria-required="true"  onChange={(e)=>setSpecies(e.target.value)}>
            <option value="">Choose Species...</option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Bird">Bird</option>
            <option value="Horse">Horse</option>
            <option value="Rabbit">Rabbit</option>
            <option value="Reptile">Reptile</option>
            <option value="Ferret">Ferret</option>
            <option value="Other">Other</option>
            </select>

            <button className="search_submitButton" onClick={handleSubmit}>
                <BsForward style={{marginRight: '0.5rem'}} size={25} />
                <span>Update</span>
            </button>            
        </div>			
    </div>            
  
    )
}

