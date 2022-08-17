import axios from "axios";


export const sendSMS = async (number, message) => {

    try {
       
        await axios.get(`: https://bulksmsbd.net/api/smsapi?api_key=hWsGNL0kpY1mzrOFjeLj&type=text&number=${number}&senderid=8809612443880&message=${message}`)
        
    } catch (error) {
        console.log(error);
    }

}