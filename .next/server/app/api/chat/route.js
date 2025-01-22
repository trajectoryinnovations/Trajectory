(()=>{var e={};e.id=276,e.ids=[276],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},28627:(e,t,n)=>{"use strict";n.r(t),n.d(t,{patchFetch:()=>Y,routeModule:()=>G,serverHooks:()=>B,workAsyncStorage:()=>K,workUnitAsyncStorage:()=>U});var s,o,i,r,a,c,l,d={};n.r(d),n.d(d,{POST:()=>F});var u=n(42706),h=n(28203),p=n(45994);(function(e){e.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",e.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",e.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",e.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",e.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(s||(s={})),function(e){e.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",e.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",e.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",e.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",e.BLOCK_NONE="BLOCK_NONE"}(o||(o={})),function(e){e.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",e.NEGLIGIBLE="NEGLIGIBLE",e.LOW="LOW",e.MEDIUM="MEDIUM",e.HIGH="HIGH"}(i||(i={})),function(e){e.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",e.SAFETY="SAFETY",e.OTHER="OTHER"}(r||(r={})),function(e){e.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",e.STOP="STOP",e.MAX_TOKENS="MAX_TOKENS",e.SAFETY="SAFETY",e.RECITATION="RECITATION",e.OTHER="OTHER"}(a||(a={})),function(e){e.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",e.RETRIEVAL_QUERY="RETRIEVAL_QUERY",e.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",e.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",e.CLASSIFICATION="CLASSIFICATION",e.CLUSTERING="CLUSTERING"}(c||(c={}));class f extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class g extends f{constructor(e,t){super(e),this.response=t}}!function(e){e.GENERATE_CONTENT="generateContent",e.STREAM_GENERATE_CONTENT="streamGenerateContent",e.COUNT_TOKENS="countTokens",e.EMBED_CONTENT="embedContent",e.BATCH_EMBED_CONTENTS="batchEmbedContents"}(l||(l={}));class m{constructor(e,t,n,s){this.model=e,this.task=t,this.apiKey=n,this.stream=s}toString(){let e=`https://generativelanguage.googleapis.com/v1/${this.model}:${this.task}`;return this.stream&&(e+="?alt=sse"),e}}async function E(e,t,n){let s;try{if(!(s=await fetch(e.toString(),Object.assign(Object.assign({},function(e){let t={};if((null==e?void 0:e.timeout)>=0){let n=new AbortController,s=n.signal;setTimeout(()=>n.abort(),e.timeout),t.signal=s}return t}(n)),{method:"POST",headers:{"Content-Type":"application/json","x-goog-api-client":"genai-js/0.2.1","x-goog-api-key":e.apiKey},body:t}))).ok){let e="";try{let t=await s.json();e=t.error.message,t.error.details&&(e+=` ${JSON.stringify(t.error.details)}`)}catch(e){}throw Error(`[${s.status} ${s.statusText}] ${e}`)}}catch(n){let t=new f(`Error fetching from ${e.toString()}: ${n.message}`);throw t.stack=n.stack,t}return s}function y(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){var t,n,s,o;if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),T(e.candidates[0]))throw new g(`${I(e)}`,e);return(null===(o=null===(s=null===(n=null===(t=e.candidates)||void 0===t?void 0:t[0].content)||void 0===n?void 0:n.parts)||void 0===s?void 0:s[0])||void 0===o?void 0:o.text)?e.candidates[0].content.parts[0].text:""}if(e.promptFeedback)throw new g(`Text not available. ${I(e)}`,e);return""},e}let v=[a.RECITATION,a.SAFETY];function T(e){return!!e.finishReason&&v.includes(e.finishReason)}function I(e){var t,n,s;let o="";if((!e.candidates||0===e.candidates.length)&&e.promptFeedback)o+="Response was blocked",(null===(t=e.promptFeedback)||void 0===t?void 0:t.blockReason)&&(o+=` due to ${e.promptFeedback.blockReason}`),(null===(n=e.promptFeedback)||void 0===n?void 0:n.blockReasonMessage)&&(o+=`: ${e.promptFeedback.blockReasonMessage}`);else if(null===(s=e.candidates)||void 0===s?void 0:s[0]){let t=e.candidates[0];T(t)&&(o+=`Candidate was blocked due to ${t.finishReason}`,t.finishMessage&&(o+=`: ${t.finishMessage}`))}return o}function O(e){return this instanceof O?(this.v=e,this):new O(e)}"function"==typeof SuppressedError&&SuppressedError;let A=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;async function _(e){let t=[],n=e.getReader();for(;;){let{done:e,value:s}=await n.read();if(e)return y(function(e){let t=e[e.length-1],n={promptFeedback:null==t?void 0:t.promptFeedback};for(let t of e)if(t.candidates)for(let e of t.candidates){let t=e.index;if(n.candidates||(n.candidates=[]),n.candidates[t]||(n.candidates[t]={index:e.index}),n.candidates[t].citationMetadata=e.citationMetadata,n.candidates[t].finishReason=e.finishReason,n.candidates[t].finishMessage=e.finishMessage,n.candidates[t].safetyRatings=e.safetyRatings,e.content&&e.content.parts)for(let s of(n.candidates[t].content||(n.candidates[t].content={role:e.content.role||"user",parts:[{text:""}]}),e.content.parts))s.text&&(n.candidates[t].content.parts[0].text+=s.text)}return n}(t));t.push(s)}}async function S(e,t,n,s){let o=new m(t,l.STREAM_GENERATE_CONTENT,e,!0);return function(e){let[t,n]=(function(e){let t=e.getReader();return new ReadableStream({start(e){let n="";return function s(){return t.read().then(({value:t,done:o})=>{let i;if(o){if(n.trim()){e.error(new f("Failed to parse stream"));return}e.close();return}let r=(n+=t).match(A);for(;r;){try{i=JSON.parse(r[1])}catch(t){e.error(new f(`Error parsing JSON response: "${r[1]}"`));return}e.enqueue(i),r=(n=n.substring(r[0].length)).match(A)}return s()})}()}})})(e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0}))).tee();return{stream:function(e){return function(e,t,n){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var s,o=n.apply(e,t||[]),i=[];return s={},r("next"),r("throw"),r("return"),s[Symbol.asyncIterator]=function(){return this},s;function r(e){o[e]&&(s[e]=function(t){return new Promise(function(n,s){i.push([e,t,n,s])>1||a(e,t)})})}function a(e,t){try{var n;(n=o[e](t)).value instanceof O?Promise.resolve(n.value.v).then(c,l):d(i[0][2],n)}catch(e){d(i[0][3],e)}}function c(e){a("next",e)}function l(e){a("throw",e)}function d(e,t){e(t),i.shift(),i.length&&a(i[0][0],i[0][1])}}(this,arguments,function*(){let t=e.getReader();for(;;){let{value:e,done:n}=yield O(t.read());if(n)break;yield yield O(y(e))}})}(t),response:_(n)}}(await E(o,JSON.stringify(n),s))}async function C(e,t,n,s){let o=new m(t,l.GENERATE_CONTENT,e,!1),i=await E(o,JSON.stringify(n),s);return{response:y(await i.json())}}function w(e,t){let n=[];if("string"==typeof e)n=[{text:e}];else for(let t of e)"string"==typeof t?n.push({text:t}):n.push(t);return{role:t,parts:n}}function N(e){return e.contents?e:{contents:[w(e,"user")]}}let R="SILENT_ERROR";class b{constructor(e,t,n,s){this.model=t,this.params=n,this.requestOptions=s,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,(null==n?void 0:n.history)&&(this._history=n.history.map(e=>{if(!e.role)throw Error("Missing role for history item: "+JSON.stringify(e));return w(e.parts,e.role)}))}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e){var t,n;let s;await this._sendPromise;let o=w(e,"user"),i={safetySettings:null===(t=this.params)||void 0===t?void 0:t.safetySettings,generationConfig:null===(n=this.params)||void 0===n?void 0:n.generationConfig,contents:[...this._history,o]};return this._sendPromise=this._sendPromise.then(()=>C(this._apiKey,this.model,i,this.requestOptions)).then(e=>{var t;if(e.response.candidates&&e.response.candidates.length>0){this._history.push(o);let n=Object.assign({parts:[],role:"model"},null===(t=e.response.candidates)||void 0===t?void 0:t[0].content);this._history.push(n)}else{let t=I(e.response);t&&console.warn(`sendMessage() was unsuccessful. ${t}. Inspect response object for details.`)}s=e}),await this._sendPromise,s}async sendMessageStream(e){var t,n;await this._sendPromise;let s=w(e,"user"),o={safetySettings:null===(t=this.params)||void 0===t?void 0:t.safetySettings,generationConfig:null===(n=this.params)||void 0===n?void 0:n.generationConfig,contents:[...this._history,s]},i=S(this._apiKey,this.model,o,this.requestOptions);return this._sendPromise=this._sendPromise.then(()=>i).catch(e=>{throw Error(R)}).then(e=>e.response).then(e=>{if(e.candidates&&e.candidates.length>0){this._history.push(s);let t=Object.assign({},e.candidates[0].content);t.role||(t.role="model"),this._history.push(t)}else{let t=I(e);t&&console.warn(`sendMessageStream() was unsuccessful. ${t}. Inspect response object for details.`)}}).catch(e=>{e.message!==R&&console.error(e)}),i}}async function M(e,t,n,s){let o=new m(t,l.COUNT_TOKENS,e,!1);return(await E(o,JSON.stringify(Object.assign(Object.assign({},n),{model:t})),s)).json()}async function x(e,t,n,s){let o=new m(t,l.EMBED_CONTENT,e,!1);return(await E(o,JSON.stringify(n),s)).json()}async function k(e,t,n,s){let o=new m(t,l.BATCH_EMBED_CONTENTS,e,!1),i=n.requests.map(e=>Object.assign(Object.assign({},e),{model:t}));return(await E(o,JSON.stringify({requests:i}),s)).json()}class H{constructor(e,t,n){this.apiKey=e,t.model.includes("/")?this.model=t.model:this.model=`models/${t.model}`,this.generationConfig=t.generationConfig||{},this.safetySettings=t.safetySettings||[],this.requestOptions=n||{}}async generateContent(e){let t=N(e);return C(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings},t),this.requestOptions)}async generateContentStream(e){let t=N(e);return S(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings},t),this.requestOptions)}startChat(e){return new b(this.apiKey,this.model,e,this.requestOptions)}async countTokens(e){let t=N(e);return M(this.apiKey,this.model,t)}async embedContent(e){let t="string"==typeof e||Array.isArray(e)?{content:w(e,"user")}:e;return x(this.apiKey,this.model,t)}async batchEmbedContents(e){return k(this.apiKey,this.model,e,this.requestOptions)}}class j{constructor(e){this.apiKey=e}getGenerativeModel(e,t){if(!e.model)throw new f("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new H(this.apiKey,e,t)}}var D=n(39187);let L=`Trajectory Innovations - Company Profile
About Trajectory Innovations
Trajectory Innovations is a forward-thinking technology company focused on creating transformative software solutions. Our goal is to deliver groundbreaking technologies that help businesses and individuals adapt, grow, and succeed in the ever-evolving digital world.

We specialize in developing high-quality software products and services including mobile apps, web solutions, AI tools, and desktop applications. By harnessing the power of the latest technologies, we aim to provide scalable and effective solutions that cater to our clients’ unique needs.

Our Founders
Amrutha
Amrutha is one of the visionary co-founders of Trajectory Innovations. With a deep background in technology and business, he has led the company's growth through a combination of strategic insight and technical expertise.

Divya
Divya is the other co-founder of Trajectory Innovations. A passionate innovator, she has played a crucial role in defining the company’s values and ensuring that the solutions we deliver are user-centered and impactful.

Samlet
Samlet is also a co-founder of Trajectory Innovations. He brings a wealth of experience in software development and strategic leadership. With his strong technical skills and forward-thinking approach, Samlet has been instrumental in shaping the direction of the company.

Together, Amruthan, Divya, and Samlet provide the leadership and vision that continues to drive the company forward.

Our Tech Stack
At Trajectory Innovations, we use the most up-to-date and reliable technologies to build powerful, scalable solutions for our clients. Our technology stack includes:

Mobile App Development:

React Native
Flutter
Swift (iOS)
Kotlin (Android)
Web Development:

React
Next.js
Node.js
HTML/CSS
Artificial Intelligence (AI) Tools & Solutions:

Python
TensorFlow
Google AI
Desktop Application Development:

Electron
C#
Cloud Services:

AWS
Azure
Google Cloud
Our Services
Trajectory Innovations offers a comprehensive range of services to address the diverse needs of modern businesses:

1. Mobile Application Development
We specialize in building intuitive and scalable mobile apps for both iOS and Android. Whether it’s a startup or an established enterprise, we ensure seamless user experiences and performance optimization.

2. Web Development
Our web development services encompass everything from building responsive websites to complex, feature-rich web applications. We work with the latest technologies to ensure secure, dynamic, and user-friendly experiences.

3. Artificial Intelligence Solutions
Our AI tools and automation solutions leverage cutting-edge technologies to enhance decision-making, optimize operations, and automate key processes. We help businesses integrate AI into their operations, boosting productivity and intelligence.

4. Desktop Application Development
We provide full-scale desktop application development, creating powerful applications that meet the needs of businesses across various industries. Our desktop solutions are efficient, secure, and easy to use.

5. Consulting and Strategy
We help businesses select the right technology stack, build tailored software solutions, and optimize their workflows to meet their goals. Our consultants guide organizations through the digital transformation process with strategic insights and execution.`,P=new j(`${process.env.GEMINI_API_KEY}`);async function F(e){try{let{messages:t}=await e.json(),n=t.filter(e=>"user"===e.type).pop();if(!n)return D.NextResponse.json({error:"No user message provided"},{status:400});let s=n.content,o=P.getGenerativeModel({model:"gemini-1.5-flash"}),i=await o.generateContent([`Using the information below, respond strictly based on the content provided. 
    
      If the query is related to the content, answer in detail based on the provided information.
    
      If the query is not related to the content, respond with "I can only help inside Trajectory Innovations."
    
      If the user asks about yourself (e.g., "Who are you?"), respond with "I'm TRAI, trained from Trajectory Innovations."
    
      For casual greetings like "Hi," "Hello," or "How are you?", respond normally in a friendly manner, such as "Hello! How can I assist you today?" or "I'm doing well, thank you for asking! How can I help?"
    
      If the user asks about someone other than the founders, respond with "Not a member of Trajectory Innovations."
    
      If the context is not found, simply say "I'm here to help you inside Trajectory Innovations."
    
      Do not generate content outside the context provided.
    
      Content: 
      ${L}
      
      User Query: ${s}
      
      Answer in detail, strictly based on the provided content.`]);if(!i?.response)return D.NextResponse.json({error:"Failed to generate response from AI model"},{status:500});return D.NextResponse.json({response:i.response.text()})}catch(e){return console.error("Error during chat request:",e),D.NextResponse.json({error:"Failed to process chat request"},{status:500})}}let G=new u.AppRouteRouteModule({definition:{kind:h.RouteKind.APP_ROUTE,page:"/api/chat/route",pathname:"/api/chat",filename:"route",bundlePath:"app/api/chat/route"},resolvedPagePath:"/Users/apple/MyCompany/Trajectory Innovations/app/api/chat/route.ts",nextConfigOutput:"",userland:d}),{workAsyncStorage:K,workUnitAsyncStorage:U,serverHooks:B}=G;function Y(){return(0,p.patchFetch)({workAsyncStorage:K,workUnitAsyncStorage:U})}},96487:()=>{},78335:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),s=t.X(0,[994,452],()=>n(28627));module.exports=s})();