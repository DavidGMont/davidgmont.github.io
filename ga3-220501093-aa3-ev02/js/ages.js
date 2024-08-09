const getAgeByFormField=e=>parseInt(document.querySelector(`#age-${e}`).value),ages={underage:[],adult:[],senior:[]},classifyAge=e=>{switch(!0){case e>0&&e<17:ages.underage.push(e);break;case e>=18&&e<60:ages.adult.push(e);break;case e>=60:ages.senior.push(e);break;default:console.log("Invalid age: ",e)}},sanitizeInput=e=>{e.value=e.value.replace(/\+/g,"")};document.querySelectorAll('input[type="number"]').forEach((e=>{e.addEventListener("input",(()=>sanitizeInput(e)))}));const formState={"age-1":void 0,"age-2":void 0,"age-3":void 0,"age-4":void 0,"age-5":void 0,"age-6":void 0,"age-7":void 0,"age-8":void 0,"age-9":void 0,"age-10":void 0},toggleSubmitButton=()=>{document.querySelector('input[type="submit"]').disabled=!validateForm()},validateInput=e=>{const t=parseInt(e.value),a=!Number.isNaN(t)&&t>0&&t<=120;""!==e.value&&(e.setAttribute("aria-invalid",!a),formState[e.id]=a);const r=document.querySelector(`#${e.id}-invalid-helper`);r&&(r.style.display=a?"none":"block"),toggleSubmitButton()},validateForm=()=>Object.values(formState).every((e=>e)),getAges=()=>Array.from({length:10},((e,t)=>getAgeByFormField(t+1))),updateResults=e=>{e.forEach((e=>classifyAge(e))),document.querySelector("#underage").value=ages.underage.length.toString(),document.querySelector("#adult").value=ages.adult.length.toString(),document.querySelector("#senior").value=ages.senior.length.toString(),document.querySelector("#youngest").value=Math.min(...e).toString(),document.querySelector("#oldest").value=Math.max(...e).toString(),document.querySelector("#average").value=(e.reduce(((e,t)=>e+t),0)/e.length).toFixed(2).toString()},resetForm=(e,t)=>{e.forEach((e=>{e.removeAttribute("aria-invalid")})),t.forEach((e=>{e.value="N/D"})),Object.keys(formState).forEach((e=>{formState[e]=void 0})),toggleSubmitButton()},setupForm=(e,t)=>{const a=document.querySelector("#ages-form");a.addEventListener("change",(e=>{validateInput(e.target),toggleSubmitButton()})),a.addEventListener("submit",(e=>{e.preventDefault();const t=getAges();updateResults(t)})),a.addEventListener("reset",(()=>{resetForm(e,t)}))},inputs=document.querySelectorAll('input[type="number"]'),resetInputs=document.querySelectorAll('input[type="text"]');setupForm(inputs,resetInputs);