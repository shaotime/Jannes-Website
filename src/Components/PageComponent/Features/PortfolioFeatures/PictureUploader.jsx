import React, { Component } from 'react';
import ImageUploader from 'react-images-upload';
import axios from "axios";
class PictureUploader extends Component {

    constructor(props) {
        super(props);
         this.state = { pictures: [] };
         this.onDrop = this.onDrop.bind(this);
         this.uploadToServer = this.uploadToServer.bind(this);
         this.kevin = this.kevin.bind(this);
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

    kevin(){
      axios.get("https://us-central1-jannesdb-d93d2.cloudfunctions.net/getFile").then((res)=>{
        console.log("RESULTS!");
        console.log(res.data[0]);
        for (var i in res.data[0]) {
          console.log("names: " + res.data[0][i].name);
          //files.name[i] = result[i].name;
          
          }
      })
      .catch((error)=>{
        console.log("error:" + error);
      });
    }

    render() {
      const { pictures } = this.state;
        return (
          <React.Fragment>
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
            <button id="upload" style={{display:"none"}} onClick={this.uploadToServer}> Upload </button>
            <button id="upload" onClick={this.kevin}> Kevin </button>
            </React.Fragment>

        );
    }
}

export default PictureUploader;
