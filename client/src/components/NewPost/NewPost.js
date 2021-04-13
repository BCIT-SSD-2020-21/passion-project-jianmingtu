import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core'
import Post  from './Post'
import './NewPost.css'
import { BsFillPersonFill } from 'react-icons/bs';

import {
  Card,
  Tabs,
  Tab,
  CardContent,
  CardHeader,
  Typography
} from "@material-ui/core";

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

export default function NewPost({ submit, close }) {
  const classes = useStyles();
  const [tabValue, setTabValue] = useState(0);
  const [profileImg, setProfileImag] = useState('images/pet_dog_brown_missing.png')
  

  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        setProfileImag(reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };

  const handleSubmit = e => {
	  
  }

	return (
		<div className="root">
			<form  onSubmit={handleSubmit}>		
				<div className="imageContainer">
					<div className="titlebar">
						<img src="images/nails_left.svg" class="pull-left" />
						<h3 className="heading">Missing</h3>
						<img src="images/nails_right.svg" class="pull-left" />
					</div>			
					<div className="poster-photo-placeholder fido-light-blue-bg">
						<div className="img-holder">
							<img src={profileImg} alt="" id="img" className="img" />
						</div>
						<input type="file" accept="image/*" name="image-upload" id="input" onChange={imageHandler} />
						<div className="label">
							<label className="image-upload" htmlFor="input">
								<BsFillPersonFill size={30} />
								<span>Add Photo</span>
							</label>
						</div>
					</div>
				</div>

				<div className="lostFind">
					<span>Lost</span>
					<label className="switch">
						<input type="checkbox" checked />
						<span className="slider round"></span>
					</label>
					<span>Found</span>			
				</div>

				<div className="InfoContainer">
					<div>
						<label className="control-label" for="dashboardpet-pet_name">Pet Name</label>
						<input type="text" id="dashboardpet-pet_name" className="form-control" name="pet_name" placeholder="e.g. Fido" aria-required="true"></input>		
					</div>

					<div>
						<label className="control-label" for="dashboardpet-pet_name">Pet Name</label>
						<input type="text" id="dashboardpet-pet_name" className="form-control" name="pet_name" placeholder="e.g. Fido" aria-required="true"></input>		
					</div>				


					<div>
						<label className="control-label" for="cropperform-species">SPECIES</label>
						<select id="cropperform-species" className="form-control" name="species" aria-required="true">
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
					</div>

					<div>
						<label className="control-label" for="cropperform-gender">SEX</label>
						<select id="cropperform-gender" className="form-control" name="CropperForm[gender]" aria-required="true">
						<option value="">Choose Sex...</option>
						<option value="Male">Male</option>
						<option value="Female">Female</option>
						<option value="Unknown">Unknown</option>
						</select>		
					</div>				
				</div>	
			
				<button className="submitButton">
					<BsFillPersonFill size={30} />
					<span>Add Photo</span>
				</button>
			</form>	
		</div>
	);
 
}
