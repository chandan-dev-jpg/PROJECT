import { motion } from 'framer-motion'
import ProfileHeader from '../components/profile/ProfileHeader'
import ActivityCalendar from '../components/profile/ActivityCalendar'
import AchievementsGrid from '../components/profile/AchievementsGrid'
import ProgressChart from '../components/dashboard/ProgressChart'
import RecentSubmissions from '../components/dashboard/RecentSubmissions'

export default function Profile() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <ProfileHeader />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <ProgressChart />
        <ActivityCalendar />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <AchievementsGrid />
        <RecentSubmissions />
      </div>
    </motion.div>
  )
}
