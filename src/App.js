
import axios from 'axios';
import { ToastContainer, Zoom } from "react-toastify";
import './App.scss';
import { toastifyAlertError } from './components/alert/tostifyAlert';
import Router from './router/Router';

function App() {
  
axios.defaults.headers["Accept"] = "application/json";
axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

axios.interceptors.request.use((config) => {
  if(navigator.onLine){
    config.baseURL = " https://idbdev.com/motion2/public/api/";
    
    config.withCredentials = true;
  
    // const access_token = getToken();
 
    // config.headers.Authorization = access_token ? `Bearer ${access_token}` : "";
    return config;
  }else{
    toastifyAlertError("No internet connection","top-center")
  }
});


  return (
    <>
<Router/>
<ToastContainer transition={Zoom}/>
    </>
  );
}

export default App;
