// Central mock data source — swap for real API calls later.

export const currentUser = {
  id: 'u1',
  name: 'Chandan Behera',
  username: 'chandan_dev',
  email: 'chandan@codevault.dev',
  role: 'Student',
  avatar: 'CB',
  rank: 342,
  rating: 1847,
  points: 12480,
  streak: 27,
  longestStreak: 41,
  solved: 214,
  totalProblems: 3120,
  joinDate: 'Mar 2025',
  bio: 'Java Full Stack Developer • Spring Boot & React • Building things that scale.',
  badges: ['30-Day Streak', 'Contest Finalist', '100 Problems Club', 'Fast Solver'],
}

export const statCards = [
  { label: 'Problems Solved', value: 214, delta: '+12 this week', icon: 'CheckCircle2', color: 'emerald' },
  { label: 'Current Rank', value: '#342', delta: 'Up 28 spots', icon: 'Trophy', color: 'amber' },
  { label: 'Total Points', value: '12,480', delta: '+640 this week', icon: 'Gem', color: 'violet' },
  { label: 'Coding Streak', value: '27 days', delta: 'Personal best: 41', icon: 'Flame', color: 'rose' },
]

export const progressData = [
  { month: 'Feb', solved: 12, rating: 1420 },
  { month: 'Mar', solved: 28, rating: 1510 },
  { month: 'Apr', solved: 41, rating: 1580 },
  { month: 'May', solved: 63, rating: 1670 },
  { month: 'Jun', solved: 89, rating: 1740 },
  { month: 'Jul', solved: 214, rating: 1847 },
]

export const difficultyBreakdown = [
  { name: 'Easy', value: 108, color: '#10B981' },
  { name: 'Medium', value: 84, color: '#F59E0B' },
  { name: 'Hard', value: 22, color: '#EF4444' },
]

export const dailyChallenge = {
  title: 'Merge K Sorted Linked Lists',
  difficulty: 'Hard',
  tags: ['Linked List', 'Divide & Conquer', 'Heap'],
  acceptance: 42.6,
  reward: 50,
  timeLeft: '09:24:16',
}

export const recentSubmissions = [
  { id: 1, problem: 'Two Sum', status: 'Accepted', language: 'Java', time: '2 min ago', runtime: '4ms' },
  { id: 2, problem: 'Longest Palindromic Substring', status: 'Wrong Answer', language: 'JavaScript', time: '1 hr ago', runtime: '—' },
  { id: 3, problem: 'Binary Tree Zigzag Traversal', status: 'Accepted', language: 'Java', time: '3 hr ago', runtime: '2ms' },
  { id: 4, problem: 'Course Schedule II', status: 'Time Limit Exceeded', language: 'Python', time: 'Yesterday', runtime: '—' },
  { id: 5, problem: 'Valid Parentheses', status: 'Accepted', language: 'Java', time: 'Yesterday', runtime: '1ms' },
]

export const upcomingContests = [
  { id: 1, name: 'Weekly Contest 428', date: 'Jul 20, 2026', time: '8:00 PM IST', duration: '1h 30m', registered: true, participants: 8420 },
  { id: 2, name: 'Code Vault Sprint #12', date: 'Jul 24, 2026', time: '7:00 PM IST', duration: '2h 00m', registered: false, participants: 3190 },
  { id: 3, name: 'Biweekly Contest 154', date: 'Jul 27, 2026', time: '8:00 PM IST', duration: '1h 30m', registered: false, participants: 5210 },
]

export const liveContests = [
  { id: 9, name: 'Global Algo League — Round 3', endsIn: '00:42:18', participants: 12300 },
]

export const leaderboard = [
  { rank: 1, name: 'Aarav Sharma', username: 'aarav_codes', rating: 2841, points: 48200, avatar: 'AS', trend: 'up' },
  { rank: 2, name: 'Li Wei', username: 'liwei_dev', rating: 2790, points: 46800, avatar: 'LW', trend: 'up' },
  { rank: 3, name: 'Sofia Petrova', username: 'sofia_p', rating: 2765, points: 45990, avatar: 'SP', trend: 'down' },
  { rank: 4, name: 'Marcus Chen', username: 'mchen', rating: 2701, points: 44120, avatar: 'MC', trend: 'up' },
  { rank: 5, name: 'Fatima Noor', username: 'fnoor', rating: 2688, points: 43870, avatar: 'FN', trend: 'same' },
  { rank: 6, name: 'Diego Ramirez', username: 'diegor', rating: 2650, points: 42990, avatar: 'DR', trend: 'up' },
  { rank: 7, name: 'Priya Patel', username: 'priyap', rating: 2610, points: 41230, avatar: 'PP', trend: 'down' },
  { rank: 8, name: 'Kenji Sato', username: 'ksato', rating: 2588, points: 40650, avatar: 'KS', trend: 'up' },
]

export const badges = [
  { name: '30-Day Streak', icon: 'Flame', earned: true, color: 'rose' },
  { name: 'Contest Finalist', icon: 'Medal', earned: true, color: 'amber' },
  { name: '100 Problems Club', icon: 'Award', earned: true, color: 'violet' },
  { name: 'Fast Solver', icon: 'Zap', earned: true, color: 'brand' },
  { name: 'Perfect Week', icon: 'Star', earned: false, color: 'emerald' },
  { name: 'Team Player', icon: 'Users', earned: false, color: 'cyan' },
]

export const problems = [
  { id: 1, title: 'Two Sum', difficulty: 'Easy', acceptance: 51.2, tags: ['Array', 'Hash Table'], status: 'Solved' },
  { id: 2, title: 'Add Two Numbers', difficulty: 'Medium', acceptance: 41.8, tags: ['Linked List', 'Math'], status: 'Solved' },
  { id: 3, title: 'Longest Substring Without Repeating Characters', difficulty: 'Medium', acceptance: 34.5, tags: ['Hash Table', 'Sliding Window'], status: 'Attempted' },
  { id: 4, title: 'Median of Two Sorted Arrays', difficulty: 'Hard', acceptance: 39.9, tags: ['Array', 'Binary Search'], status: 'Todo' },
  { id: 5, title: 'Longest Palindromic Substring', difficulty: 'Medium', acceptance: 33.1, tags: ['String', 'DP'], status: 'Attempted' },
  { id: 6, title: 'Merge K Sorted Linked Lists', difficulty: 'Hard', acceptance: 42.6, tags: ['Linked List', 'Heap'], status: 'Todo' },
  { id: 7, title: 'Valid Parentheses', difficulty: 'Easy', acceptance: 40.7, tags: ['Stack', 'String'], status: 'Solved' },
  { id: 8, title: 'Search in Rotated Sorted Array', difficulty: 'Medium', acceptance: 38.6, tags: ['Array', 'Binary Search'], status: 'Solved' },
  { id: 9, title: 'Course Schedule II', difficulty: 'Medium', acceptance: 45.2, tags: ['Graph', 'Topological Sort'], status: 'Attempted' },
  { id: 10, title: 'Binary Tree Zigzag Traversal', difficulty: 'Medium', acceptance: 55.3, tags: ['Tree', 'BFS'], status: 'Solved' },
  { id: 11, title: 'Word Ladder', difficulty: 'Hard', acceptance: 36.4, tags: ['Graph', 'BFS'], status: 'Todo' },
  { id: 12, title: 'Climbing Stairs', difficulty: 'Easy', acceptance: 52.9, tags: ['DP', 'Math'], status: 'Solved' },
  { id: 13, title: 'Trapping Rain Water', difficulty: 'Hard', acceptance: 61.1, tags: ['Array', 'Two Pointers'], status: 'Todo' },
  { id: 14, title: 'LRU Cache', difficulty: 'Medium', acceptance: 43.0, tags: ['Design', 'Hash Table'], status: 'Attempted' },
  { id: 15, title: 'Number of Islands', difficulty: 'Medium', acceptance: 59.4, tags: ['Graph', 'DFS'], status: 'Solved' },
  { id: 16, title: 'Maximum Subarray', difficulty: 'Easy', acceptance: 50.6, tags: ['Array', 'DP'], status: 'Solved' },
  { id: 17, title: 'Serialize and Deserialize Binary Tree', difficulty: 'Hard', acceptance: 58.2, tags: ['Tree', 'Design'], status: 'Todo' },
  { id: 18, title: 'Coin Change', difficulty: 'Medium', acceptance: 42.1, tags: ['DP'], status: 'Attempted' },
  { id: 19, title: 'Implement Trie', difficulty: 'Medium', acceptance: 65.7, tags: ['Trie', 'Design'], status: 'Todo' },
  { id: 20, title: 'Reverse Linked List', difficulty: 'Easy', acceptance: 73.5, tags: ['Linked List'], status: 'Solved' },
]

export const problemDetail = {
  id: 6,
  title: 'Merge K Sorted Linked Lists',
  difficulty: 'Hard',
  acceptance: 42.6,
  tags: ['Linked List', 'Divide & Conquer', 'Heap'],
  likes: 18400,
  dislikes: 620,
  statement: `You are given an array of k linked-lists, each sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.`,
  constraints: [
    'k == lists.length',
    '0 <= k <= 10^4',
    '0 <= lists[i].length <= 500',
    '-10^4 <= lists[i][j] <= 10^4',
    'The sum of lists[i].length will not exceed 10^4',
  ],
  examples: [
    { input: 'lists = [[1,4,5],[1,3,4],[2,6]]', output: '[1,1,2,3,4,4,5,6]', explanation: 'Merging the three lists produces one sorted list.' },
    { input: 'lists = []', output: '[]' },
    { input: 'lists = [[]]', output: '[]' },
  ],
  testCases: [
    { input: '[[1,4,5],[1,3,4],[2,6]]', expected: '[1,1,2,3,4,4,5,6]' },
    { input: '[]', expected: '[]' },
    { input: '[[]]', expected: '[]' },
  ],
}

export const languages = [
  { id: 'java', label: 'Java', starter: `class Solution {\n    public ListNode mergeKLists(ListNode[] lists) {\n        // write your solution here\n        return null;\n    }\n}\n` },
  { id: 'javascript', label: 'JavaScript', starter: `/**\n * @param {ListNode[]} lists\n * @return {ListNode}\n */\nvar mergeKLists = function(lists) {\n    // write your solution here\n};\n` },
  { id: 'python', label: 'Python', starter: `class Solution:\n    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:\n        # write your solution here\n        pass\n` },
  { id: 'cpp', label: 'C++', starter: `class Solution {\npublic:\n    ListNode* mergeKLists(vector<ListNode*>& lists) {\n        // write your solution here\n        return nullptr;\n    }\n};\n` },
]

export const activityCalendar = Array.from({ length: 371 }, (_, i) => ({
  day: i,
  count: Math.floor(Math.random() * 6) - (Math.random() > 0.35 ? 4 : 0),
})).map(d => ({ ...d, count: Math.max(0, d.count) }))

export const adminStats = [
  { label: 'Total Users', value: '48,210', delta: '+312 today', icon: 'Users' },
  { label: 'Total Problems', value: '3,120', delta: '+8 this week', icon: 'FileCode2' },
  { label: 'Active Contests', value: '4', delta: '2 live now', icon: 'Swords' },
  { label: 'Submissions Today', value: '92,410', delta: '+6.4%', icon: 'SendHorizontal' },
]

export const adminUsers = [
  { id: 1, name: 'Aarav Sharma', email: 'aarav@codevault.dev', role: 'Student', status: 'Active', joined: 'Jan 12, 2026' },
  { id: 2, name: 'Fatima Noor', email: 'fatima@codevault.dev', role: 'Admin', status: 'Active', joined: 'Nov 03, 2025' },
  { id: 3, name: 'Kenji Sato', email: 'kenji@codevault.dev', role: 'Student', status: 'Suspended', joined: 'Feb 20, 2026' },
  { id: 4, name: 'Diego Ramirez', email: 'diego@codevault.dev', role: 'Student', status: 'Active', joined: 'Mar 09, 2026' },
  { id: 5, name: 'Sofia Petrova', email: 'sofia@codevault.dev', role: 'Student', status: 'Active', joined: 'May 28, 2026' },
]

export const adminSubmissions = [
  { id: 1, user: 'aarav_codes', problem: 'Two Sum', status: 'Accepted', language: 'Java', time: '2 min ago' },
  { id: 2, user: 'fnoor', problem: 'Coin Change', status: 'Accepted', language: 'Python', time: '5 min ago' },
  { id: 3, user: 'diegor', problem: 'Trapping Rain Water', status: 'Wrong Answer', language: 'C++', time: '11 min ago' },
  { id: 4, user: 'ksato', problem: 'LRU Cache', status: 'Runtime Error', language: 'Java', time: '19 min ago' },
]
