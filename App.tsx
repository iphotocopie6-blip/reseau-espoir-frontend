import React from 'react'

export default function App() {
  return (
    <div style={{minHeight:'100vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', background:'#f8fafc', fontFamily:'sans-serif', padding:20}}>
      <img src="/logo.png" alt="Logo" style={{width:120, height:120, borderRadius:20, marginBottom:20}} />
      <h1 style={{color:'#0f172a', fontSize:32, fontWeight:800, textAlign:'center'}}>RESEAU ESPOIR CITOYEN</h1>
      <p style={{color:'#334155', marginTop:10, textAlign:'center', maxWidth:500}}>
        Application citoyenne - Signalement, entraide, et espoir pour nos quartiers.
      </p>
      <div style={{marginTop:30, padding:'12px 24px', background:'#0f172a', color:'white', borderRadius:10, fontWeight:700}}>
        Application en ligne avec succès ✅
      </div>
      <p style={{marginTop:20, fontSize:12, color:'#94a3b8'}}>https://reseau-espoir-frontend.onrender.com</p>
    </div>
  )
}
