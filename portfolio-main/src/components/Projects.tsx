import { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import projectsData from '@/data/projects.json';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const allProjects = [...projectsData.featured, ...projectsData.other];
  const filteredProjects = selectedCategory === 'All' 
    ? allProjects 
    : allProjects.filter(project => project.category === selectedCategory);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my skills and passion for development
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <Filter className="text-muted-foreground mr-2 mt-2" size={20} />
          {projectsData.categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "bg-primary shadow-card" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProjects.map((project) => (
            <Card key={project.id} className="group hover:shadow-card transition-all duration-300 border-primary/10 overflow-hidden">
              {/* Project Image */}
              {/* Project Image */}
              <div className="aspect-video bg-gradient-primary/10 relative overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                {project.featured && (
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    Featured
                  </Badge>
                )}
              </div>

              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="group-hover:text-primary transition-colors">{project.title}</span>
                  <Badge variant="secondary">{project.category}</Badge>
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="outline" className="text-xs text-muted-foreground">
                      +{project.technologies.length - 4} more
                    </Badge>
                  )}
                </div>

                {/* Highlights for Featured Projects */}
                {project.featured && 'highlights' in project && Array.isArray((project as any).highlights) && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">Key Achievements:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {((project as any).highlights as string[]).slice(0, 2).map((highlight, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-2">
                  {project.liveUrl && (
                    <Button size="sm" className="flex-1" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Show More/Less Button */}
        {filteredProjects.length > 6 && (
          <div className="text-center">
            <Button
              variant="outline"
              onClick={() => setShowAll(!showAll)}
              className="border-primary/20 hover:bg-primary/10"
            >
              {showAll ? 'Show Less' : `Show All Projects (${filteredProjects.length})`}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;