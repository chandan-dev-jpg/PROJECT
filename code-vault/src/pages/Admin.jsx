import { motion } from 'framer-motion'
import AdminStatCard from '../components/admin/AdminStatCard'
import AdminAnalyticsChart from '../components/admin/AdminAnalyticsChart'
import SubmissionsFeed from '../components/admin/SubmissionsFeed'
import ManageUsersTable from '../components/admin/ManageUsersTable'
import ManageProblemsTable from '../components/admin/ManageProblemsTable'
import ManageContestsPanel from '../components/admin/ManageContestsPanel'
import Badge from '../components/ui/Badge'
import { adminStats } from '../data/mockData'

export default function Admin() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div className="flex items-center gap-3">
        <h1 className="font-display text-2xl font-bold text-ink-900 dark:text-white">Admin Panel</h1>
        <Badge tone="violet">Administrator</Badge>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {adminStats.map(s => <AdminStatCard key={s.label} {...s} />)}
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2"><AdminAnalyticsChart /></div>
        <SubmissionsFeed />
      </div>

      <ManageUsersTable />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <ManageProblemsTable />
        <ManageContestsPanel />
      </div>
    </motion.div>
  )
}
