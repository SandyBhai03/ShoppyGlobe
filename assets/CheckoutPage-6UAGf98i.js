import{i as d,e as i,f as x,r as m,j as e,l as h,m as u}from"./index-f29ZURu-.js";const p=()=>{const t=d(s=>s.cart.items),r=i(),c=x(),l=m.useMemo(()=>t.reduce((s,a)=>s+a.price*a.quantity,0),[t]),n=s=>{r(h(s))},o=()=>{r(u()),c("/order-success")};return e.jsxs("div",{className:"max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg",children:[e.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"Checkout"}),t.length===0?e.jsx("p",{children:"Your cart is empty."}):e.jsxs(e.Fragment,{children:[e.jsx("ul",{children:t.map(s=>e.jsxs("li",{className:"flex justify-between items-center border-b py-3",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium",children:s.name}),e.jsxs("p",{className:"text-sm text-gray-600",children:["$",s.price," x ",s.quantity]})]}),e.jsx("button",{onClick:()=>n(s.id),className:"text-red-500 hover:underline",children:"Remove"})]},s.id))}),e.jsx("div",{className:" p-4 border-t",children:e.jsxs("h3",{className:"text-lg font-semibold",children:["Total: $",l.toFixed(2)]})}),e.jsx("div",{className:"mt-6",children:e.jsx("button",{onClick:o,className:"w-full bg-orange-400 text-white py-2 rounded-md cursor-pointer hover:bg-orange-500 duration-200",children:"Place Order"})})]})]})};export{p as default};
