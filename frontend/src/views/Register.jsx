function Register() {
    return ( 
        <div className="flex justify-center py-8 h-fit">
            <div className="rounded-xl w-fit h-fit bg-white shadow-md flex-col flex gap-6 px-8 py-14 tracking-wide items-center border-2 border-gray-300">
                <h1 className="font-medium text-2xl">Sign up</h1>
                <form className="flex flex-col gap-2">
                    <label htmlFor="username">Username:</label>
                    <input className="border-[1px] mb-6 border-gray-300 outline-none px-2 py-3 rounded-md w-[25rem] shadow-secondary1 focus:shadow-lg focus:border-secondary1" autoComplete="off" placeholder="Enter email address" type="text" id="username" name="username" required/>

                    <label htmlFor="password">Password:</label>
                    <input className="border-[1px] mb-6 border-gray-300 outline-none px-2 py-3 rounded-md w-[25rem] shadow-secondary1 focus:shadow-lg focus:border-secondary1" autoComplete="off" placeholder="Enter password" type="password" id="password" name="password" required/>
                    
                    <label htmlFor="cfmpassword">Confirm Password:</label>
                    <input className="border-[1px] mb-6 border-gray-300 outline-none px-2 py-3 rounded-md w-[25rem] shadow-secondary1 focus:shadow-lg focus:border-secondary1" autoComplete="off" placeholder="Enter confirm password" type="password" id="cfmpassword" name="cfmpassword" required/>
                    
                    <button className="active:scale-95 shadow-secondary1 shadow-lg bg-secondary1 px-2 py-2 text-white font-medium rounded-full" type="submit">Sign up</button>
                </form>
                <span className="text-left w-full text-sm text-text1">Already have an account?<a href="/auth/login" className="ml-2 text-secondary1 font-medium underline">Login</a></span>
            </div>
        </div>
     );
}

export default Register;