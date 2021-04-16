
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import './NewPost.css'
import { BsForward, BsCameraVideo } from 'react-icons/bs';
import {IOSSwitch} from '../utils/ToggleSwitch'
import FormControlLabel from '@material-ui/core/FormControlLabel';


const useStyles = makeStyles((theme) => ({
   root: {
    maxWidth: 1000,
    padding: 10,
    margin: "auto",
    backgroundColor: '#f3f4f6',
    gridArea: 'main',
    overflowY: 'auto',
  },
}));


export default function PostDetails({user, className, post, submitPost, submitComment, likeClicked}) {

  const [profileImg, setProfileImag] = useState('images/pet_dog_brown_missing.png')
  const [lost, setLost]=useState(true)
   const [file, setFile]=useState('')
  const [petName, setPetName]=useState('')
	const [lostPlace, setLostPlace] = useState('')
	const [gender, setGender] = useState('')
	const [species, setSpecies] = useState('')  

	const [disabled, setDisabled] = useState(false)
	const [readonly, setReadonly] = useState(false) 
	
	const speciesList = ["Dog", "Cat", "Bird", "Horse", "Rabbit", "Reptile", "Ferret", "Other" ]
	const genderList = ["Male", "Female", "Unknown" ]

	useEffect(() => {
		
		if(post) {
			setProfileImag(post.upload_image_file)
			setFile(post.upload_image_file)
			setLost(post.lost)
			setPetName(post.pet_name)
			setLostPlace(post.address_last_seen)
			setGender(post.gender)
			setSpecies(post.species)	
		}
		return () => {
			
		}
	}, [post])
  const imageHandler = (e) => {

    const file = e.target.files[0]
	setFile(file)
    const reader = new FileReader()
    reader.onload = e => setProfileImag(e.target.result)
    reader.readAsDataURL(file)	
  };

  const handleSubmit = e => {
	      e.preventDefault()

		  console.log("lost-------------------",lost)
		  console.log("upload_image_file-------------------",file)	  
	  	  console.log("pet_name-------------------",petName)
	  	console.log("address_last_seen-------------------",lostPlace)
	  	  console.log("gender-------------------",gender)
	  		console.log("species-------------------",species)

			  //TODO
			  console.log("date_last_seen-------------------",species)		

			  submitPost({...post,
				lost:lost, 
				upload_image_file: file, 
				pet_name:petName, 
				address_last_seen:lostPlace, 
				gender, species})		 		  
  }

	return (
		<div className="root">
			<form  onSubmit={handleSubmit}>		
				<div className="imageContainer">
					<div className="titlebar">
						<img src="../../images/nails_left.svg" className="pull-left" />
						<h3 className="heading">Missing</h3>
						<img src="../../images/nails_right.svg" className="pull-left" />
					</div>			
					<div className="poster-photo-placeholder fido-light-blue-bg">
						<div className="img-holder">
							<img src={profileImg} alt="" id="img" className="img" />
						</div>
						<input type="file" accept="image/*" name="image-upload" id="input" onChange={imageHandler} />
						<div className="label">
							<label className="image-upload" htmlFor="input">
								<BsCameraVideo style={{marginRight: '0.5rem'}} size={30} />
								<span>Update Photo</span>
							</label>
						</div>
					</div>
				</div>

				<div className="lostFind">
					<span>Lost</span>
					<FormControlLabel
						control={<IOSSwitch checked={lost} onChange={(e)=>{
							
							setLost(e.target.checked)}}
							
							 />}
					/>
					<span>Found</span>			
				</div>

				<div className="InfoContainer">
					<div>
						<label className="control-label" >Pet Name</label>
						<input type="text" id="dashboardpet-pet_name" className="form-control" name="pet_name" placeholder="e.g. Fido" aria-required="true" value={petName} onChange={(e)=>setPetName(e.target.value)} ></input>		
					</div>

					<div>
						<label className="control-label" >Nearest Address Last Seene</label>
						<input type="text" id="dashboardpet-pet_name" className="form-control" name="lost_place" placeholder="e.g. V8N 4M9" aria-required="true" value={lostPlace} onChange={(e)=>setLostPlace(e.target.value)}></input>		
					</div>				

					<div>
						<label className="control-label" >SPECIES</label>
						<select id="cropperform-species" className="form-control" name="species" aria-required="true"  onChange={(e)=>setSpecies(e.target.value)}>
						{speciesList.map(species => 
							(
								<option value={species} selected = {species==post.species?true:false} >{species}</option>
							)					
						)}
						</select>			
					</div>	

					<div>
						<label className="control-label" >SEX</label>
						<select id="cropperform-gender" className="form-control" name="gender" aria-required="true" onChange={(e)=>setGender(e.target.value)}>

						{genderList.map(gender => 
							(
								<option value={gender} selected = {gender==post.gender?true:false} >{gender}</option>
							)					
						)}
						</select>	
					</div>				
				</div>	
			
				<button className="submitButton" disabled = {user.username ==post.user.username?false:true}>
					<BsForward style={{marginRight: '0.5rem'}} size={30} />
					<span>Update Paw</span>
				</button>
			</form>	
		</div>
	);
 
}
