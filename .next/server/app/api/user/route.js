(()=>{var e={};e.id=423,e.ids=[423],e.modules={96330:e=>{"use strict";e.exports=require("@prisma/client")},5486:e=>{"use strict";e.exports=require("bcrypt")},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},21916:(e,r,t)=>{"use strict";t.r(r),t.d(r,{patchFetch:()=>y,routeModule:()=>l,serverHooks:()=>v,workAsyncStorage:()=>m,workUnitAsyncStorage:()=>x});var s={};t.r(s),t.d(s,{POST:()=>d});var a=t(42706),n=t(28203),i=t(45994),o=t(96330),u=t(5486),p=t.n(u);let c=new o.PrismaClient;async function d(e){try{let e=await p().hash("Admin@123",10),r=await c.user.create({data:{email:"super@trajectoryinnovations.com",password:e,name:"Admin",role:"admin"}});return new Response(JSON.stringify({message:"User created",user:r}),{status:201})}catch(e){return console.error("Error creating user:",e),new Response(JSON.stringify({message:"Internal Server Error",error:e}),{status:500})}finally{await c.$disconnect()}}let l=new a.AppRouteRouteModule({definition:{kind:n.RouteKind.APP_ROUTE,page:"/api/user/route",pathname:"/api/user",filename:"route",bundlePath:"app/api/user/route"},resolvedPagePath:"/Users/apple/MyCompany/Trajectory Innovations/app/api/user/route.ts",nextConfigOutput:"",userland:s}),{workAsyncStorage:m,workUnitAsyncStorage:x,serverHooks:v}=l;function y(){return(0,i.patchFetch)({workAsyncStorage:m,workUnitAsyncStorage:x})}},96487:()=>{},78335:()=>{},42706:(e,r,t)=>{"use strict";e.exports=t(44870)}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[994],()=>t(21916));module.exports=s})();