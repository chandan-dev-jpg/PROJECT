import WelcomeBanner from '../components/dashboard/WelcomeBanner'
import StatCard from '../components/dashboard/StatCard'
import DailyChallengeCard from '../components/dashboard/DailyChallengeCard'
import ProgressChart from '../components/dashboard/ProgressChart'
import RecentSubmissions from '../components/dashboard/RecentSubmissions'
import UpcomingContests from '../components/dashboard/UpcomingContests'
import LeaderboardMini from '../components/dashboard/LeaderboardMini'
import RecentBadges from '../components/dashboard/RecentBadges'
import { statCards } from '../data/mockData'

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <WelcomeBanner />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {statCards.map(s => <StatCard key={s.label} {...s} />)}
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="space-y-6 xl:col-span-2">
          <ProgressChart />
          <RecentSubmissions />
        </div>
        <div className="space-y-6">
          <DailyChallengeCard />
          <UpcomingContests />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <LeaderboardMini />
        <RecentBadges />
      </div>
    </div>
  )
}
