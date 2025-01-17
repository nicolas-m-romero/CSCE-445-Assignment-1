import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Challenge() {
	return (
    <Card>
      <CardHeader>
        <CardTitle>Media Challenge</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          One significant challenge I face in my media consumption and generation is managing information overload. 
					With the vast amount of content available across various platforms, it&apos;s becoming increasingly difficult to 
					filter out noise and focus on meaningful, high-quality information. This overload can lead to decreased productivity 
					and increased stress levels. To address this, I&apos;m working on developing better content curation strategies and implementing 
					digital wellness practices, such as setting specific times for media consumption and using tools to limit notifications and distractions.
        </p>
      </CardContent>
    </Card>
  )
}

