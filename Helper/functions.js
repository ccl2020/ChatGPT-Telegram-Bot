const { OpenAI } = require("openai"); 

const openai = new OpenAI({
  apiKey: process.env.GPT_API,
});

const getChat = async (msgText) => {
  try {
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: msgText }],
      model: 'gpt-3.5-turbo',
    });

    return chatCompletion.choices[0].message.content;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { openai, getChat };
