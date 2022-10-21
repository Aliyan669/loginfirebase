import app from "./firebaseconfig";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase ,ref, set ,onValue } from "firebase/database";
const auth = getAuth(app)
const database = getDatabase(app);

let signUpUser = (obj)=>{
    let {email,password, userName ,contact } = obj ;
        
 return new Promise ((resolve,reject)=>{

    createUserWithEmailAndPassword(auth, email, password)

    .then((userCredential)=>{
       // user successfully registered in authntication////
       const user = userCredential.user;
       const reference = ref(database,`users/${user.uid}`)
       set(reference , obj)

       .then(()=>{
        resolve("User Created Successfully and send to database")
       })

       .catch((error)=>{' '
        reject(error);
       })

   })

   .catch((err)=>{ 
    reject(err)
   });
 }) 
};
let loginUser = (obj)=>{
  let  {email ,password }= obj;

 return new Promise((resolve ,reject)=>{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      const refernce = ref(database,`users/${user.uid}`);

      onValue(refernce,(data)=>{
        // console.log (data.val());
       let status = data.exists()
       console.log(status)
       if(status){
        resolve(data.val())
       }
       else{
        reject('Data Not Found')
       }
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
      reject(errorMessage)
    });
 }) 
};
export { signUpUser , loginUser };