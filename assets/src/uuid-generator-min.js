const UUID_Generator=(()=>{const t=(()=>{const t=()=>(65536*(1+Math.random())|0).toString(16).substring(1);return t()+t()+"-"+t()+t()})();return{get_id:()=>t}})();
