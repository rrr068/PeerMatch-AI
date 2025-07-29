"use client"

import { useEffect, useState } from "react"
import axios from "axios"

export default function DashboardPage() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get("http://localhost:8888/user/me", { withCredentials: true })
      .then(res => {
        setUser(res.data)
      })
      .catch(() => {
        setUser(null)
      })
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div>Loading...</div>
  if (!user) return <div>ログインしてください</div>

  return (
    <div>
      <h1>ダッシュボード</h1>
      <p>ログインユーザー: {user.email}</p>
    </div>
  )
}