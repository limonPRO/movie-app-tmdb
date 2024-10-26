"use server"
import { signIn, signOut } from "@/auth";

//google login
export async function doSocialLogin(formData:any) {
    const action = formData.get('action');
   await signIn(action, { redirectTo: "/" });

}
//google logout
export async function doLogout() {
  await signOut({ redirectTo: "/" });
}