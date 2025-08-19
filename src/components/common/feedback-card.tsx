import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { StarRating } from "../ui/star-rating";

export interface FeedbackCardProps {
  id: string;
  name: string;
  role: string;
  stars?: number;
  feedback: string;
  href?: string;
}

export function FeedbackCard({
  id,
  name,
  role,
  feedback,
  href,
  stars,
}: FeedbackCardProps) {
  return (
    <div className="grid grid-cols-1">
      <Card className="hover:border-[var(--borderHover)] w-[400px] cursor-default transition-all duration-300 border border-[var(--border)]">
        <CardHeader>
          <div className="flex items-center gap-3">
            {href && (
              <Image
                className="w-12 h-12 rounded-full"
                src={href}
                alt={name}
                width={100}
                height={100}
              />
            )}
            <div>
              <CardTitle className="text-lg font-semibold">{name}</CardTitle>
              <CardDescription>{role}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <div className="px-4 pb-4">
          <StarRating rating={stars || 0} />
        </div>

        <CardContent className="text-sm">
          <blockquote className="mt-2 text-sm">{feedback}</blockquote>
        </CardContent>
      </Card>
    </div>
  );
}
