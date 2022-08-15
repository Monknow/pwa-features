import"./style.c0ed6924.js";const l=document.querySelector("#look-for-devices-button"),u=document.querySelector("#device-name-span"),o=document.querySelector("#device-battery-span"),n=document.querySelector("#bluetooth-state-span"),t=a=>{n.textContent=a};l.addEventListener("click",async a=>{try{t("looking for devices");const e=await navigator.bluetooth.requestDevice({filters:[{services:["battery_service"]}]});u.textContent=e.name,e.addEventListener("gattserverdisconnected",()=>{n.textContent=`Device ${e.name} is disconnected.`}),t("connecting to device...");const i=await e.gatt.connect();t("accessing device's service...");const s=await i.getPrimaryService("battery_service");t("accessing device's characteristic...");const r=await s.getCharacteristic("battery_level"),d=async()=>{try{const c=await r.readValue();o.textContent=`Battery percentage is ${c.getUint8(0)}`}catch(c){n.textContent=`failed to connect. Error: ${c}`,console.error(c)}};r.addEventListener("characteristicvaluechanged",d),t("reading device's characteristic...");const v=await r.readValue();t("connected"),o.textContent=`${v.getUint8(0)}%`}catch(e){n.textContent=`failed to connect. Error: ${e}`,console.error(e)}});
