import{u as l,j as t}from"./index-b661e032.js";import{l as i,S as c}from"./OS-b288e52a.js";function b({isSidePanelOpen:o,toggleSidePanel:s}){const e=l(),n=()=>{e("/")},a=()=>{e("/contact")},r=()=>{e("/project")};return t.jsxs("div",{className:"relative w-full h-100 z-999 flex bg-black justify-between items-center",children:[t.jsx("div",{className:"relative m-4 flex",children:t.jsx("img",{src:i,className:"h-8 mt-1 sm:h-9 sm:mt-2",alt:"Logo"})}),t.jsxs("nav",{className:"top-0 right-0 flex",style:{fontFamily:"Titillium"},children:[t.jsxs("button",{className:"focus:outline-none bg-transparent font-bold text-white group btn btn-border-underline hidden md:block mr-2 relative",onClick:n,children:["Home",t.jsx("span",{className:"absolute left-0 right-0 bottom-0 h-1 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"})," "]}),t.jsxs("button",{className:"focus:outline-none bg-transparent font-bold text-white group btn btn-border-underline hidden md:block mr-2 relative",onClick:r,children:["Projects",t.jsx("span",{className:"absolute left-0 right-0 bottom-0 h-1 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"})," "]}),t.jsxs("button",{className:"focus:outline-none bg-transparent font-bold text-white group btn btn-border-underline hidden md:block mr-2 relative",onClick:a,children:["Contact",t.jsx("span",{className:"absolute left-0 right-0 bottom-0 h-1 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"})," "]}),t.jsx("div",{className:"md:hidden z-[801] mr-4",children:t.jsx(c,{size:30,color:"white",toggled:o,toggle:s})})]})]})}export{b as T};
