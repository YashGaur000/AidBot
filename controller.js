import express from 'express';
import { config } from "dotenv"
config()

import { Configuration, OpenAIApi } from "openai"

export const Controllers = {
    async Chat(req, res){ 
        const userQue = req.body.message;
        const openAi = new OpenAIApi(
            new Configuration({
              apiKey: process.env.API_KEY,
            })
          )
          const response = await openAi.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: `${userQue}` }],
          })
          const exactres = response.data.choices[0].message.content
        try{
            res.json({message1: exactres , input : userQue  });
            console.log("userQue" , userQue);
            // console.log(exactres);
        }catch(e){
            res.json({"Big error: ": e});
        }

    }
}