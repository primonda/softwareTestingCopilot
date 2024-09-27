const geminiApiKey = "AIzaSyDsqe80ehEpa9o2vzQReBs31KZ4a6Mxst4";
import { GoogleGenerativeAI } from "@google/generative-ai";
// Access your API key as an environment variable (see "Set up your API key" above)
// const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const genAI = new GoogleGenerativeAI(geminiApiKey);

export async function getTestScenarios(product_title, product_description, feature_title, feature_description) {
  // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
  try{
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
    const prompt = `'Product name: ${product_title}
                    Product Description: ${product_description}
                    Feature Name: ${feature_title}
                    Feature Description: ${feature_description}
                    give test scenarios for this feature.
                    test scenarios format:
                    [
                      {
                        scenario: "",
                        pre_requisite: "",
                        test_steps: [],
                        expected_output: "",
                      }
                    ]
                    please give the output in the above mentioned Json format only, without the extra text'`
                  
    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text();
    text = text.replaceAll('```', '');
    text = text.replace('json', '');
    text = text.replaceAll('\'', '\'\'');
    console.log(text);
    const parsedData = JSON.parse(text.trim());
    console.log(parsedData);
    return parsedData;
  } catch (error){
    console.error("Error generating test scenarios", error);
  }
}

export async function getTestScenarioCode(testScenario, language, framework) {
  // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
  try{
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
    const prompt = `scenario: ${testScenario}
                    give test automation code for above scenario.
                    programming language: ${language}
                    framework: ${framework}
                    code format:
                    {
                      code (please include code for all the test steps: ${testScenario.test_steps})
                    }
                    please give the output in the above mentioned Json format only, without the extra text'`
                  
    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text();
    text = text.replaceAll('```', '');
    text = text.replace('json', '');
    text = text.replaceAll('\'', '\'\'');
    console.log(text);
    const parsedData = JSON.parse(text.trim());
    console.log(parsedData);
    return parsedData;
  } catch (error){
    console.error("Error generating test scenario code", error);
  }
}