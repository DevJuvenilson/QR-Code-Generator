import prompt from "prompt";
import promptQRCode from "../../prompts/prompt-qrcode.js";
import handle from "./handle-qrcode.js";


async function createQRCode() {
    prompt.get(promptQRCode, handle)
}

export default createQRCode;