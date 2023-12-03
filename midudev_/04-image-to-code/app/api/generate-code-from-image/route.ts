// endpoint porque es un route.ts

// El endpoint más simple
// export async function GET(req: Request){
//   return new Response('Hola Mundo')
// }

// ./app/api/chat/route.js
import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { USER_PROMPT, SYSTEM_PROMPT } from '@/components/variables/variables';

// const USER_PROMPT = 'Generate code for a web page that looks exactly like this and meke it step by step'

const openai = new OpenAI({ // inicializo el cliente de opneAI
  apiKey: process.env.OPENAI_API_TOKEN,
});

export const runtime = 'edge'// esto es donde se va a ejecutar la api en vercel. Puede ser en el edge( servidores mas cerca del usuario y así que vaya más rápìdo ) o en el cloud ( este es más barato pero también es más lento)

export async function POST(req: Request) {
  // const { messages } = await req.json();

  const { url, img } = await req.json() // esta url sale del formulario que se ha creado/el usuario a mandado en el form
  // console.log(url)
  const imageUrl = img ?? url // la condicional para que sea la misma ruta pero dependiendo lo que le pase el usuario, coja o la url o la image
  
  const response = await openai.chat.completions.create({
    // model: 'gpt-4',
    model: 'gpt-4-vision-preview',
    max_tokens: 4096, // por default solo devuelve 40
    stream: true, // estoi es para que los datos los vaya recibiendo poco a poco con forme los tiene. Sino la UX sería mala porque tendría que esperar a que los tuviera todos para mandar la respuesta. Es una especie de lazy load pero con forme tiene la api los datos
    // messages,
    messages: [
      {
        role: 'system',
        content: SYSTEM_PROMPT // he aquí el problema porque es donde tienes que ser un buen prompt engineering para decirle EXACTAMENTE lo que queires que haga
      },
      {
        role: 'user',
        content: [
          {
            type: 'text',
            text: USER_PROMPT
          },
          {
            type: 'image_url',
            // image_url: url
            image_url: imageUrl
          }
        ]
      }
    ]
  });
  const stream = OpenAIStream(response); // por donde para la info
  return new StreamingTextResponse(stream);
}
