import {
  Calendar,
  MoreHorizontal,
  Plus,
  Search
} from 'lucide-react-native';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { ProjectCard } from '../../stuff/components/home/ProjectCard';
import { TaskCard } from '../../stuff/components/home/TaskCard';
import { Project, Task } from '../../stuff/types/Global';

const projects: Project[] = [
  {
    id: '1',
    title: 'Landing page',
    category: 'UI & Development',
    color: '#E67E22',
    icon: Calendar
  },
  {
    id: '2',
    title: 'UI Kit',
    category: 'UI Development',
    color: '#E67E22',
    icon: Calendar
  },
  {
    id: '3',
    title: 'Mobile App',
    category: 'Development',
    color: '#E67E22',
    icon: Calendar
  }
];

const todayTasks: Task[] = [
  {
    id: '1',
    title: 'Встреча с командой дизайнеров',
    time: '09:00',
    completed: false,
    priority: 'high'
  },
  {
    id: '2',
    title: 'Обновить UI Kit компоненты',
    time: '11:30',
    completed: false,
    priority: 'medium'
  },
  {
    id: '3',
    title: 'Опубликовать пост в Instagram',
    time: '14:00',
    completed: true,
    priority: 'low'
  },
  {
    id: '4',
    title: 'Звонок с Мохаммедом Смитом',
    time: '16:30',
    completed: false,
    priority: 'high'
  },
  {
    id: '5',
    title: 'Ревью кода новой функции',
    time: '18:00',
    completed: false,
    priority: 'medium'
  }
];

export default function Home() {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('ru-RU', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <SafeAreaView className="flex-1 bg-dark-primary-hard pt-10">
      <StatusBar barStyle="light-content" backgroundColor="#111827" />
      
      <ScrollView 
        className="flex-1"
        showsVerticalScrollIndicator={false}
      >
        <View className="px-6 pt-6 pb-4">
          <View className="flex-row items-center justify-between mb-6">
            <TouchableOpacity className="w-12 h-12 bg-dark-primary-light rounded-xl items-center justify-center">
              <Search color="#9CA3AF" size={24} />
            </TouchableOpacity>
          </View>
        </View>
    
        <View className="mb-8">
          <View className="flex-row items-center justify-between px-6 mb-4">
            <Text className="text-white text-xl font-semibold">
              Проекты
            </Text>
            <TouchableOpacity>
              <MoreHorizontal color="#9CA3AF" size={24} />
            </TouchableOpacity>
          </View>
          
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 24 }}
          >
            {projects.map(
              (project) => (
                <ProjectCard project={project} key={project.id} />
              )
            )}
          </ScrollView>
        </View>

        <View className="px-6 pb-6">
          <View className="flex-row items-center justify-between mb-6">
            <View>
              <Text className="text-white text-xl font-semibold">
                Задачи на сегодня
              </Text>
              <Text className="text-gray-400 text-sm mt-1">
                {formattedDate}
              </Text>
            </View>
            <TouchableOpacity className="w-12 h-12 bg-orange-500 rounded-xl items-center justify-center">
              <Plus color="#FFFFFF" size={24} />
            </TouchableOpacity>
          </View>
          
          <View>
            {todayTasks.map(
              (task) => (
                <TaskCard task={task} key={task.id} />
              )
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
