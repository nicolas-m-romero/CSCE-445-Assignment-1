import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Challenge() {
	return (
    <Card>
      <CardHeader>
        <CardTitle>Media Challenge</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          One significant challenge I face when creating media, specifically taking photos is understanding what all
          the tools and options available with mobile photography are. I often do not know what many of the tools and buttons
          found in the camera apps do, and I have noticed that the images I often take are of lesser quality than those I see online.
          I think it would be amazing to have some sort of tool to automatically adjust the camera to the best settings for the specific
          lighting and colors scheme found in the scene I am trying to capture.
        </p>
      </CardContent>
    </Card>
  )
}

