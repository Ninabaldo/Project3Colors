import axios from "axios"
import randomcolor from 'randomcolor';

class ColorApi {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://www.thecolorapi.com' //poner aquí el sheme/...??
    });
  }

  getColor = (color) => this.api.get(`/scheme/?hex=${color}&mode=analogic&count=1`);
  getGradientScheme =(color) => this.api.get(`/scheme/?hex=${color}&mode=analogic&count=3`);
  getHexScheme =(hex)=> this.api.get(`/scheme/?hex=${hex.value}`);

}







export default  ColorApi;