import { useState } from "react";
import {
  Home,
  Gift,
  Wallet,
  Bell,
  Share2,
  Copy,
  Check,
  Users,
  ArrowUpRight,
  QrCode,
  Crown,
  Trophy,
  TrendingUp,
  MessageCircle,
  Facebook,
  ChevronRight,
  Clock,
  Smartphone,
  ShieldCheck,
  Award,
  MapPin,
} from "lucide-react";

const LOGO_URL = "container:///mnt/data/image_033bce.png";

export default function App() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "parrainage" | "wallet">("dashboard");
  const [copied, setCopied] = useState<"code" | "link" | null>(null);
  const [showNotif, setShowNotif] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [showAllNews, setShowAllNews] = useState(false);
  const [withdrawMsg, setWithdrawMsg] = useState<string | null>(null);

  const handleCopy = (type: "code" | "link") => {
    setCopied(type);
    setToast(type === "code" ? "Code copié !" : "Lien copié !");
    setTimeout(() => setCopied(null), 1800);
    setTimeout(() => setToast(null), 2200);
  };

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  };

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[#f6f7fb] flex items-center justify-center p-4 md:p-8 font-[Inter,system-ui,sans-serif]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
        * { font-family: 'Plus Jakarta Sans', sans-serif; }
        .scrollbar-hide::-webkit-scrollbar{display:none}
        .scrollbar-hide{ -ms-overflow-style:none; scrollbar-width:none; }
      `}</style>

      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden max-w-[100vw]">
        <div className="absolute -top-[20%] -left-[10%] w-[min(600px,80vw)] h-[min(600px,80vw)] bg-blue-100/60 rounded-full blur-[80px]" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[min(500px,70vw)] h-[min(500px,70vw)] bg-orange-100/60 rounded-full blur-[80px]" />
        <div className="absolute top-[40%] left-[30%] w-[min(300px,50vw)] h-[min(300px,50vw)] bg-green-100/50 rounded-full blur-[70px]" />
      </div>

      {/* Layout wrapper to avoid overflow */}
      <div className="relative w-full max-w-[720px] flex justify-center">
        {/* Phone frame */}
        <div className="relative w-full max-w-[390px] shrink-0 min-w-0">
          {/* Subtle device shadow */}
          <div className="absolute inset-0 top-8 bg-black/10 blur-[40px] rounded-[50px] -z-10 scale-95" />
          
          <div className="relative bg-[#0f0f10] rounded-[48px] p-[10px] shadow-[0_32px_80px_-16px_rgba(0,0,0,0.4),0_0_0_1px_rgba(0,0,0,0.1)] max-w-full overflow-hidden">
          {/* Dynamic island */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[110px] h-[28px] bg-black rounded-b-[16px] z-30" />
          
          <div className="bg-white rounded-[38px] overflow-hidden flex flex-col h-[800px] max-h-[85vh] relative">
            {/* Header */}
            <div className="px-5 pt-10 pb-3 bg-white sticky top-0 z-20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl overflow-hidden bg-white shadow-sm border border-zinc-100 flex items-center justify-center">
                    <img src={LOGO_URL} alt="logo" className="w-full h-full object-contain p-1" />
                  </div>
                  <div className="leading-[1.05]">
                    <p className="text-[11px] font-extrabold tracking-[0.12em] text-[#1e3a8a]">RESEAU</p>
                    <p className="text-[11px] font-extrabold tracking-[0.12em] text-[#1e3a8a] -mt-0.5">ESPOIR CITOYEN</p>
                    <p className="text-[7px] text-zinc-400 font-medium mt-[1px]">Ensemble, bâtissons...</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#f97316]/10 border border-[#f97316]/20">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#f97316] animate-pulse" />
                    <span className="text-[10px] font-bold text-[#f97316]">Bronze</span>
                  </div>
                  <button
                    onClick={() => setShowNotif(!showNotif)}
                    className="relative w-9 h-9 rounded-full bg-zinc-900 text-white grid place-items-center"
                  >
                    <Bell className="w-4 h-4" />
                    <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-[#f97316] rounded-full border-2 border-white" />
                  </button>
                </div>
              </div>

              {showNotif && (
                <div className="absolute right-5 top-[72px] w-[280px] bg-white rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.14)] border border-zinc-100 p-3 z-50">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-[12px] font-bold">Notifications</p>
                    <button onClick={()=>setShowNotif(false)} className="text-[11px] text-zinc-400">Fermer</button>
                  </div>
                  <div className="space-y-2.5">
                    <div className="flex gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-blue-50 grid place-items-center"><Gift className="w-3.5 h-3.5 text-[#1e3a8a]" /></div>
                      <div><p className="text-[11px] font-semibold leading-tight">+2 000 FCFA reçu de Paul K.</p><p className="text-[10px] text-zinc-500">Il y a 2h • Parrainage validé</p></div>
                    </div>
                    <div className="flex gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-orange-50 grid place-items-center"><Award className="w-3.5 h-3.5 text-[#f97316]" /></div>
                      <div><p className="text-[11px] font-semibold leading-tight">Objectif Argent à 60%</p><p className="text-[10px] text-zinc-500">Plus que 8 filleuls</p></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto scrollbar-hide bg-[#fbfbfc] min-w-0 relative">
              {/* Toast */}
              {toast && (
                <div className="sticky top-2 z-30 mx-3 mt-2 rounded-xl bg-zinc-900 text-white text-[11px] font-bold px-3 py-2.5 flex items-center justify-between shadow-lg">
                  <span>{toast}</span>
                  <button onClick={()=>setToast(null)} className="ml-2 opacity-60">✕</button>
                </div>
              )}
              {withdrawMsg && (
                <div className="mx-3 mt-2 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-[11px] font-medium px-3 py-2.5">
                  {withdrawMsg}
                </div>
              )}
              {activeTab === "dashboard" && (
                <div className="px-5 pb-6 space-y-4">
                  {/* Solde Card */}
                  <div className="relative rounded-[24px] overflow-hidden bg-[#1e3a8a] p-5 text-white">
                    <div className="absolute inset-0">
                      <div className="absolute -right-12 -top-16 w-[220px] h-[220px] bg-white/10 rounded-full blur-[1px]" />
                      <div className="absolute -right-8 top-8 w-[140px] h-[140px] bg-[#f97316]/20 rounded-full" />
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between">
                        <p className="text-[11px] font-semibold tracking-widest text-white/70 uppercase">Solde disponible</p>
                        <div className="flex items-center gap-1 text-[10px] bg-white/15 px-2 py-1 rounded-full"><ShieldCheck className="w-3 h-3" /> Sécurisé</div>
                      </div>
                      <div className="mt-3 flex items-baseline gap-2">
                        <h1 className="text-[34px] font-extrabold tracking-tight leading-none">18 000</h1>
                        <span className="text-[15px] font-bold text-white/80">FCFA</span>
                      </div>
                      <div className="mt-4 grid grid-cols-3 gap-2">
                        <div className="bg-white/10 backdrop-blur rounded-2xl px-3 py-2.5">
                          <p className="text-[10px] text-white/60 uppercase tracking-wide">Filleuls</p>
                          <p className="text-[16px] font-bold flex items-center gap-1"><Users className="w-3.5 h-3.5" /> 12</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur rounded-2xl px-3 py-2.5">
                          <p className="text-[10px] text-white/60 uppercase tracking-wide">Gains</p>
                          <p className="text-[16px] font-bold">24K</p>
                        </div>
                        <div className="bg-white text-[#1e3a8a] rounded-2xl px-3 py-2.5">
                          <p className="text-[10px] text-[#1e3a8a]/60 uppercase tracking-wide">Rang</p>
                          <p className="text-[16px] font-bold flex items-center gap-1"><Crown className="w-3.5 h-3.5" /> 47e</p>
                        </div>
                      </div>
                      <div className="mt-4 flex gap-2">
                        <button onClick={()=>setActiveTab("parrainage")} className="flex-1 h-11 rounded-full bg-[#f97316] text-white font-bold text-[13px] flex items-center justify-center gap-2">
                          <Share2 className="w-4 h-4" /> Inviter
                        </button>
                        <button onClick={()=>setActiveTab("wallet")} className="flex-1 h-11 rounded-full bg-white text-[#1e3a8a] font-bold text-[13px] flex items-center justify-center gap-2">
                          <ArrowUpRight className="w-4 h-4" /> Retirer
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Member Card */}
                  <div className="rounded-[20px] bg-white border border-zinc-100 p-4 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
                    <div className="flex items-center justify-between">
                      <p className="text-[12px] font-bold text-zinc-900 flex items-center gap-1.5"><QrCode className="w-4 h-4" /> Carte de membre</p>
                      <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-[#16a34a]/10 text-[#16a34a] border border-[#16a34a]/15">Vérifié</span>
                    </div>

                    <div className="mt-3 flex gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1e3a8a] to-[#2a4fc0] text-white grid place-items-center font-bold text-[14px]">JK</div>
                          <div>
                            <p className="text-[13px] font-bold leading-tight">Jean Koffi</p>
                            <p className="text-[11px] text-zinc-500 flex items-center gap-1"><MapPin className="w-3 h-3" /> Cocody, Abidjan</p>
                            <p className="text-[10px] font-mono text-zinc-400 mt-0.5">#EC-458741 • #MEM-09281</p>
                          </div>
                        </div>

                        <div className="mt-4">
                          <div className="flex items-center justify-between">
                            <p className="text-[10px] font-bold tracking-wide text-zinc-500 uppercase">Niveau Bronze → Argent</p>
                            <p className="text-[10px] font-bold text-[#1e3a8a]">60%</p>
                          </div>
                          <div className="mt-1.5 h-2 w-full bg-zinc-100 rounded-full overflow-hidden">
                            <div className="h-full w-[60%] rounded-full bg-gradient-to-r from-[#1e3a8a] to-[#f97316]" />
                          </div>
                          <p className="mt-1.5 text-[10px] text-zinc-500">Encore 8 filleuls pour passer Argent et débloquer +10% bonus</p>
                        </div>
                      </div>

                      <div className="w-[88px] flex flex-col items-center gap-2">
                        <div className="w-[88px] h-[88px] rounded-xl bg-zinc-50 border border-zinc-100 grid place-items-center p-2">
                          {/* Fake QR */}
                          <div className="grid grid-cols-7 gap-[2px] w-full">
                            {Array.from({length:49}).map((_,i)=>{
                              const isBorder = i<7 || i>=42 || i%7===0 || i%7===6 || (i>14&&i<20&&i%7>1&&i%7<5);
                              const rnd = (i*13)%7>2;
                              return <div key={i} className={`aspect-square rounded-[1px] ${isBorder||rnd?'bg-zinc-900':'bg-white'}`} />
                            })}
                          </div>
                        </div>
                        <p className="text-[9px] font-bold tracking-widest text-zinc-400">QR CODE</p>
                      </div>
                    </div>
                  </div>

                  {/* News */}
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <p className="text-[13px] font-bold">Actualités ONG</p>
                      <button className="text-[11px] font-bold text-[#1e3a8a] flex items-center gap-1">Voir tout <ChevronRight className="w-3 h-3" /></button>
                    </div>
                    <div className="space-y-2.5">
                      <div className="rounded-2xl bg-white border border-zinc-100 p-3 flex gap-3">
                        <div className="w-12 h-12 rounded-xl bg-[#16a34a]/10 grid place-items-center flex-shrink-0"><Award className="w-5 h-5 text-[#16a34a]" /></div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[12px] font-bold leading-tight">Campagne Citoyenne – Cocody</p>
                          <p className="text-[11px] text-zinc-500 leading-snug mt-0.5">Rejoignez 200 jeunes ce samedi pour nettoyer la baie.</p>
                          <p className="text-[10px] text-zinc-400 mt-1 flex items-center gap-1"><Clock className="w-3 h-3" /> Aujourd'hui • +500 pts</p>
                        </div>
                      </div>
                      <div className="rounded-2xl bg-white border border-zinc-100 p-3 flex gap-3">
                        <div className="w-12 h-12 rounded-xl bg-[#f97316]/10 grid place-items-center flex-shrink-0"><TrendingUp className="w-5 h-5 text-[#f97316]" /></div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[12px] font-bold leading-tight">Formation Leadership</p>
                          <p className="text-[11px] text-zinc-500 leading-snug mt-0.5">Devenez Ambassadeur Citoyen certifié.</p>
                          <p className="text-[10px] text-zinc-400 mt-1 flex items-center gap-1"><Clock className="w-3 h-3" /> Demain • Abidjan</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "parrainage" && (
                <div className="px-5 pb-6 space-y-4">
                  <div className="pt-1">
                    <h2 className="text-[18px] font-extrabold leading-tight">Invite tes proches,<br/>gagne à chaque fois</h2>
                    <p className="text-[12px] text-zinc-500 mt-1">2 000 FCFA par filleul vérifié • Bonus instantané</p>
                  </div>

                  {/* Code card */}
                  <div className="rounded-[20px] bg-zinc-900 text-white p-4 relative overflow-hidden">
                    <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full" />
                    <p className="text-[10px] tracking-[0.14em] font-bold text-white/50 uppercase">Ton code parrain</p>
                    <div className="mt-2 flex items-center justify-between">
                      <p className="text-[28px] font-black tracking-widest">EC458741</p>
                      <button onClick={()=>handleCopy("code")} className="w-10 h-10 rounded-full bg-white text-zinc-900 grid place-items-center">
                        {copied==="code" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                    <div className="mt-3 p-3 rounded-xl bg-white/10 backdrop-blur flex items-center justify-between">
                      <p className="text-[11px] font-mono text-white/80 truncate pr-2">https://reseauespoircitoyen.org/invite/EC458741</p>
                      <button onClick={()=>handleCopy("link")} className="shrink-0 text-[11px] font-bold bg-white text-zinc-900 px-3 py-1 rounded-full">
                        {copied==="link" ? "Copié!" : "Copier"}
                      </button>
                    </div>
                  </div>

                  {/* Share actions */}
                  <div className="grid grid-cols-3 gap-2.5">
                    <button className="h-[78px] rounded-2xl bg-[#25D366] text-white flex flex-col items-center justify-center gap-1.5 shadow-sm">
                      <MessageCircle className="w-5 h-5" />
                      <span className="text-[11px] font-bold">WhatsApp</span>
                    </button>
                    <button className="h-[78px] rounded-2xl bg-[#1877F2] text-white flex flex-col items-center justify-center gap-1.5 shadow-sm">
                      <Facebook className="w-5 h-5" />
                      <span className="text-[11px] font-bold">Facebook</span>
                    </button>
                    <button onClick={()=>handleCopy("link")} className="h-[78px] rounded-2xl bg-white border border-zinc-200 text-zinc-900 flex flex-col items-center justify-center gap-1.5">
                      {copied==="link" ? <Check className="w-5 h-5 text-[#16a34a]" /> : <Share2 className="w-5 h-5" />}
                      <span className="text-[11px] font-bold">{copied==="link" ? "Lien copié" : "Copier lien"}</span>
                    </button>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="rounded-2xl bg-white border border-zinc-100 p-3.5">
                      <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wide">Filleuls</p>
                      <p className="text-[22px] font-extrabold mt-1">12</p>
                      <p className="text-[11px] text-[#16a34a] font-semibold mt-1 flex items-center gap-1"><TrendingUp className="w-3 h-3" /> +3 cette semaine</p>
                    </div>
                    <div className="rounded-2xl bg-white border border-zinc-100 p-3.5">
                      <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wide">Gagné</p>
                      <p className="text-[22px] font-extrabold mt-1">24 000 <span className="text-[12px] font-bold text-zinc-400">FCFA</span></p>
                      <p className="text-[11px] text-zinc-500 mt-1">100% via parrainage</p>
                    </div>
                  </div>

                  {/* Leaderboard */}
                  <div className="rounded-[20px] bg-white border border-zinc-100 p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-[13px] font-bold flex items-center gap-1.5"><Trophy className="w-4 h-4 text-[#f97316]" /> Top Parrains</p>
                      <span className="text-[10px] px-2 py-1 rounded-full bg-zinc-50 border border-zinc-100 font-bold text-zinc-500">Cette semaine</span>
                    </div>
                    <div className="mt-3 space-y-2.5">
                      {[
                        {name:"Aminata T.", score:"87 filleuls", rank:1, badge:"🥇"},
                        {name:"Kader D.", score:"62 filleuls", rank:2, badge:"🥈"},
                        {name:"Jean Koffi", score:"12 filleuls", rank:47, me:true},
                      ].map((u)=>(
                        <div key={u.name} className={`flex items-center gap-3 rounded-xl px-3 py-2.5 ${u.me?'bg-[#1e3a8a] text-white':'bg-zinc-50'}`}>
                          <span className="text-[14px] w-6 text-center">{u.badge ?? `#${u.rank}`}</span>
                          <div className="w-8 h-8 rounded-full bg-white/20 grid place-items-center text-[11px] font-bold">{u.name.split(' ').map(n=>n[0]).join('')}</div>
                          <div className="flex-1 min-w-0">
                            <p className={`text-[12px] font-bold leading-tight ${u.me?'text-white':'text-zinc-900'}`}>{u.name} {u.me && <span className="opacity-70 font-medium">(toi)</span>}</p>
                            <p className={`text-[10px] ${u.me?'text-white/70':'text-zinc-500'}`}>{u.score}</p>
                          </div>
                          <ChevronRight className={`w-4 h-4 ${u.me?'text-white/50':'text-zinc-300'}`} />
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                      <div className="rounded-xl bg-zinc-50 py-2"><p className="text-[10px] text-zinc-400 font-bold uppercase">Top Région</p><p className="text-[11px] font-bold mt-0.5">Abidjan</p></div>
                      <div className="rounded-xl bg-zinc-50 py-2"><p className="text-[10px] text-zinc-400 font-bold uppercase">Top Commune</p><p className="text-[11px] font-bold mt-0.5">Cocody</p></div>
                      <div className="rounded-xl bg-zinc-50 py-2"><p className="text-[10px] text-zinc-400 font-bold uppercase">Top Jeunes</p><p className="text-[11px] font-bold mt-0.5">18-25 ans</p></div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "wallet" && (
                <div className="px-5 pb-6 space-y-4">
                  {/* Balance + threshold */}
                  <div className="rounded-[20px] bg-white border border-zinc-100 p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-[12px] font-bold">Portefeuille</p>
                      <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-[#f97316]/10 text-[#f97316]">Seuil 20 000 FCFA</span>
                    </div>
                    <div className="mt-3 flex items-baseline gap-2">
                      <p className="text-[30px] font-extrabold tracking-tight">18 000</p>
                      <span className="text-[13px] font-bold text-zinc-400">FCFA</span>
                      <span className="ml-auto text-[11px] font-bold text-amber-600 bg-amber-50 border border-amber-100 px-2 py-1 rounded-full">-2 000 pour retrait</span>
                    </div>
                    <div className="mt-3">
                      <div className="h-2 bg-zinc-100 rounded-full overflow-hidden">
                        <div className="h-full w-[90%] bg-gradient-to-r from-[#1e3a8a] to-[#16a34a] rounded-full" />
                      </div>
                      <div className="mt-1.5 flex justify-between text-[10px] text-zinc-500"><span>0</span><span className="font-bold text-zinc-900">90% du seuil</span><span>20 000</span></div>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <button className="h-11 rounded-full bg-zinc-900 text-white font-bold text-[12px] flex items-center justify-center gap-2 opacity-60">
                        <Wallet className="w-4 h-4" /> Retirer (bientôt)
                      </button>
                      <button onClick={()=>setActiveTab("parrainage")} className="h-11 rounded-full bg-[#f97316] text-white font-bold text-[12px]">Gagner +2 000</button>
                    </div>
                  </div>

                  {/* Methods */}
                  <div>
                    <p className="text-[12px] font-bold mb-2.5">Méthodes de retrait</p>
                    <div className="grid grid-cols-2 gap-2.5">
                      {[
                        {name:"Orange Money", color:"bg-[#ff7900]", short:"OM"},
                        {name:"MTN Money", color:"bg-[#ffcb05] text-black", short:"MTN"},
                        {name:"Wave", color:"bg-[#1dc8ff]", short:"WAV"},
                        {name:"Moov Money", color:"bg-[#0066b2]", short:"MOOV"},
                      ].map(m=>(
                        <div key={m.name} className="rounded-2xl bg-white border border-zinc-100 p-3 flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-xl ${m.color} text-white grid place-items-center font-black text-[11px]`}>{m.short}</div>
                          <div className="flex-1"><p className="text-[11px] font-bold leading-tight">{m.name}</p><p className="text-[10px] text-zinc-500">Instantané</p></div>
                          <div className="w-5 h-5 rounded-full border border-zinc-200 grid place-items-center"><div className="w-2 h-2 rounded-full bg-zinc-200" /></div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* History */}
                  <div>
                    <p className="text-[12px] font-bold mb-2.5">Historique</p>
                    <div className="rounded-[20px] bg-white border border-zinc-100 overflow-hidden">
                      {[
                        {type:"Bienvenue", amount:"+5 000", desc:"Bonus d'inscription", time:"12 Oct • 10:32", icon:Gift, color:"bg-blue-50 text-[#1e3a8a]"},
                        {type:"Parrainage", amount:"+2 000", desc:"Paul K. a rejoint", time:"13 Oct • 14:10", icon:Users, color:"bg-green-50 text-[#16a34a]"},
                        {type:"Parrainage", amount:"+2 000", desc:"Aïcha M. a rejoint", time:"14 Oct • 09:05", icon:Users, color:"bg-green-50 text-[#16a34a]"},
                        {type:"Partage", amount:"+1 000", desc:"Lien partagé validé", time:"14 Oct • 16:44", icon:Share2, color:"bg-orange-50 text-[#f97316]"},
                        {type:"Retrait", amount:"-10 000", desc:"Vers Wave • 07XXXXXX12", time:"10 Oct • 18:20", icon:Smartphone, color:"bg-zinc-100 text-zinc-600"},
                      ].map((tx,i)=>(
                        <div key={i} className={`flex items-center gap-3 p-3.5 ${i!==4?'border-b border-zinc-50':''}`}>
                          <div className={`w-10 h-10 rounded-xl grid place-items-center ${tx.color}`}><tx.icon className="w-4 h-4" /></div>
                          <div className="flex-1 min-w-0">
                            <p className="text-[12px] font-bold leading-tight">{tx.type} <span className="font-medium text-zinc-400">• {tx.desc}</span></p>
                            <p className="text-[10px] text-zinc-400 mt-0.5">{tx.time}</p>
                          </div>
                          <p className={`text-[13px] font-extrabold ${tx.amount.startsWith('+')?'text-[#16a34a]':'text-zinc-900'}`}>{tx.amount}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom tabs */}
            <div className="px-3 pb-3 pt-2 bg-white border-t border-zinc-100">
              <div className="h-[64px] rounded-[22px] bg-zinc-900 flex items-center p-1.5">
                {[
                  {id:"dashboard", label:"Accueil", icon:Home},
                  {id:"parrainage", label:"Parrainage", icon:Gift},
                  {id:"wallet", label:"Portefeuille", icon:Wallet},
                ].map(tab=>{
                  const active = activeTab===tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={()=>setActiveTab(tab.id as any)}
                      className={`flex-1 h-full rounded-[16px] flex flex-col items-center justify-center gap-1 transition-all ${active?'bg-white text-zinc-900 shadow-sm':'text-white/60 hover:text-white/90'}`}
                    >
                      <tab.icon className={`w-[18px] h-[18px] ${active?'text-[#1e3a8a]':''}`} />
                      <span className="text-[10px] font-bold tracking-wide">{tab.label}</span>
                    </button>
                  )
                })}
              </div>
              <div className="mt-2.5 flex justify-center">
                <div className="w-24 h-1 rounded-full bg-zinc-200" />
              </div>
            </div>
          </div>
        </div>

        {/* Side labels for desktop */}
        <div className="hidden lg:block absolute -right-[200px] top-10 w-[180px] space-y-4">
          <div className="rounded-2xl bg-white border border-zinc-100 p-3 shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-wide text-zinc-400">Identité</p>
            <p className="text-[11px] font-semibold mt-1 leading-snug">Bleu roi #1e3a8a • Orange #f97316 • Vert #16a34a. Style citoyen, mains ouvertes, colombe.</p>
          </div>
          <div className="rounded-2xl bg-[#1e3a8a] text-white p-3 shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-wide text-white/60">Slogan</p>
            <p className="text-[11px] font-bold mt-1 leading-snug">“Ensemble, bâtissons une Côte d’Ivoire plus citoyenne.”</p>
          </div>
          <div className="rounded-2xl bg-white border border-zinc-100 p-3 shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-wide text-zinc-400">Anti-fraude</p>
            <p className="text-[11px] mt-1 leading-snug text-zinc-600">OTP • 1 compte / numéro • Détection appareil • Bonus conditionnel</p>
          </div>
        </div>
      </div>
    </div>
  );
}
