import axios from "axios";
import { baseUrl } from "../../config/server";

export const sendOTP = async ({ email, username, accountNumber }) => {
    let Url = "";
    if (!accountNumber) {
        Url = `${baseUrl}/send-otp?email=${email}&username=${username}`
    }
    else {
        Url = `${baseUrl}/send-otp?username=${username}&accountNumber=${accountNumber}`
    }
    try {
        const response = await axios.get(Url);
        if (response.data.sendEmail === true) {
            if (!accountNumber) {
                localStorage.setItem("email", email);
                return response.data;
            } else {
                localStorage.setItem("accountNumber", accountNumber);
                return response.data;
            }
        }
    } catch (err) {
        throw err;
    }
};
