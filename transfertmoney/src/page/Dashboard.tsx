import { useEffect, useState } from 'react'
import axios from 'axios'

interface ITransaction {
    _id: string;
    accountSender: string;
    accountReceiver: string;
    balance: number;
    CreatedAt: Date;
}

const Dashboard = () => {
  const [transactions, setTransactions] = useState<ITransaction[]>([])
  const [userName, setUserName] = useState<string>("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    // Récupère les infos utilisateur
    axios.get('http://localhost:5000/api/user/')
      .then(res => setUserName(res.data.nom || "Utilisateur"))
      .catch(() => setUserName("Utilisateur"))

    // Récupère les transactions
    axios.get('http://localhost:5000/api/account/:accountNumber/transactions')
      .then(res => {
        setTransactions(res.data)
        setLoading(false)
      })
      .catch(() => {
        setError("Erreur lors du chargement des transactions")
        setLoading(false)
      })
  }, [])

  if (loading) return <div>Chargement...</div>
  if (error) return <div className="text-red-500">{error}</div>

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Bienvenue {userName}</h1>
      <table className="min-w-full border">
        <thead>
          <tr className="bg-green-700 text-white">
            <th className="py-2 px-4 border">Date</th>
            <th className="py-2 px-4 border">Expediteur</th>
            <th className="py-2 px-4 border">Cible</th>
            <th className="py-2 px-4 border">Montant</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(tx => (
            <tr key={tx._id} className="text-center">
              <td className="py-2 px-4 border">{new Date(tx.CreatedAt).toLocaleDateString()}</td>
              <td className="py-2 px-4 border">{tx.accountSender}</td>
              <td className="py-2 px-4 border">{tx.accountReceiver}</td>
              <td className="py-2 px-4 border">{tx.balance} €</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Dashboard