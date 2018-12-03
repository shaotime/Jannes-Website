const functions = require("firebase-functions");
const os = require("os");
const path = require("path");
const spawn = require("child-process-promise").spawn;
const cors = require("cors")({ origin: true });
const Busboy = require("busboy");
const fs = require("fs");

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

    console.log("first step");

    const storage = admin.storage();
    const bucket = admin.storage().bucket();
    console.log("bucket created");
    console.log("bucket: "+bucket.id);

    bucket.getFiles().then((result)=>{
      //console.log("then entered");
      //for (var i in result) {
    //    console.log("for loop entered");
    //    console.log(result[i].name);
    //    files.name[i] = result[i].name;
    //    console.log(files);
  //    }
  //    console.log("for loop exited");
      console.log(result);
      res.send(result);
    });


  //  console.log('Files:');
    //files.forEach(file => {
    //console.log(file.name);
  //});

  });

});

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
