import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Clock, Users, Award, ExternalLink } from "lucide-react";

interface ProgramCardProps {
  title: string;
  description: string;
  duration: string;
  fee: string;
  technologies: string[];
  mode: string;
  batchSize: string;
  level: string;
  popular?: boolean;
}

export function ProgramCard({ 
  title, 
  description, 
  duration, 
  fee, 
  technologies, 
  mode,
  batchSize,
  level,
  popular = false 
}: ProgramCardProps) {
  const handleEnrollClick = () => {
    const message = `Hi, I'm interested in enrolling for the *${title}* program.

*Program Details:*
- Duration: ${duration}
- Fee: ${fee}
- Mode: ${mode}
- Technologies: ${technologies.join(", ")}

Please provide me with more information about the enrollment process.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919063166195?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Card className="relative flex flex-col h-full hover:shadow-xl transition-all hover:border-red-300">
      {popular && (
        <div className="absolute -top-3 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm shadow-md">
          Most Popular
        </div>
      )}
      <CardHeader>
        <CardTitle className="flex items-start justify-between gap-2">
          <span>{title}</span>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 space-y-4">
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{batchSize}</span>
          </div>
          <div className="flex items-center gap-1">
            <Award className="w-4 h-4" />
            <span>{level}</span>
          </div>
        </div>
        
        <div>
          <p className="text-sm mb-2">Technologies:</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="bg-red-50 text-red-700 hover:bg-red-100">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="pt-2">
          <p className="text-sm text-gray-600">Mode: {mode}</p>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-3 border-t pt-4">
        <div className="flex items-center justify-between w-full">
          <div>
            <p className="text-sm text-gray-500">Program Fee</p>
            <p className="text-2xl text-red-600">{fee}</p>
          </div>
          <Button 
            onClick={handleEnrollClick}
            className="bg-red-600 hover:bg-red-700"
          >
            Enroll Now
          </Button>
        </div>
        <a 
          href="#programs" 
          className="flex items-center gap-1 text-sm text-red-600 hover:text-red-700 transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          View Full Details
        </a>
      </CardFooter>
    </Card>
  );
}
