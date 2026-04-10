export default function Dashboard() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">
            SCALON Nexus
          </h1>
          <p className="text-gray-600 mt-2">
            Enterprise CRM Platform - Production Ready
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-sm font-medium text-gray-600">Total Revenue</div>
            <div className="text-3xl font-bold text-gray-900 mt-2">$0</div>
            <div className="text-sm text-green-600 mt-1">+0% from last month</div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-sm font-medium text-gray-600">Active Deals</div>
            <div className="text-3xl font-bold text-gray-900 mt-2">0</div>
            <div className="text-sm text-blue-600 mt-1">0 in pipeline</div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-sm font-medium text-gray-600">Win Rate</div>
            <div className="text-3xl font-bold text-gray-900 mt-2">0%</div>
            <div className="text-sm text-gray-600 mt-1">No data yet</div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-sm font-medium text-gray-600">Avg Deal Size</div>
            <div className="text-3xl font-bold text-gray-900 mt-2">$0</div>
            <div className="text-sm text-gray-600 mt-1">No data yet</div>
          </div>
        </div>

        {/* Welcome Message */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">
            Welcome to SCALON Nexus! 🚀
          </h2>
          <p className="text-lg mb-6">
            Your enterprise CRM is ready. Start by connecting to Firebase and adding your first contacts.
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Add Contact
            </button>
            <button className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
              View Documentation
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-blue-600 text-3xl mb-3">👥</div>
            <h3 className="font-bold text-lg mb-2">Contact Management</h3>
            <p className="text-gray-600">Manage all your contacts and leads in one place.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-green-600 text-3xl mb-3">💼</div>
            <h3 className="font-bold text-lg mb-2">Deal Pipeline</h3>
            <p className="text-gray-600">Track deals through every stage of your sales process.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-purple-600 text-3xl mb-3">📊</div>
            <h3 className="font-bold text-lg mb-2">Analytics</h3>
            <p className="text-gray-600">Get insights with real-time dashboards and reports.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
