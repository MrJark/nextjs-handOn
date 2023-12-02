// endpoint porque es un route.ts

// El endpoint más simple
// export async function GET(req: Request){
//   return new Response('Hola Mundo')
// }

// ./app/api/chat/route.js
import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

const openai = new OpenAI({ // inicializo el cliente de opneAI
  apiKey: process.env.OPENAI_API_KEY,
});

export const runtime = 'edge';

export async function POST(req: Request) {
  const { messages } = await req.json();
  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    stream: true,
    messages,
  });
  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
