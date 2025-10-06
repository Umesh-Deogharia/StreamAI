import OpenAI from "openai";
import { OPENAI_API_KEYS } from "./constant";

const openai = new OpenAI({
    apiKey: OPENAI_API_KEYS,
    dangerouslyAllowBrowser: true
})

export default openai