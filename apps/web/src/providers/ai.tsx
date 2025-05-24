import {ReactNode} from "react";
import { createAI } from 'ai/rsc';

async function submitUserMessage(input: string) {
  // כאן היית שולחת את ההודעה למודל AI או ל-API
  console.log("User submitted:", input);

  // כרגע היא רק מחזירה הודעת הדגמה
  return `Echo: ${input}`;
}

export const AIContext = createAI<any[], ReactNode[]>({
  initialUIState: [],
  initialAIState: [],
  actions: { submitUserMessage },
});
