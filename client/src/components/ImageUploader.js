import App from '../App';
import {Component} from 'react';
import './css/ImageUploader.css';

export class ImageUploader extends Component {
  state={
    profileImg: './static/noImage.png',
    heading: "Upload a photo and we'll take a look.",
  }
    imageHandler = (e) => {
      const reader = new FileReader();
      const newHeading = "You got some issues, we'll send that to the Cychos."
      reader.onload = () => {
          if(reader.readyState === 2) {
              this.setState({profileImg: reader.result})
              this.setState({heading: newHeading})
          }
      }
      reader.readAsDataURL(e.target.files[0])
  } 

  render() {
    const {profileImg} = this.state
    const {heading} = this.state
    return (
        <>
        <div className="img-container">
          <h3 className="heading" onChange={this.headingHandler}>{heading}</h3>
          <div className="img-holder">
            <img src={profileImg} alt="placeholder image" id="img" className="img"/>
            <div>
            {/* HOW TO PRETTY THIS? Want to style the choose file button but not sure how */}
            <input type="file" name="image-upload" id="input" accept="image/*" onChange={this.imageHandler}/>
{/*           
            <div className="label">
            
             <label htmlFor="input" className="image-upload"> 
                    <i className="upload-icon" src='./static/uplaod.png'></i></label>
               
                </div> */}
          </div>
        </div>
      </div>
      </>
    )}
}


export default ImageUploader;