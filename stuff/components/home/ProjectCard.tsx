import { MoreHorizontal } from "lucide-react-native"
import { Text, TouchableOpacity, View } from "react-native"
import { Project } from "../../types/Global"

interface ProjectCardProps {
    project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <TouchableOpacity
            className="mr-4 py-2 px-3 rounded-2xl w-64 h-32 border border-gray-700/30 bg-dark-primary-light/50"
            >
            <View className="flex-row items-center justify-between mb-3">
                <View 
                    className="w-10 h-10 rounded-xl items-center justify-center"
                    style={{ backgroundColor: project.color }}
                >
                    <project.icon color="#FFFFFF" size={20} />
                </View>
                <MoreHorizontal color="#9CA3AF" size={20} />
            </View>
            <Text 
                className="text-lg font-bold mb-1 text-white"
            >
                {project.title}
            </Text>
            <Text 
                className="text-sm text-gray-400"
            >
                {project.category}
            </Text>
        </TouchableOpacity>
    )
}