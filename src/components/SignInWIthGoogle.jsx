import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../firebase.config"; 

import { setDoc, doc } from "firebase/firestore";

function SignInwithGoogle() {
  function googleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(async (result) => {
      console.log(result);
      const user = result.user;
      if (result.user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: user.displayName,
          photo: user.photoURL,
          lastName: "",
        });
        alert("User logged in Successfully")
        window.location.href = "/profile";
      }
    });
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-lg text-gray-600 my-4">-- Or continue with --</p>
      <div
        className="flex justify-center items-center p-2 bg-white border border-gray-300 rounded-md shadow-md cursor-pointer transition-all hover:scale-105"
        onClick={googleLogin}
      >
        <img 
          src="https://developers.google.com/static/identity/images/branding_guideline_sample_lt_sq_lg.svg" 
          alt="Google Sign-In" 
          className="w-1/2 md:w-1/3 object-contain"
        />
      </div>
    </div>
  );
}

export default SignInwithGoogle;
