"use client"

import { useEffect, useState } from "react"
import axios from "axios"

interface Skill {
  ID: number;
  Name: string;
}

interface User {
  Name: string;
  Email: string;
  Skills: Skill[];
  TeachSkills: Skill[];
  LearnSkills: Skill[];
}

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get("http://localhost:8888/user/userInfo", { withCredentials: true })
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
      <p>ログインユーザー: {user.Name}</p>
      <p>メール: {user.Email}</p>
      <p>スキル一覧</p>
      <ul>
        {user.Skills?.map((skill) => (
          <li key={skill.ID}>{skill.Name}</li>
        ))}
      </ul>
    </div>
  )
}