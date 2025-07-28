import { useState } from 'react';
import { Monitor, Server, Wrench, Palette } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import skillsData from '@/data/skills.json';

const iconMap = {
  Monitor,
  Server,
  Wrench,
  Palette,
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Category Navigation */}
          <div className="lg:col-span-1">
            <div className="space-y-2">
              {skillsData.categories.map((category, index) => {
                const Icon = iconMap[category.icon as keyof typeof iconMap];
                return (
                  <button
                    key={index}
                    onClick={() => setActiveCategory(index)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-200 flex items-center gap-3 ${
                      activeCategory === index
                        ? 'bg-primary text-primary-foreground shadow-card'
                        : 'bg-card hover:bg-muted border border-border'
                    }`}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{category.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Skills Display */}
          <div className="lg:col-span-3">
            <Card className="shadow-card border-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  {(() => {
                    const Icon = iconMap[skillsData.categories[activeCategory].icon as keyof typeof iconMap];
                    return <Icon size={24} className="text-primary" />;
                  })()}
                  {skillsData.categories[activeCategory].name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {skillsData.categories[activeCategory].skills.map((skill, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium text-foreground">{skill.name}</h4>
                        <Badge variant="secondary" className="text-xs">
                          {skill.experience}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <Progress value={skill.level} className="h-2" />
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>Proficiency</span>
                          <span>{skill.level}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {skillsData.categories.map((category, index) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap];
            const avgLevel = Math.round(
              category.skills.reduce((sum, skill) => sum + skill.level, 0) / category.skills.length
            );
            
            return (
              <Card key={index} className="text-center p-6 hover:shadow-card transition-shadow">
                <CardContent className="p-0">
                  <Icon size={32} className="text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">{category.name}</h3>
                  <div className="text-2xl font-bold text-primary mb-1">{avgLevel}%</div>
                  <p className="text-sm text-muted-foreground">Average Proficiency</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;