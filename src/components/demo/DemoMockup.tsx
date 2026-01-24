import { motion } from "framer-motion";
import { AlertTriangle, Calendar, BarChart3, Smartphone, Sun, CloudRain, ThermometerSun, Leaf, ArrowRight, Bell, CheckCircle2, TrendingUp, Users } from "lucide-react";

interface DemoMockupProps {
  type: "risk-alert" | "weekly-plan" | "crop-check" | "cooperative-dashboard";
  size?: "sm" | "md" | "lg";
}

export function DemoMockup({ type, size = "md" }: DemoMockupProps) {
  const sizeClasses = {
    sm: "p-3",
    md: "p-4",
    lg: "p-6",
  };

  if (type === "risk-alert") {
    return (
      <div className={`bg-card rounded-xl border border-border ${sizeClasses[size]} space-y-3`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bell className="h-4 w-4 text-primary" />
            <span className="text-xs font-medium text-muted-foreground">Risk Alerts</span>
          </div>
          <span className="text-xs text-muted-foreground">Today, 06:42</span>
        </div>
        
        <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="h-4 w-4 text-destructive" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Fall Armyworm Alert</p>
              <p className="text-xs text-muted-foreground mt-0.5">High risk detected in Nakuru County. Outbreaks reported 15km from your location.</p>
            </div>
          </div>
        </div>

        <div className="bg-accent/10 border border-accent/20 rounded-lg p-3">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
              <CloudRain className="h-4 w-4 text-accent" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Heavy Rain Warning</p>
              <p className="text-xs text-muted-foreground mt-0.5">40mm rainfall expected Thursday. Consider delaying fertiliser application.</p>
            </div>
          </div>
        </div>

        <button className="w-full text-center text-xs text-primary font-medium py-2 hover:bg-primary/5 rounded-lg transition-colors">
          View all alerts →
        </button>
      </div>
    );
  }

  if (type === "weekly-plan") {
    return (
      <div className={`bg-card rounded-xl border border-border ${sizeClasses[size]} space-y-3`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-primary" />
            <span className="text-xs font-medium text-muted-foreground">Weekly Plan</span>
          </div>
          <span className="text-xs font-medium text-primary">Week of 20 Jan</span>
        </div>

        <div className="flex gap-2 overflow-hidden">
          {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
            <div
              key={i}
              className={`flex-1 text-center py-1.5 rounded text-xs font-medium ${
                i === 0 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              }`}
            >
              {day}
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-3 p-2 bg-primary/5 rounded-lg border-l-2 border-primary">
            <CheckCircle2 className="h-4 w-4 text-primary" />
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">Scout for armyworm</p>
              <p className="text-xs text-muted-foreground">Maize – Field A (Priority: High)</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-2 bg-muted/50 rounded-lg border-l-2 border-muted-foreground/30">
            <div className="w-4 h-4 rounded border-2 border-muted-foreground/30" />
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">Apply foliar feed</p>
              <p className="text-xs text-muted-foreground">Beans – Field C (Wed–Thu window)</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-2 bg-muted/50 rounded-lg border-l-2 border-muted-foreground/30">
            <div className="w-4 h-4 rounded border-2 border-muted-foreground/30" />
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">Check irrigation lines</p>
              <p className="text-xs text-muted-foreground">All fields (Before weekend)</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div className="flex items-center gap-1.5">
            <Sun className="h-3.5 w-3.5 text-accent" />
            <span className="text-xs text-muted-foreground">28°C</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CloudRain className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs text-muted-foreground">Rain Thu</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ThermometerSun className="h-3.5 w-3.5 text-destructive" />
            <span className="text-xs text-muted-foreground">High UV</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === "crop-check") {
    return (
      <div className={`bg-card rounded-xl border border-border ${sizeClasses[size]} space-y-3`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="h-4 w-4 text-primary" />
            <span className="text-xs font-medium text-muted-foreground">Crop Check</span>
          </div>
          <span className="text-xs text-muted-foreground">Analysis complete</span>
        </div>

        <div className="relative aspect-[4/3] rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
              <Leaf className="h-8 w-8 text-primary" />
            </div>
          </div>
          <div className="absolute bottom-2 right-2 bg-background/90 backdrop-blur-sm rounded-md px-2 py-1 text-xs font-medium text-foreground">
            Maize – V6 stage
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-foreground">Health Score</span>
            <span className="text-sm font-bold text-primary">78/100</span>
          </div>
          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full" style={{ width: "78%" }} />
          </div>
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-xs">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-muted-foreground">Minor nitrogen deficiency detected</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-muted-foreground">No pest damage visible</span>
          </div>
        </div>

        <button className="w-full bg-primary text-primary-foreground text-sm font-medium py-2 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
          View recommendations
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    );
  }

  if (type === "cooperative-dashboard") {
    return (
      <div className={`bg-card rounded-xl border border-border ${sizeClasses[size]} space-y-3`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-primary" />
            <span className="text-xs font-medium text-muted-foreground">Cooperative Overview</span>
          </div>
          <span className="text-xs font-medium text-primary">Jan 2025</span>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div className="bg-muted/50 rounded-lg p-2 text-center">
            <p className="text-lg font-bold text-foreground">247</p>
            <p className="text-xs text-muted-foreground">Farmers</p>
          </div>
          <div className="bg-muted/50 rounded-lg p-2 text-center">
            <p className="text-lg font-bold text-foreground">1.2k</p>
            <p className="text-xs text-muted-foreground">Scans</p>
          </div>
          <div className="bg-muted/50 rounded-lg p-2 text-center">
            <p className="text-lg font-bold text-primary">94%</p>
            <p className="text-xs text-muted-foreground">Active</p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Avg. Health Score</span>
            <div className="flex items-center gap-1.5">
              <TrendingUp className="h-3.5 w-3.5 text-primary" />
              <span className="font-medium text-foreground">82%</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Alerts Addressed</span>
            <span className="font-medium text-foreground">89%</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Reports Generated</span>
            <span className="font-medium text-foreground">156</span>
          </div>
        </div>

        <div className="pt-2 border-t border-border">
          <p className="text-xs text-muted-foreground mb-2">Top issues this month:</p>
          <div className="flex flex-wrap gap-1.5">
            <span className="text-xs bg-destructive/10 text-destructive px-2 py-0.5 rounded-full">Armyworm (34)</span>
            <span className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded-full">N deficiency (28)</span>
            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">Leaf blight (12)</span>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
