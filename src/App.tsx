import React, { useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { Calendar } from './components/Calendar';
import { Tasks } from './components/Tasks';
import { FinanceTracker } from './components/FinanceTracker';
import { CalendarClock, PiggyBank, CheckSquare, GraduationCap } from 'lucide-react';

function App() {
  const [selectedTab, setSelectedTab] = useState('calendar');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-900">Student Hub</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Tabs.Root value={selectedTab} onValueChange={setSelectedTab}>
          <Tabs.List className="flex space-x-1 rounded-xl bg-white p-1 shadow-sm mb-6">
            <Tabs.Trigger
              value="calendar"
              className={`group flex-1 flex items-center justify-center space-x-2 rounded-lg py-2.5 px-3 text-sm font-medium transition-all
                ${selectedTab === 'calendar' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              <CalendarClock className="h-5 w-5" />
              <span>Calendar</span>
            </Tabs.Trigger>
            <Tabs.Trigger
              value="tasks"
              className={`group flex-1 flex items-center justify-center space-x-2 rounded-lg py-2.5 px-3 text-sm font-medium transition-all
                ${selectedTab === 'tasks' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              <CheckSquare className="h-5 w-5" />
              <span>Tasks</span>
            </Tabs.Trigger>
            <Tabs.Trigger
              value="spending"
              className={`group flex-1 flex items-center justify-center space-x-2 rounded-lg py-2.5 px-3 text-sm font-medium transition-all
                ${selectedTab === 'spending' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              <PiggyBank className="h-5 w-5" />
              <span>Spending</span>
            </Tabs.Trigger>
          </Tabs.List>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <Tabs.Content value="calendar">
              <Calendar />
            </Tabs.Content>
            <Tabs.Content value="tasks">
              <Tasks />
            </Tabs.Content>
            <Tabs.Content value="spending">
              <FinanceTracker />
            </Tabs.Content>
          </div>
        </Tabs.Root>
      </main>
    </div>
  );
}

export default App;