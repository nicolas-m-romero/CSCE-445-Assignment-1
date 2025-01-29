import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PersonalInfo() {
  return (
    <Card className="bg-background">
      <CardHeader>
        <CardTitle>About Me</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col md:flex-row items-center gap-6">
        <Image
          src="/Headshot.JPG?height=300&width=300"
          alt="Your Name"
          width={400}
          height={400}
          className="rounded-lg object-cover"
        />
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-2">Nicolas Romero</h2>
          <p className="text-muted-foreground">
            I am taking this course because I am curious about the relationship between the creators and users of interactive media,
            and how that relationship surrounding the consumed media shapes and influences our society. I am excited to explore the 
            this relationship and further see the impact that the media we consume has on our psyche and perception of our communities
            I want to learn about this intersection of technology and communication, and to gain the skills to better comprehend and navigate
            the media that I consume.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

