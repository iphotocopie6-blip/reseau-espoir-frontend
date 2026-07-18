import React, { useEffect, useState } from 'react'

const API_URL = "https://reseau-espoir-backend.onrender.com"

export default function App() {
  const [apiStatus, setApiStatus] = useState("Connexion en cours...")
  const [signalement, setSignalement] = useState("")
  const [liste, setListe] = useState<string[]>([])

  // Test connexion backend au chargement
  useEffect(() => {
    fetch(API_URL)
      .then(r => r.json())
      .then(data => setApiStatus(data.message))
      .catch(() => setApiStatus("Backend hors ligne ❌"))
  }, [])

  const envoyerSignalement = () => {
    if(!signalement) return
    setListe([signalement, ...liste])
    setSignalement("")
    alert("Signalement envoyé avec succès ✅ (stocké localement pour l'instant)")
  }

  return (
    <div style={{minHeight:'100vh', background:'#f1f5f9', fontFamily:'sans-serif', padding:20}}>
      <div style={{maxWidth:600, margin:'0 auto', background:'white', borderRadius:20, padding:30, boxShadow:'0 10px 30px rgba(0,0,0,0.1)'}}>
        
        <div style={{textAlign:'center', marginBottom:20}}>
          <img src="/logo.png" alt="Logo" style={{width:100, height:100, borderRadius:20}} 
               onError={(e)=>e.currentTarget.style.display='none'} />
          <h1 style={{color:'#0f172a', fontSize:26, fontWeight:800, margin:'10px 0'}}>RESEAU ESPOIR CITOYEN</h1>
          <div style={{background:'#dcfce7', color:'#166534', padding:'8px 16px', borderRadius:20, fontSize:13, fontWeight:700, display:'inline-block'}}>
            {apiStatus}
          </div>
        </div>

        <div style={{marginTop:25}}>
          <h3 style={{color:'#334155'}}>🚨 Faire un signalement</h3>
          <textarea 
            value={signalement}
            onChange={e=>setSignalement(e.target.value)}
            placeholder="Ex: Route dégradée à Cocody, besoin d'aide..."
            style={{width:'100%', height:100, padding:15, borderRadius:12, border:'1px solid #cbd5e1', marginTop:10, fontSize:15}}
          />
          <button 
            onClick={envoyerSignalement}
            style={{width:'100%', marginTop:12, padding:14, background:'#0f172a', color:'white', border:'none', borderRadius:12, fontWeight:700, fontSize:16, cursor:'pointer'}}
          >
            Envoyer le signalement
          </button>
        </div>

        {liste.length > 0 && (
          <div style={{marginTop:25}}>
            <h3 style={{color:'#334155'}}>📋 Signalements récents</h3>
            {liste.map((item, i) => (
              <div key={i} style={{background:'#f8fafc', padding:12, borderRadius:10, marginTop:8, borderLeft:'4px solid #0f172a'}}>
                {item}
              </div>
            ))}
          </div>
        )}

        <div style={{marginTop:30, textAlign:'center', fontSize:12, color:'#94a3b8'}}>
          Frontend: reseau-espoir-frontend.onrender.com<br/>
          Backend: reseau-espoir-backend.onrender.com
        </div>

      </div>
    </div>
  )
}
