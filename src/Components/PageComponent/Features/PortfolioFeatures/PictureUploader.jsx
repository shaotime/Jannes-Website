import React, { Component } from 'react';
import ImageUploader from 'react-images-upload';
import axios from "axios";
import PictureGallery from "./PictureGallery";

class PictureUploader extends Component {

    constructor(props) {
        super(props);
         this.state = {
           pictures: [],
           firebasePictures: []
         };
         this.onDrop = this.onDrop.bind(this);
         this.uploadToServer = this.uploadToServer.bind(this);
         this.getPicturesFromCloud = this.getPicturesFromCloud.bind(this);
         this.makeIntoLinks = this.makeIntoLinks.bind(this);
    }

    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture), //this is an array in the state with all the pics uploaded
        });
        document.getElementById('upload').style.display = "";
    }

    uploadToServer(){
      const fd = new FormData();
      for (var i in this.state.pictures) {
        fd.append('images', this.state.pictures[i], this.state.pictures[i].name);
        axios.post("https://us-central1-jannesdb-d93d2.cloudfunctions.net/uploadFile", fd)
        .then((res)=>{
          console.log(res);
        })
        .catch((error)=>{
          console.log("error:" + error);
        })
        .then(()=>{
          window.location.reload();
        });
      }
    }

    getPicturesFromCloud(){
      axios.get("https://us-central1-jannesdb-d93d2.cloudfunctions.net/getFile").then((res)=>{
        this.makeIntoLinks(res.data);
      })
      .catch((error)=>{
        console.log("error:" + error);
      });
    }

    makeIntoLinks(array){
      var tempfinalURLarray = [];
      for(const item of array){
        const finalURL = "https://firebasestorage.googleapis.com/v0/b/jannesdb-d93d2.appspot.com/o/"+ item.name +"?alt=media&token=" + item.url;
        console.log(finalURL);
        tempfinalURLarray.push({original: finalURL});
        console.log(tempfinalURLarray);
      }
      this.setState({firebasePictures: tempfinalURLarray});
    }

    componentWillMount(){
      this.getPicturesFromCloud();
    }

    render() {
      
        return (
          <React.Fragment>
            <PictureGallery firebasePictures={this.state.firebasePictures} />
            <ImageUploader
                withIcon={true}
                buttonText='Choose image'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
                singleImage={true}
                withPreview={true}
                buttonStyles={{}}
            />
            <button id="upload" className="btn btn-success" style={{display:"none"}} onClick={this.uploadToServer}> Upload </button>
            </React.Fragment>

        );
    }
}

export default PictureUploader;
