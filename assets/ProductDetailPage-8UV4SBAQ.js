import{d as g,e as h,f as u,r,j as t,h as p,y as b}from"./index-f29ZURu-.js";const j=()=>{const{id:o}=g(),c=h(),a=u(),[s,d]=r.useState(null),[i,l]=r.useState(!0),[n,x]=r.useState(null),m=e=>{if(!e||!e.id){console.error("Invalid product data:",e);return}c(p(e)),b.success(`${e.title} added to cart!`)};return r.useEffect(()=>{fetch(`https://dummyjson.com/products/${o}`).then(e=>e.json()).then(e=>{if(console.log("API Response:",e),e.message)throw new Error(e.message);d(e),l(!1)}).catch(e=>{console.error("Fetch Error:",e),x(e.message),l(!1)})},[o]),i?t.jsx("p",{className:"text-center font-semibold text-xl py-4",children:"Loading..."}):n?t.jsxs("div",{className:"text-center text-red-500 mt-7",children:[t.jsx("p",{className:"font-semibold text-xl",children:n}),t.jsx("button",{onClick:()=>a("/"),className:"bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 cursor-pointer px-4 rounded mt-4",children:"Go to Home Page"})]}):t.jsxs("div",{className:"max-w-4xl relative mx-auto p-4 px-7 bg-white hover:scale-102 duration-200 border-slate-100 border-[2px] bg-gradient-to-r from-white via-slate-100 to-slate-100 rounded shadow-md shadow-gray-500 sm:mt-25 lg:mt-35",children:[t.jsx("button",{onClick:()=>a(-1),className:"bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 cursor-pointer px-4 rounded mb-4",children:"← Back"}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[t.jsx("img",{src:s.thumbnail,alt:s.title,className:"w-full h-64 object-cover rounded"}),t.jsxs("div",{children:[t.jsx("h2",{className:"text-2xl font-bold mb-2",children:s.title}),t.jsxs("p",{className:"text-2xl text-orange-400 font-bold",children:["$",s.price]}),t.jsx("p",{className:"text-gray-700 my-4",children:s.description}),t.jsxs("p",{className:"font-semibold text-2xl text-gray-400 absolute top-6 right-10",children:[s.rating," ★"]}),t.jsx("button",{onClick:()=>m(s),className:"bg-orange-400 text-white cursor-pointer px-6 py-2 rounded hover:bg-orange-500 w-full duration-200",children:"Add to Cart"})]})]})]})};export{j as default};
