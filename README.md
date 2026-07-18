
# RESEAU ESPOIR CITOYEN - Code Source Maquette

## Structure
- App.tsx : Code React complet de la maquette interactive 3 écrans (Dashboard, Parrainage, Portefeuille)
- logo.png : Logo officiel ONG
- Cahier_des_Charges.pdf : Cahier des charges complet
- flutter_app/ : Code Flutter de démarrage (à venir)

## Lancer la maquette React
1. npm install
2. npm run dev
3. Remplace LOGO_URL par ton logo si besoin

## Stack finale recommandée
- Frontend Mobile: Flutter (voir dossier flutter_app/)
- Backend: Laravel + MySQL
- Paiement: CinetPay (Wave, Orange, MTN, Moov)
- SMS: Africa's Talking

Slogan: "Ensemble, bâtissons une Côte d'Ivoire plus citoyenne."

## Flutter - Structure de base (à intégrer)
lib/
  main.dart
  screens/
    dashboard_screen.dart
    parrainage_screen.dart
    wallet_screen.dart
  services/
    api_service.dart
    auth_service.dart

Le code Flutter complet est généré dans le fichier FLUTTER_STARTER.md
