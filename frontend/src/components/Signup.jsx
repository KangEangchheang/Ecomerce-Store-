import backgroundImage from '/src/assets/bg_button.png';
import google from '../assets/icons/google.png';

const SignUp = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '520px',
    height: '650px',
    boxShadow: 'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="flex items-center justify-center bg-opacity-100 py-4 min-h-screen">
      <div className="p-12" style={backgroundStyle}>
        <h1 className="text-4xl font-bold flex justify-center py-2">iFour</h1>
        <h2 className="text-xl font-bold mb-6 flex justify-center">Sign up</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <p className="text-gray-500">Enter your details below!</p>
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="w-full p-2 border border-gray-300 rounded outline-none focus:border-indigo-500"
          />

          <input
            type="password"
            placeholder="Enter a Password"
            className="w-full p-2 border border-gray-300 rounded outline-none focus:border-indigo-500"
          />

          <input
            type="password"
            placeholder="Re-enter to Confirm Password"
            className="w-full p-2 border border-gray-300 rounded outline-none focus:border-indigo-500"
          />

          <button
            type="submit"
            className="w-full bg-secondary1 p-2 rounded text-white"
          >
            Sign up
          </button>
        </form>

        <div className="text-center p-8">
          <p>Or continue with</p>
        </div>

        <button className="p-2 w-full bg-secondary1 text-white rounded flex items-center justify-center">
          <img src={google} className="w-6 mr-2" alt="Google Logo" />
          <span>Sign in with Google</span>
        </button>

        <p className="text-gray-500 text-center text-xs py-4">
          Already have an account? <span></span>
          <a href="#" className="text-secondary1 underline font-semibold">
            Login
          </a>
        </p>
        <p className="text-gray-500 text-center text-xs">
          By signing in or signing up, you agree with our <span></span>
          <a href="#" className="text-secondary1 underline font-semibold">
             <span>Privacy Policy</span> 
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
