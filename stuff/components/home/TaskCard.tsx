import { CheckCircle2, Circle, Clock } from "lucide-react-native"
import { Text, TouchableOpacity, View } from "react-native"
import { Task } from "../../types/Global"

interface TaskCardProps {
    task: Task
}

export const TaskCard = ({ task }: TaskCardProps) => {

    const priorityColors = {
      high: '#E67E22',
      medium: '#D4831F', 
      low: '#9CA3AF'
    };

    return (
        <TouchableOpacity
        key={task.id}
        className="flex-row items-center p-4 bg-dark-primary-light/50 rounded-xl mb-3 border border-gray-700/50"
      >
        <TouchableOpacity className="mr-4">
          {task.completed ? (
            <CheckCircle2 color="#E67E22" size={24} />
          ) : (
            <Circle color="#6B7280" size={24} />
          )}
        </TouchableOpacity>
        
        <View className="flex-1">
          <Text 
            className={`text-base ${task.completed ? 'text-gray-400 line-through' : 'text-white'}`}
          >
            {task.title}
          </Text>
        </View>
        
        <View className="flex-row items-center">
          <View 
            className="w-2 h-2 rounded-full mr-3"
            style={{ backgroundColor: priorityColors[task.priority] }}
          />
          <View className="flex-row items-center bg-dark-primary-light px-3 py-1 rounded-lg">
            <Clock color="#9CA3AF" size={14} />
            <Text className="text-gray-300 ml-1 text-sm">{task.time}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
}