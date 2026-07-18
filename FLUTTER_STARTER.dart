
// FLUTTER STARTER - RESEAU ESPOIR CITOYEN
// Copie ce code dans lib/main.dart

import 'package:flutter/material.dart';

void main() => runApp(ResauEspoirApp());

class ResauEspoirApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Reseau Espoir Citoyen',
      theme: ThemeData(primaryColor: Color(0xFF1e3a8a), fontFamily: 'Plus Jakarta Sans'),
      home: DashboardScreen(),
    );
  }
}

class DashboardScreen extends StatefulWidget {
  @override _DashboardScreenState createState() => _DashboardScreenState();
}

class _DashboardScreenState extends State<DashboardScreen> {
  int _index = 0;
  final solde = 18000;
  final filleuls = 12;
  final code = "EC458741";

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('RESEAU ESPOIR CITOYEN'), backgroundColor: Color(0xFF1e3a8a)),
      body: _index == 0 ? _buildDashboard() : _index == 1 ? _buildParrainage() : _buildWallet(),
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _index,
        onTap: (i)=>setState(()=>_index=i),
        items: [
          BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Accueil'),
          BottomNavigationBarItem(icon: Icon(Icons.card_giftcard), label: 'Parrainage'),
          BottomNavigationBarItem(icon: Icon(Icons.wallet), label: 'Portefeuille'),
        ],
      ),
    );
  }

  Widget _buildDashboard() {
    return ListView(padding: EdgeInsets.all(16), children: [
      Card(child: ListTile(title: Text('Solde'), subtitle: Text('$solde FCFA', style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold)), trailing: Icon(Icons.visibility))),
      SizedBox(height: 12),
      Card(child: ListTile(leading: Icon(Icons.people), title: Text('$filleuls filleuls'), subtitle: Text('Niveau Bronze -> Argent'))),
      ElevatedButton(onPressed: (){}, child: Text('Inviter un ami - Gagner 2000 FCFA')),
    ]);
  }

  Widget _buildParrainage() {
    return Padding(padding: EdgeInsets.all(16), child: Column(children: [
      Text('Ton code: $code', style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold)),
      SizedBox(height: 10),
      SelectableText('https://reseauespoircitoyen.org/invite/$code'),
      SizedBox(height: 20),
      ElevatedButton.icon(onPressed: (){}, icon: Icon(Icons.share), label: Text('Partager sur WhatsApp')),
    ]));
  }

  Widget _buildWallet() {
    return ListView(children: [
      ListTile(title: Text('+5 000 Bienvenue'), trailing: Text('+5000', style: TextStyle(color: Colors.green))),
      ListTile(title: Text('+2 000 Parrainage Paul'), trailing: Text('+2000', style: TextStyle(color: Colors.green))),
      ListTile(title: Text('-10 000 Retrait Wave'), trailing: Text('-10000', style: TextStyle(color: Colors.red))),
    ]);
  }
}
