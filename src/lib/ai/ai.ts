import { GROQ_API_KEY } from '$env/static/private';
import Groq from 'groq-sdk';

const groq = new Groq({ apiKey: GROQ_API_KEY });

export async function groqInference(texto: string,job_type: string) {
  let tags:[string] = [job_type];
    try{
        const chatCompletion = await groq.chat.completions.create({
          "messages": [
            {
              "role": "user",
              "content": "Quiero que me respondas SOLAMENTE con tags en ESPAÑOL sobre este comentario, 5 tags como máximo y sin texto extra, EN ESPAÑOL:"+texto,
            }
          ],
          "model": "llama3-8b-8192",
          "temperature": 1,
          "max_tokens": 512,
          "top_p": 1,
          "stream": true,
          "stop": null
        });
        for await (const chunk of chatCompletion) {
            const token = chunk.choices[0]?.delta?.content || '';
            if (token.includes('#')) {
              // If token contains '#', add a new element to tags
              tags.push('');
            } else {
              // Otherwise, append the token to the last element (assuming non-empty)
              if (tags.length > 0) {
                tags[tags.length - 1] += token;
              }
            }
          }
        console.log('los tags son;',tags);
        // return chatCompletion.data.choices[0].message?.content || "";
        }
        finally {
          return tags;
        }
}
