import { CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import profileData from '@/data/profile.json';

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know me better and discover what drives my passion for development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground leading-relaxed">
                {profileData.about.description}
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">What I bring to the table:</h3>
              <div className="space-y-3">
                {profileData.about.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Status */}
            <Card className="bg-gradient-primary/10 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-medium text-foreground">
                    {profileData.availability.status}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Image/Visual Content */}
          <div className="flex justify-center">
            <Card className="p-8 shadow-card border-primary/10">
              <CardContent className="p-0">
                <div className="w-full max-w-md aspect-square bg-gradient-primary/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
                      <span className="text-3xl font-bold text-white">
                        {profileData.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {profileData.name}
                    </h3>
                    <p className="text-muted-foreground">
                      {profileData.title}
                    </p>
                    <div className="mt-4 text-sm text-muted-foreground">
                      📍 {profileData.contact.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;