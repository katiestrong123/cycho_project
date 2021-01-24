import App from '../App';
import {Component} from 'react';

export class ImageUploader extends Component {
  state={
    profileImg: './static/cycon.png'
  }
    imageHandler = (e) => {
      const reader = new FileReader();
      reader.onload = () => {
          if(reader.readyState === 2) {
              this.setState({profileImg: reader.result})
          }
      }
      reader.readAsDataURL(e.target.files[0])
  } 
  render() {
    const {profileImg} = this.state
    return (
      <div className="page">
        <div className="img-container">
          <h1 className="heading">Let's see the issue</h1>
          <div className="img-holder">
            <img src={profileImg} alt="placeholder image" id="img" className="img"/>
            <input type="file" name="image-upload" id="input" accept="image/*" onChange={this.imageHandler}/>
            <div className="label">
                <label htmlFor="input" className="image-upload">
                    <i className="upload-icon" src='./static/uplaod.png'></i>
                    Choose your photo
                </label>

            </div>
        
          </div>
        </div>
      </div>
    )}
}


export default ImageUploader;