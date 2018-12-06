const functions = require("firebase-functions");
const os = require("os");
const path = require("path");
const spawn = require("child-process-promise").spawn;
const cors = require("cors")({ origin: true });
const Busboy = require("busboy");
const fs = require("fs");
const makeDir = require("make-dir");

var admin = require("firebase-admin");

var serviceAccount = require("./jannesdb-d93d2-firebase-adminsdk-wwpp5-c2eab1188a.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://jannesdb-d93d2.firebaseio.com",
  storageBucket: "jannesdb-d93d2.appspot.com"
});

const gcs  = require("@google-cloud/storage");
gcs.projectId = "jannesdb-d93d2";
gcs.keyFilename = "jannesdb-d93d2-firebase-adminsdk-wwpp5-c2eab1188a.json";﻿

// const {Storage} = require('@google-cloud/storage');
// const storage = new Storage();
// const bucketName = 'jannes-bucket';

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.henloWorld = functions.https.onRequest((req,res)=>{
  res.status(200).json({
    message: 'It workkk'
  });
});

exports.getFile = functions.https.onRequest((req, res) => {
  console.log(".getFile started");
  cors(req, res, () => {
    if (req.method !== "GET") {
      return res.status(500).json({
        message: "Not allowed"
      });
    }

    const storage = admin.storage();
    const bucket = admin.storage().bucket();
    const file = bucket.file("pikachu.jpg");
  //  const filepath = path.join(folderpath, file.name);
    var arrayURL = [];
    bucket.getFiles().then((result)=>{
        const dataArray = result[0];
        console.log(dataArray);

        var itemsProcessed = 0;

        dataArray.forEach((item, index, array)=>{
          getFBMetadata(item).then((rezult)=>{
            console.log("url/name to be pushed: "+rezult);
            arrayURL.push(rezult);
            console.log("array: "+arrayURL);
            itemsProcessed++;
            if(itemsProcessed === array.length) {
              res.send(arrayURL);
            }
          });
        });

      /*for (var i in dataArray){
        console.log("iteration "+i);
        console.log("result number "+i+" "+JSON.stringify(dataArray[i]));

        getFBMetadata(dataArray[i]).then((rezult)=>{
          console.log("url to be pushed: "+rezult);
          arrayURL.push(rezult);
          console.log("array: "+arrayURL);
        });

      //  console.log(JSON.stringify(result[0][i].getMetadata()));
      }*/
      //res.send(dataArray[0].metadata.firebaseStorageDownloadTokens); //u haven't fetched the metadata yet!! this is undefined
    });

  /*  file.getMetadata().then((result)=>{
        const data = result[0];
        console.log("RESULT METADATA: "+result);
        console.log("RESULT DATA: "+JSON.stringify(data));
        console.log("sending over this shit:" + data.metadata.firebaseStorageDownloadTokens);
        res.send(data.metadata.firebaseStorageDownloadTokens);
      });
    }); */

  //  file.download().then(function(data) {
    //  const contents = data[0];
    //  console.log("contents of the data[0]:" + contents);
  //    console.log("contents of the DATA only:" + data);
//      res.send(data);
//    });


  });

});

function getFBMetadata(file){

  return file.getMetadata().then((result)=>{
    const data = result[0];
    url = data.metadata.firebaseStorageDownloadTokens;
    name = encodeURI(data.name);
    finalform = {url, name};
    console.log("RESULT DATA: "+JSON.stringify(data));
    console.log("URL sending over this shit:" + url + " and " + name);
    return finalform;
  });
}

exports.uploadFile = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    if (req.method !== "POST") {
      return res.status(500).json({
        message: "Not allowed"
      });
    }
    const busboy = new Busboy({ headers: req.headers });
    let uploadData = null;

    busboy.on("file", (fieldname, file, filename, encoding, mimetype) => {
      const filepath = path.join(os.tmpdir(), filename);
      uploadData = { file: filepath, type: mimetype };
      file.pipe(fs.createWriteStream(filepath));
    });

    busboy.on("finish", () => {
      const bucket = admin.storage().bucket("jannesdb-d93d2.appspot.com");

      bucket
        .upload(uploadData.file, {
          uploadType: "media",
          metadata: {
            metadata: {
              contentType: uploadData.type
            }
          }
        })
        .then(() => {
          res.status(200).json({
            message: "It worked!"
          });
        })
        .catch(err => {
          res.status(500).json({
            error: err
          });
        });
    });
    busboy.end(req.rawBody);
  });
});
