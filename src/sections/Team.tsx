// Define the shape of a single team member object
interface TeamMember {
  name: string;
  role: string;
  desc: string;
  imageUrl: string; // New field for the image path
  alt: string;      // Recommended for accessibility (alt text)
}

// ----------------------------------------------------------------------
// 2. Update the Team Data with Image URLs
// ----------------------------------------------------------------------

// Ensure the image paths match the files in your /public directory
const team: TeamMember[] = [
  { 
    name: "Ivan", 
    role: "Marketing & Strategy", 
    desc: "Founder, Ideation & Funding", 
    imageUrl: "/media/ivan.jpg", // Example path
    alt: "Portrait of Ivan" 
  },
  { 
    name: "Gio", 
    role: "Project Manager", 
    desc: "Solutions Consultant", 
    imageUrl: "/media/Gio.jpeg", 
    alt: "Portrait of Gio" 
  },
  { 
    name: "AB", 
    role: "Full-Stack Developer", 
    desc: "Engineering Lead", 
    imageUrl: "/media/ab.jpg", 
    alt: "Portrait of AB" 
  },
  { 
    name: "Austin", 
    role: "Frontend & AI", 
    desc: "Prompt Engineering & Web Dev", 
    imageUrl: "/media/austin.jpg", 
    alt: "Portrait of Austin" 
  },
];

// ----------------------------------------------------------------------
// 3. Import and Use the Next.js Image Component
// ----------------------------------------------------------------------

import Image from 'next/image';
import { User } from "lucide-react"; // Only used as a fallback

export default function Team() {
  return (
    <section className="py-20">
      <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-foreground">Meet the TekMakon Team</h2>
      <div className="container">
        {/* ... (omitted header for brevity) */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Note: Using member.name as key is safer than index if names are unique */}
          {team.map((member) => ( 
            <div key={member.name} className="flex flex-col items-center text-center">
              
              {/* --- IMAGE BLOCK START --- */}
              <div className="mb-4 h-32 w-32 relative overflow-hidden border-2 rounded-sm border-primary/50">
                <Image
                  src={member.imageUrl}
                  alt={member.alt}
                  // Next.js Image requires width and height, or layout="fill"
                  layout="fill" 
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105" // Optional: for hover effect
                />
              </div>
              {/* --- IMAGE BLOCK END --- */}

              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-sm font-medium text-primary">{member.role}</p>
              <p className="mt-2 text-sm text-muted-foreground">{member.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}