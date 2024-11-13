import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Users,
  Building2,
  Calendar,
  Laptop2,
  CheckSquare,
} from "lucide-react";

export default function Home() {
  const stats = [
    {
      title: "Total Employees",
      value: "124",
      icon: Users,
      description: "Active employees",
      color: "text-violet-500",
    },
    {
      title: "Total Customers",
      value: "89",
      icon: Building2,
      description: "Active accounts",
      color: "text-pink-700",
    },
    {
      title: "Leave Requests",
      value: "12",
      icon: Calendar,
      description: "Pending approval",
      color: "text-orange-700",
    },
    {
      title: "Equipment",
      value: "234",
      icon: Laptop2,
      description: "Items tracked",
      color: "text-emerald-500",
    },
    {
      title: "Active Tasks",
      value: "45",
      icon: CheckSquare,
      description: "In progress",
      color: "text-green-700",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          Welcome to your HR Management Dashboard
        </p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className={cn("h-4 w-4", stat.color)} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}